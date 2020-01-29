import React from 'react';
import BigNumber from 'bignumber.js';

import { view } from 'react-easy-state';

import CompoundAPR from './CompoundAPR';
import eth from '../stores/eth';
import exchangeModal from '../stores/exchangeModal';
import If from './If';
import myAccount from '../stores/myAccount';
import Unless from './Unless';
import yourInvestment from '../stores/yourInvestment';
import YourInvestment from './YourInvestment';

const threeDecimals = (amount) => BigNumber(amount).decimalPlaces(3).toFixed();

const AWPDetail = (props) => {
  const { account } = eth;

  if (account && (!yourInvestment.data || yourInvestment.account !== account)) {
    yourInvestment.init(account);
  }

  let accountReady = false;
  if (myAccount.awpTransactions && myAccount.awpTransactions.length > 1) {
    accountReady = true;
  }

  return (
    <section className="content">
      <div className="awp-detail-container">
        <div className="left">
          <If condition={accountReady}>
            <YourInvestment {...props} account={account} />
          </If>

          <Unless condition={accountReady}>
            <CompoundAPR {...props} />
          </Unless>
        </div>

        <div className="right">
          <Unless condition={myAccount.awpTransactions && myAccount.awpTransactions.length > 0}>
            <h1 className="title">You can do better than DeFi Lending</h1>
            <div className="text">
              We backtesting the All Weather Portfolio and the AWP++ against DeFi
              Lending in the last 12 months. Don&apos;t take our word for it. Have a look
              at the chart on the left.
            </div>
          </Unless>

          <If condition={myAccount.awpTransactions && myAccount.awpTransactions.length > 0}>
            <h1 className="title investment">Your Investment</h1>
            <div className="your-balance text">
              <div className="row">
                <div>Value</div>
                <div className="earned">
                  <div className="label label-black">$</div>
                  {threeDecimals(myAccount.awpBalanceInDai)}
                </div>
              </div>
              <div className="row">
                <If condition={BigNumber(myAccount.awpGain).isGreaterThan(0)}>
                  <div>Gains</div>
                  <div className="apy-awp">
                    <div className="label-green-awpgains">{threeDecimals(myAccount.awpGain)}</div>
                  </div>
                </If>
                <If condition={BigNumber(myAccount.awpGain).isZero()}>
                  <span>Gains</span>
                  <div className="apy-awp">
                    <div className="label label-yellow">{threeDecimals(myAccount.awpGain)}</div>
                  </div>
                </If>
                <If condition={BigNumber(myAccount.awpGain).isLessThan(0)}>
                  <span>Losses</span>
                  <div className="apy-awp">
                    <div className="label label-red">{threeDecimals(myAccount.awpGain)}</div>
                  </div>
                </If>
              </div>
            </div>
          </If>

          <button className="btn modal" type="button" onClick={exchangeModal.open}>
            Buy More
          </button>
        </div>
      </div>
    </section>
  );
};

export default view(AWPDetail);
