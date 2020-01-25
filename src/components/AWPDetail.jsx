import React from 'react';

import { view } from 'react-easy-state';
import { useWeb3React } from '@web3-react/core';

import CompoundAPR from './CompoundAPR';
import If from './If';
import myAccount from '../stores/myAccount';
import Unless from './Unless';
import YourInvestment from './YourInvestment';

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
              <button className="btn modal" type="button">
                Buy More
              </button>
            </div>
          </div>
        </Unless>

        <If condition={account}>
          <div className="post-investment">
            <div className="left">
              <YourInvestment />
            </div>
          </div>

          <div className="right">
            <h1 className="title">Your Investment</h1>
            <div className="your-balance">
              <div className="row">
                <span>Value</span>
                <div className="earned">
                  <div className="label label-black">$</div>
                  {myAccount.awpBalance}
                </div>
              </div>
              <div className="row">
                <span>Gains</span>
                <div className="apy">
                  <div className="label label-green">{myAccount.awpGain}</div>
                </div>
              </div>
            </div>
          </div>
        </If>
      </div>
    </section>
  );
};

export default view(AWPDetail);
