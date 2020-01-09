import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({
    // Only supports kovan at the moment
    supportedChainIds: [42]
})