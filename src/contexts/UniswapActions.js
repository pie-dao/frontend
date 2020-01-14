import React, { createContext, useContext, useReducer, useCallback, useMemo, useEffect, useState} from "react";
import { useWeb3React, useTokenContract, useExchangeContract } from '../hooks';
import { isAddress, getContract, safeAccess } from '../utils';
import { ethers } from "ethers";
import { useBlockNumber } from "./Application";

const UPDATE = 'UPDATE'
const PortfolioActionsContext = createContext()

export const TOKEN_BOUGHT = 'TOKENS_BOUGHT';
export const TOKEN_SOLD = 'TOKENS_SOLD';

function useUniswapActionsContext() {
    return useContext(PortfolioActionsContext)
}

function reducer(state, { type, payload }) {
  switch (type) {
    case UPDATE: {
      const { chainId, address, tokenAddress, data } = payload
      return {
        ...state,
        [chainId]: {
          ...(safeAccess(state, [chainId]) || {}),
          [address]: {
            ...(safeAccess(state, [chainId, address]) || {}),
            [tokenAddress]: {
              ...(safeAccess(state, [chainId, address, tokenAddress]) || {}),
              [payload.type]: data
            }
          }
        }
      }
    }
    default: {
      throw Error(`Unexpected action type in UniswapActionsContext reducer: '${type}'.`)
    }
  }
}

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, {})
  
    const update = useCallback((chainId, address, tokenAddress, type, data) => {
      // console.log(state);
      dispatch({ type: UPDATE, payload: { chainId, address, tokenAddress,  data, type } })
    }, [])
  
    return (
      <PortfolioActionsContext.Provider value={useMemo(() => [state, { update }], [state, update])}>
        {children}
      </PortfolioActionsContext.Provider>
    )
}

export function useUniswapTokensBought(address, tokenAddress, exchangeAddress) {
  const { library, chainId } = useWeb3React()
  const [state, { update }] = useUniswapActionsContext()
  const [tokensBought, setTokensBought] = useState();
  const token = useTokenContract(tokenAddress);
  const globalBlockNumber = useBlockNumber();
  
  const { transactions, blockNumber } = safeAccess(state, [chainId, address, tokenAddress, TOKEN_BOUGHT]) || {}


  useEffect(() => {
    if(
      chainId &&
      isAddress(address) &&
      isAddress(tokenAddress) &&
      isAddress(exchangeAddress) &&
      library &&
      (transactions === undefined || blockNumber !== globalBlockNumber)
    ) {
      let stale = false;
      let filter = token.filters.Transfer(exchangeAddress, address, null);
      filter.fromBlock = 0;

      token.provider.getLogs(filter)
      .then(result => {
        if(!stale) {
          update(chainId, address, tokenAddress, TOKEN_BOUGHT, parseEvents(result, globalBlockNumber));
        }
      })
      .catch(error => { console.log(error) });

      return () => {
        stale = true
      }
    } 
  }, [chainId, address, transactions, tokenAddress, blockNumber, globalBlockNumber, update])

  return transactions;
}


function parseEvents(events, blockNumber) {
  const result = {
    blockNumber,
    transactions: []
  }
  
  for (const event of events) {
    const { blockNumber, blockHash, data } = event;
    result.transactions.push({
      blockNumber,
      blockHash,
      amount: ethers.utils.bigNumberify(data)
    });
  }
  // console.log(result);
  return result;
}

export function useUniswapTokensSold(address, tokenAddress) {
  // TODO implement this when there is support for selling the tokens
}

// export function useUniswapActions(address, tokenAddress) {
//     const { library, chainId } = useWeb3React();
  
// }