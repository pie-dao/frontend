import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from "./Network.js";

const POLLING_INTERVAL = 10000

export const injected = new InjectedConnector({
    // Only supports kovan at the moment
    supportedChainIds: [42]
})

export const network = new NetworkConnector({
    urls: { 1: process.env.REACT_APP_NETWORK_URL },
    pollingInterval: POLLING_INTERVAL
})

