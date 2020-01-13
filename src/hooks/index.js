import { useEffect, useRef, useMemo, useState, isMobile } from 'react'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core';
import { NetworkContextName } from '../constants';
import { getExchangeContract, getContract } from '../utils';
import { injected } from '../connectors'
import ERC20_ABI from '../constants/abis/erc20'

export function useWeb3React() {
    const context = useWeb3ReactCore()
    const contextNetwork = useWeb3ReactCore(NetworkContextName)
  
    return context.active ? context : contextNetwork;
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

export function useEagerConnect() {
  const { activate, active } = useWeb3ReactCore() // specifically using useWeb3ReactCore because of what this hook does

  const [tried, setTried] = useState(false)

  useEffect(() => {
    injected.isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true)
        })
      } else {
        if (isMobile && window.ethereum) {
          activate(injected, undefined, true).catch(() => {
            setTried(true)
          })
        } else {
          setTried(true)
        }
      }
    })
  }, [activate]) // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (active) {
      setTried(true)
    }
  }, [active])

  return tried
}

/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */
export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3ReactCore() // specifically using useWeb3React because of what this hook does

  useEffect(() => {
    const { ethereum } = window

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        // eat errors
        activate(injected, undefined, true).catch(() => {})
      }

      const handleAccountsChanged = accounts => {
        if (accounts.length > 0) {
          // eat errors
          activate(injected, undefined, true).catch(() => {})
        }
      }

      const handleNetworkChanged = () => {
        // eat errors
        activate(injected, undefined, true).catch(() => {})
      }

      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('networkChanged', handleNetworkChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
        }
      }
    }

    return () => {}
  }, [active, error, suppress, activate])
}