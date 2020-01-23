/* eslint react/prop-types: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';

import { view } from 'react-easy-state';

import { shortenAddress } from '../utils/address';

import Identicon from './Identicon';

const ConnectWeb3Button = ({ onboard, wallet }) => {
  const connect = async () => {
    await onboard.walletSelect();
    await onboard.walletCheck();
  };

  const shortAddress = wallet ? shortenAddress(wallet.address) : '';

  return (
    <div className="web3button container" onClick={connect}>
      {wallet ? (
        <>
          <p>{shortAddress}</p>
          <div className="icon-container">
            <div className="image-container">
              <Identicon diameter={100} />
            </div>
          </div>
        </>
      ) : (
        'Connect Web3'
      )}
    </div>
  );
};

export default view(ConnectWeb3Button);
