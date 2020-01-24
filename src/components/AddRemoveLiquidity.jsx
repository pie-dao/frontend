import React from 'react';

import { view } from 'react-easy-state';

import ConnectWeb3Button from './ConnectWeb3Button';

const AddRemoveLiquidity = () => (
  <>
    <div className="liquidity-container">
      <div className="liquidity-left">
        <div className="tab-navi"></div>
      </div>
      <div className="single-asset">
        <div className="asset-left">
          <div className="availability bg-black">
            <img
              className="icon"
              src="../assets/img/available.svg"
              alt="icon"
            />
            <div className="liquidity-label">Avail</div>
          </div>
          <div className="asset-amount">72 TLT</div>
        </div>
        <div className="asset-weight bg-TLT">36%</div>
      </div>
    </div>
    <ConnectWeb3Button />
  </>
);

export default view(AddRemoveLiquidity);
