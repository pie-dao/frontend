import { ethers } from 'ethers';
import { store } from 'react-easy-state';
import Notify from 'bnc-notify';

const NETWORK_ID = 42;

const notify = Notify({
  dappId: '523b279d-0fe0-42e8-8977-e688c3686e57',
  networkId: NETWORK_ID,
});

const eth = store({
  account: undefined,
  awp: '0x70d1c8c8300a785ee4efe74db4d2972a7e669cf6',
  awpX: '0xF640d521793B5BF474fD4051543E9D238f108334',
  dai: '0x1d7e3a1a65a367db1d1d3f51a54ac01a2c4c92ff',
  daiX: '0x1a3e8f0A53E0524fC2DF6841408abe778C8Ecd9d',
  maxUint: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  network: 'kovan',
  networkId: NETWORK_ID,
  provider: undefined,
  signer: undefined,
  startingBlock: 16268627,

  getLibrary: (provider) => {
    eth.provider = new ethers.providers.Web3Provider(provider);
    eth.signer = eth.provider.getSigner();
    eth.account = provider.selectedAddress;
    return eth.provider;
  },
  notify: ({ hash }) => {
    notify.hash(hash);
  },
});

export default eth;
