import React, { useContext, useReducer, useCallback, useMemo, useEffect, createContext } from "react";
import { safeAccess } from "../utils";
import { useWeb3React } from "../hooks";

const ADD = 'ADD'

const BlocksContext = createContext();

export function useBlocksContext() {
    return useContext(BlocksContext);
}

function reducer(state, { type, payload }) {
    switch(type) {
        case ADD: {
            const { networkId, hash, response} = payload;

            // TODO throw error if block is already added
            return {
                ...state,
                [networkId]: {
                    ...safeAccess(state, [networkId] || {}),
                    [hash]: response
                }
            }
        }
        default : {
            throw Error(`Unexpected action type in BlocksContext reducer: '${type}'.`)
        }
    }
}

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, {});

    const add = useCallback((networkId, hash, response) =>{
        // TODO dispatch
        dispatch({ type: ADD, payload: {networkId, hash, response}});
    }, []);

    return (
        <BlocksContext.Provider value={useMemo(() => [state, { add }], [state, add])}>
            {children}
        </BlocksContext.Provider>
    )

}


export function useBlock(hash) {
    const { chainId, library } = useWeb3React();
    const [state, { add }] = useBlocksContext();
    const value = safeAccess(state, [chainId, hash]);
    useEffect(() => {
        if(
            (library)  &&
            (chainId || chainId === 0) &&
            hash &&
            !value
        ) {
            
            let stale = false;
            
            library.getBlock(hash)
                .then(value => {
                    if(!stale) {
                        add(chainId, hash, value);
                    }
                })
                .catch(() => {
                    if(!stale) {
                        add(chainId, hash, null);
                    }
                })

            return () => {
                stale = true;
            }
        }
    }, [chainId, library, hash, add, value])

    return value
}