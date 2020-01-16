import React, { createContext, useContext, useReducer, useCallback, useMemo, useEffect, useState} from "react";
import { useWeb3React, useTokenContract, useExchangeContract } from '../hooks';
import { isAddress, getContract, safeAccess } from '../utils';
import { ethers } from "ethers";
import { useBlockNumber } from "./Application";
import { useTransactionAdderByHash, useTransaction, useTransactionsContext } from "./Transactions";
import { useBlocksContext } from "./Blocks";
import { amountFormatter } from "../utils";

const UPDATE = 'UPDATE';
const ADD_INPUT = "ADD_INPUT";
const SET_RATE = ""
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
    case ADD_INPUT: {
      console.log("ADD_INPUT");
      const { chainId, address, tokenAddress, txHash, inputToken, inputAmount } = payload;
      return {
        ...state,
        [chainId]: {
          ...(safeAccess(state, [chainId]) || {}),
          [address]: {
            ...(safeAccess(state, [chainId, address]) || {}),
            [tokenAddress]: {
              ...(safeAccess(state, [chainId, address, tokenAddress]) || {}),
              [payload.type]: {
                ...(safeAccess(state, [chainId, address, tokenAddress, payload.type]) || {}),
                ["transactions"]: {
                  ...(safeAccess(state, [chainId, address, tokenAddress, payload.type, "transactions"]) || {}),
                  [txHash]: {
                    ...(safeAccess(state, [chainId, address, tokenAddress, payload.type, "transactions", txHash]) || {}),
                    inputToken,
                    inputAmount
                  }
                }
              }
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

    console.log(state);
  
    const update = useCallback((chainId, address, tokenAddress, type, data) => {
      dispatch({ type: UPDATE, payload: { chainId, address, tokenAddress,  data, type } })
    }, [])

    const addInput = useCallback((chainId, address, tokenAddress, type, txHash, inputToken, inputAmount) => {
      dispatch({ type: ADD_INPUT, payload: {chainId, address, tokenAddress, type, txHash, inputToken, inputAmount}})
    }, [])
  
    return (
      <PortfolioActionsContext.Provider value={useMemo(() => [state, { update, addInput }], [state, update, addInput])}>
        {children}
      </PortfolioActionsContext.Provider>
    )
}

function formatTimestamp(timestamp)  {
  var newDate = new Date();
  newDate.setTime(timestamp*1000);
  return newDate.toUTCString();
}


export function useUniswapHistoricPosition(address, tokenAddress, exchangeAddress) {
  const { library, chainId } = useWeb3React();
  const [state, {  }] = useUniswapActionsContext()
  const [oldValue, setValue] = useState({});
  const [blockState] = useBlocksContext();
  const actions = safeAccess(state, [chainId, address, tokenAddress, TOKEN_BOUGHT, "transactions"]) || [];
  const globalBlockNumber = useBlockNumber();

  let totalPosition = ethers.utils.bigNumberify(0);
  let totalDeposited = ethers.utils.bigNumberify(0);
  let value = {};
  let stale = false;

  // return ({});
  
  if(
    library &&
    (chainId || chainId ===0) &&
    actions &&
    actions.blockNumber != globalBlockNumber
  ) {
    let stale = false;
    const keys = Object.keys(actions)
    for(const key of keys) {
      const action = actions[key];
      // console.log(action);
      // if(!action.inputAmount) {
      //   return [];
      // }
      if(   
        action.amount &&
        action.inputAmount &&
        !stale
      ) {
        totalPosition = totalPosition.add(action.amount);
        totalDeposited = totalDeposited.add(action.inputAmount);
        const timestamp = safeAccess(blockState, [chainId, action.blockHash, "timestamp"]);
        // console.log(timestamp);
        // if timestamp not found return empty array
        
        if(!timestamp) {
          break;
        }


        if(oldValue[timestamp]) {
          value[timestamp] = oldValue[timestamp];
          continue;
        }

        const price = action.inputAmount.mul(ethers.utils.parseUnits("1")).div(action.amount);

        value[timestamp] = {
          price: amountFormatter(price),
          totalAmount: amountFormatter(totalPosition),
          totalDeposited: amountFormatter(totalDeposited),
          totalPositionValue: amountFormatter(price.mul(totalDeposited).div(ethers.utils.parseUnits("1")) ),
          timestamp,
          readableTime: formatTimestamp(timestamp)
        }
        
        
      }
      
    }

    if(Object.keys(value).length > Object.keys(oldValue) ) {
      setValue(value);
    }
    
  }

  // console.log(value);
  // const value = [];

  return value;
}

export function useUniswapTokensBought(address, tokenAddress, exchangeAddress) {
  const { library, chainId } = useWeb3React()
  const [state, { update, addInput }] = useUniswapActionsContext()
  // const [tokensBought, setTokensBought] = useState();
  const token = useTokenContract(tokenAddress);
  const globalBlockNumber = useBlockNumber();
  
  const { transactions, blockNumber } = safeAccess(state, [chainId, address, tokenAddress, TOKEN_BOUGHT]) || {}
  console.log('blockNumber', blockNumber)
  console.log('globalBlockNumber', globalBlockNumber)

  const txAdder = useTransactionAdderByHash();
  const [txState] = useTransactionsContext();
  // return transactions;

  useEffect(() => {
    if(
      chainId &&
      isAddress(address) &&
      isAddress(tokenAddress) &&
      isAddress(exchangeAddress) &&
      library &&
      (transactions == undefined || blockNumber !== globalBlockNumber) // &&
      // transactions
    ) {
      let stale = false;
      let filter = token.filters.Transfer(exchangeAddress, address, null);
      filter.fromBlock = 0;

      token.provider.getLogs(filter)
      .then(result => {
        if(!stale) {
          update(chainId, address, tokenAddress, TOKEN_BOUGHT, parseEvents(result, globalBlockNumber));

          for(let action of result ) {
            // console.log(tx);
            txAdder(action.transactionHash);
            
            // If receipt received lookup input token
            const logs = safeAccess(txState, [chainId, action.transactionHash, "receipt", "logs"])
            // console.log(logs);
            // console.log(receipt);
            // console.log(receipt);
            if(logs) {
              for (const event of logs) {
                // GET transfer event which is not the output token
                if(
                  event.topics[0] === "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" &&
                  isAddress(event.address) != isAddress(tokenAddress)
                ) {
                  // console.log(event);

                  addInput(chainId, address, tokenAddress, TOKEN_BOUGHT, action.transactionHash, event.address, ethers.utils.bigNumberify(event.data), );
                }
              }
            }

          }
          
          // const tx = getTransaction(chainId, action.transactionHash);
          // console.log(token.filters);

        }
      })
      .catch(error => { console.log(error) });

      return () => {
        stale = true
      }
    } 
  }, [chainId, address, transactions, tokenAddress, blockNumber, globalBlockNumber, update, addInput])
  return transactions;
}


function parseEvents(events, blockNumber) {
  const result = {
    blockNumber,
    transactions: {},
  }
  
  for (const event of events) {
    const { blockNumber, blockHash, data, transactionHash } = event;
    result.transactions[transactionHash] = {
      blockNumber,
      blockHash,
      transactionHash,
      amount: ethers.utils.bigNumberify(data)
    };
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