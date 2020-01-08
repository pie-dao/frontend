  
import React, { createContext, useContext, useReducer, useMemo, useCallback, useEffect } from "react";

const TOGGLE_WALLET_CONNECTION_MODAL = "TOGGLE_WALLET_CONNECTION_MODAL";
const WALLET_MODAL_OPEN = "WALLET_CONNECTION_MODAL_OPEN";


const ApplicationContext = createContext();

function useApplicationContext() {
    return useContext(ApplicationContext);
}

function reducer(state, { type, payload }) {
    switch (type) {
      case TOGGLE_WALLET_CONNECTION_MODAL: {
        return { ...state, [WALLET_MODAL_OPEN]: !state[WALLET_MODAL_OPEN] }
      }
      default: {
        throw Error(`Unexpected action type in ApplicationContext reducer: '${type}'.`)
      }
    }
}

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, {
      [WALLET_MODAL_OPEN]: false
    })
  
    const toggleWalletConnectionModal = useCallback(() => {
      dispatch({ type: TOGGLE_WALLET_CONNECTION_MODAL })
    }, [])
  
    return (
      <ApplicationContext.Provider
        value={useMemo(() => [state, { toggleWalletConnectionModal }], [
          state,
          toggleWalletConnectionModal
        ])}
      >
        {children}
      </ApplicationContext.Provider>
    )
}

export function useWalletModalOpen() {
    const [state] = useApplicationContext()  
    return state[WALLET_MODAL_OPEN]
}

export function useWalletModalToggle() {
    const [, { toggleWalletConnectionModal }] = useApplicationContext()  
    return toggleWalletConnectionModal
}
