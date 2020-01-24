import React from 'react';

import { view } from 'react-easy-state';
import { useWeb3React } from '@web3-react/core';

import CompoundAPR from './CompoundAPR';
import Unless from './Unless';

const AWPDetail = (props) => {
  const { account } = useWeb3React();

  // TODO: Buy modal
  return (
    <section className="content">
      <div className="awp-detail-container">
        <Unless condition={account}>
          <div className="pre-investment">
            <div className="left">
              <CompoundAPR {...props} />
            </div>

            <div className="right">
              <h1 className="title">You can do better than DeFi Lending</h1>
              <div className="text">
                We backtesting the All Weather Portfolio and the AWP++ against DeFi
                Lending in the last 12 months. Don&apos;t take our word for it. Have a look
                at the chart on the left.
              </div>
              <button
                className="btn modal"
                type="button"
                ButtonLabel="Buy Now"
              >
                Buy More
              </button>
            </div>
          </div>
        </Unless>
      </div>
    </section>
  );
};

export default view(AWPDetail);
