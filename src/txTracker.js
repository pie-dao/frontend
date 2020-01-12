import Notify from "bnc-notify";

var notify = Notify({
    dappId: "523b279d-0fe0-42e8-8977-e688c3686e57",       // [String] The API key created by step one above
    networkId: parseInt(process.env.REACT_APP_NETWORK_ID)  // [Integer] The Ethereum network ID your Dapp uses.
});

export const track = txHash => {
    notify.hash(txHash)
}