import { useEffect, useRef, useMemo } from 'react'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core';
import { NetworkContextName } from '../constants';
import { getExchangeContract, getContract } from '../utils';
import ERC20_ABI from '../constants/abis/erc20'

export function useWeb3React() {
    const context = useWeb3ReactCore()
    const contextNetwork = useWeb3ReactCore(NetworkContextName)
  
    return context.active ? context : contextNetwork
}

// modified from https://usehooks.com/usePrevious/
export function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef()
  
    // Store current value in ref
    useEffect(() => {
      ref.current = value
    }, [value]) // Only re-run if value changes
  
    // Return previous value (happens before update in useEffect above)
    return ref.current
}

export function useExchangeContract(exchangeAddress, withSignerIfPossible = true) {
  const { library, account } = useWeb3React()

  return useMemo(() => {
    try {
      return getExchangeContract(exchangeAddress, library, withSignerIfPossible ? account : undefined)
    } catch {
      return null
    }
  }, [exchangeAddress, library, withSignerIfPossible, account])
}


// returns null on errors
export function useTokenContract(tokenAddress, withSignerIfPossible = true) {
  const { library, account } = useWeb3React()

  return useMemo(() => {
    try {
      return getContract(tokenAddress, ERC20_ABI, library, withSignerIfPossible ? account : undefined)
    } catch {
      return null
    }
  }, [tokenAddress, library, withSignerIfPossible, account])
}