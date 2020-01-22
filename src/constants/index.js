import { injected } from '../connectors'

export const FACTORY_ADDRESSES = {
  1: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  3: '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351',
  4: '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36',
  42: '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30'
}

export const NETWORKS = {
  1: {
    name: "Mainnet",
    symbol: "ETH",
  },
  42: {
    name: "Kovan",
    symbol: "KETH",
  }
}

export const SUPPORTED_WALLETS = {
    INJECTED: {
      connector: injected,
      name: 'Injected',
      iconName: 'arrow-right.svg',
      description: 'Injected web3 provider.',
      href: null,
      color: '#010101',
      primary: true
    },
    METAMASK: {
      connector: injected,
      name: 'MetaMask',
      iconName: 'metamask.png',
      description: 'Easy-to-use browser extension.',
      href: null,
      color: '#E8831D'
    },
};

export const NetworkContextName = 'NETWORK';
export const DAI_ADDRESS = "0x1d7e3a1a65a367db1d1d3f51a54ac01a2c4c92ff";
export const AWP_ADDRESS = "0x70d1c8c8300a785ee4efe74db4d2972a7e669cf6";
export const DAI_EXCHANGE = "0x1a3e8f0A53E0524fC2DF6841408abe778C8Ecd9d";
export const AWP_EXCHANGE = "0xF640d521793B5BF474fD4051543E9D238f108334";