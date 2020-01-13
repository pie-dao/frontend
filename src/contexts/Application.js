  
import React, { createContext, useContext, useReducer, useMemo, useCallback, useEffect } from "react";
import { useWeb3React } from "../hooks";

const BLOCK_NUMBER = 'BLOCK_NUMBER'

const TOGGLE_WALLET_CONNECTION_MODAL = "TOGGLE_WALLET_CONNECTION_MODAL";
const WALLET_MODAL_OPEN = "WALLET_CONNECTION_MODAL_OPEN";
const UPDATE_BLOCK_NUMBER = 'UPDATE_BLOCK_NUMBER'

const ApplicationContext = createContext();

function useApplicationContext() {
    return useContext(ApplicationContext);
}

function reducer(state, { type, payload }) {
    switch (type) {
      case UPDATE_BLOCK_NUMBER: {
        const { networkId, blockNumber } = payload
        return {
          ...state,
          [BLOCK_NUMBER]: {
            ...(safeAccess(state, [BLOCK_NUMBER]) || {}),
            [networkId]: blockNumber
          }
        }
      }
      case TOGGLE_WALLET_CONNECTION_MODAL: {
        return { ...state, [WALLET_MODAL_OPEN]: !state[WALLET_MODAL_OPEN] }
      }
      default: {
        throw Error(`Unexpected action type in ApplicationContext reducer: '${type}'.`)
      }
    }
}

function safeAccess(object, path) {
  return object
    ? path.reduce(
        (accumulator, currentValue) => (accumulator && accumulator[currentValue] ? accumulator[currentValue] : null),
        object
      )
    : null
}

export function Updater() {
  const { library, chainId } = useWeb3React()

  const [, { updateBlockNumber }] = useApplicationContext()

  // update block number
  useEffect(() => {
    if (library) {
      let stale = false

      function update() {
        library
          .getBlockNumber()
          .then(blockNumber => {
            if (!stale) {
              updateBlockNumber(chainId, blockNumber)
            }
          })
          .catch(() => {
            if (!stale) {
              updateBlockNumber(chainId, null)
            }
          })
      }

      update()
      library.on('block', update)

      return () => {
        stale = true
        library.removeListener('block', update)
      }
    }
  }, [chainId, library, updateBlockNumber])

  return null
}

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, {
      [WALLET_MODAL_OPEN]: false
    })
  
    const toggleWalletConnectionModal = useCallback(() => {
      dispatch({ type: TOGGLE_WALLET_CONNECTION_MODAL })
    }, [])

    const updateBlockNumber = useCallback((networkId, blockNumber) => {
      dispatch({ type: UPDATE_BLOCK_NUMBER, payload: { networkId, blockNumber } })
    }, [])
  
    return (
      <ApplicationContext.Provider
        value={useMemo(() => [state, { updateBlockNumber, toggleWalletConnectionModal }], [
          state,
          updateBlockNumber,
          toggleWalletConnectionModal
        ])}
      >
        {children}
      </ApplicationContext.Provider>
    )
}

export function useBlockNumber() {
  const { chainId } = useWeb3React()

  const [state] = useApplicationContext()

  return safeAccess(state, [BLOCK_NUMBER, chainId])
}

export function useWalletModalOpen() {
    const [state] = useApplicationContext()  
    return state[WALLET_MODAL_OPEN]
}

export function useWalletModalToggle() {
    const [, { toggleWalletConnectionModal }] = useApplicationContext()  
    return toggleWalletConnectionModal
}
