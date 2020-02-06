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
      <div className="awp-detail-container lg:flex-row">
        <div className="awp-detail-left">
          <If condition={accountReady}>
            <YourInvestment {...props} account={account} />
          </If>

          <Unless condition={accountReady}>
            <CompoundAPR {...props} />
          </Unless>
        </div>

        <div className="awp-detail-right">
          <Unless condition={myAccount.awpTransactions && myAccount.awpTransactions.length > 0}>
            <h1 className="title lg:text lg:text-left">DeFi is more than Lending</h1>
            <div className="text lg:text-left">
              AWP++ is a buy-and-hold tokenized portfolio with diversified exposure
              to equity, commodities,T-bills (20y/3y), Crypto & DeFi Tokens.
              The portfolio uses synthetic tokens based on
              <a href="https://umaproject.org/" target="_blank" rel="noopener noreferrer">UMA Project</a>
              to give exposure to the price action of different assets.
              <br />
              AWP++ tokens are always redeemable for the underlying tokens tracked by the index.
            </div>
          </Unless>

          <If condition={myAccount.awpTransactions && myAccount.awpTransactions.length > 0}>
            <h1 className="title investment lg:text-left">Your Investment</h1>
            <div className="your-balance text lg:text-center">
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
            Buy on Uniswap
          </button>
        </div>
      </div>
    </section>
  );
};

export default view(AWPDetail);
