import React from 'react';
import BigNumber from 'bignumber.js';

import { view } from 'react-easy-state';
import { useWeb3React } from '@web3-react/core';

import CompoundAPR from './CompoundAPR';
import exchangeModal from '../stores/exchangeModal';
import If from './If';
import myAccount from '../stores/myAccount';
import Unless from './Unless';
import yourInvestment from '../stores/yourInvestment';
import YourInvestment from './YourInvestment';

const threeDecimals = (amount) => BigNumber(amount).decimalPlaces(3).toFixed();

const AWPDetail = (props) => {
  const { account } = useWeb3React();

  if (account && !yourInvestment.data) {
    yourInvestment.init();
  }

  return (
    <section className="content">
      <div className="awp-detail-container">
        <div className="pre-investment">
          <div className="left">
            <If condition={myAccount.awpTransactions && myAccount.awpTransactions.length > 1}>
              <YourInvestment {...props} />
            </If>

            <Unless
              condition={myAccount.awpTransactions && myAccount.awpTransactions.length > 1}
            >
              <CompoundAPR {...props} />
            </Unless>
          </div>

          <div className="right">
            <Unless condition={account}>
              <h1 className="title">You can do better than DeFi Lending</h1>
              <div className="text">
                We backtesting the All Weather Portfolio and the AWP++ against DeFi
                Lending in the last 12 months. Don&apos;t take our word for it. Have a look
                at the chart on the left.
              </div>
            </Unless>

            <If condition={account}>
              <h1 className="title">Your Investment</h1>
              <div className="your-balance">
                <div className="row">
                  <span>Value</span>
                  <div className="earned">
                    <span className="label label-black">$</span>
                    {threeDecimals(myAccount.awpBalanceInDai)}
                  </div>
                </div>
                <div className="row">
                  <span>Gains</span>
                  <div className="apy">
                    <div className="label label-green">{threeDecimals(myAccount.awpGain)}</div>
                  </div>
                </div>
              </div>
            </If>

            <button className="btn modal" type="button" onClick={exchangeModal.open}>
              Buy More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default view(AWPDetail);
