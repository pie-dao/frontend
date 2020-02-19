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
  awp: '0x7cb095e839c2da9fc693435ac4e9dc0b25bd8e74',
  awpX: '0xb28d6F7A62Dd1B7b39fAC5e67DBf1dBe3653AEF6',
  setIssuanceModule: '0x91E1489D04054Ae552a369504F94E0236909c53c',
  setTransferProxy: '0x61d264865756751392C0f00357Cc26ea70D98E3B',
  bntIndex: '0xf09a28dcf6e78c1d41c007e9c455690b9caa856a',
  btcIndex: '0x8ff461ce88b24eed98626d31ebc4dad4c3766909',
  dai: '0xff2c8f09c8b20847972db158d8c63e45f026796f',
  daiX: '0xc3a4e9a3adc7e128a43a5da6dac5677b90a17d01',
  disconnected: false,
  error: undefined,
  errorObject: undefined,
  ethIndex: '0x5a7f66df53bfe91668163ac9bc4e032a9b1a7933',
  gldIndex: '0x50ba867f2e744cc37454226f5d284eb508225bfe',
  gsgIndex: '0xb3fbd03338febe9412995c2f85c67837aba0d783',
  ieiIndex: '0x47E2e4B61446144202D0293BF5E1959377D8564D',
  kncIndex: '0x88d152c819cf3e0e5b08c57cebf4abeee802c1ac',
  linkIndex: '0xdae0064c4d70f9b5013436c4a7abcd2802f347fc',
  lrcIndex: '0x6fe8a29f39c2ae7394ca08d0e6be08d1f3e85271',
  maxUint: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  mkrIndex: '0xa1fe796b933e8da15198f01d36138aa309da2a54',
  mlnIndex: '0x49fd060dfaa23e1a94cd4557733b007dbc77896b',
  network: 'kovan',
  networkId: NETWORK_ID,
  provider: undefined,
  renIndex: '0x16755ad903793b0d173889d0f4acfe319b1d0b62',
  signer: undefined,
  snxIndex: '0xd301aff0da4a2035fbb2e3804bb000cdc1ad9050',
  startingBlock: 16268627,
  tltIndex: '0x9Cfe6CA5f4C082Aee3415a602B1800c5debdc52d',
  vtiIndex: '0x6818148626150841D4BAEc19aeF8cd75413112e0',
  zrkIndex: '0xe6b123645a67b29de05b71e99f0c2210e439bb79',

  dismissError: () => {
    eth.error = undefined;
    try {
      eth.errorObject.dismiss();
    } catch (e) {
      eth.errorObject = undefined;
    }
  },
  getLibrary: (provider) => {
    eth.dismissError();

    if (eth.disconnected) {
      console.log('Disconnected', eth.disconnected);
      return undefined;
    }

    if (!provider.networkVersion) {
      eth.error = 'Ethereum not found. Unable to connect. Is MetaMask installed?';
      return undefined;
    }

    if (provider.networkVersion !== '42') {
      eth.wrongNetwork();
      return undefined;
    }

    eth.provider = new ethers.providers.Web3Provider(provider);
    eth.signer = eth.provider.getSigner();
    eth.account = provider.selectedAddress;

    return eth.provider;
  },
  init: () => {
    eth.disconnected = localStorage.getItem('disconnected') === 'true';
  },
  notify: ({ hash }) => {
    const { emitter } = notify.hash(hash);
    return { emitter, hash };
  },
  reset: () => {
    eth.account = undefined;
    eth.provider = undefined;
    eth.signer = undefined;
  },
  wrongNetwork: () => {
    eth.reset();
    eth.error = 'Incorrect network. Please connect to kovan.';
    eth.errorObject = notify.notification({
      eventCode: 'wrongNetwork',
      type: 'error',
      message: eth.error,
    });
  },
});

export default eth;
