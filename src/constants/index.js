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
    symbol: "ETH"
  },
  42: {
    name: "Kovan",
    symbol: "KETH"
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
export const AWP_ADDRESS = "0xb77208fbb2d3fd907a81b47a243271c0b547fd18";
export const DAI_EXCHANGE = "0x1a3e8f0A53E0524fC2DF6841408abe778C8Ecd9d";
export const AWP_EXCHANGE = "0x2419822a3632417942C3eF9b2942Baf50D6Ea2C4";