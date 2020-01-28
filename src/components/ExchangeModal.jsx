import React from 'react';

import { Modal } from 'minimal-react-modal';
import { view } from 'react-easy-state';
import { useWeb3React } from '@web3-react/core';

import amountFormatter from '../utils/amountFormatter';
import ConnectWeb3Button from './ConnectWeb3Button';
import exchangeModal from '../stores/exchangeModal';
import If from './If';
import myAccount from '../stores/myAccount';
import Unless from './Unless';

const ExchangeModal = () => {
  const { account } = useWeb3React();

  const sufficientAllowance = exchangeModal.sufficientAllowance();

  return (
    <Modal
      className="exchange-modal"
      isActive={exchangeModal.isActive}
      closeModal={exchangeModal.close}
      showAnimation={false}
      modalBoxStyle={{
        width: '90%',
        maxWidth: 600,
        padding: '5%',
        textAlign: 'center',
      }}
    >
      <div className="title">Buy AWP++</div>
      <div className="text">
        Diversified exposure across equity, commodities, t-bills (20y/3y), crypto & DeFi, plus,
        automatic rebalancing.
      </div>

      <div className="container">
        <div className={exchangeModal.inputError ? 'input-container error' : 'input-container'}>
          <div className="top">
            <div className="left">Input</div>
            <div className="right">
              Balance:&nbsp;
              {amountFormatter(myAccount.data.daiBalance)}
              &nbsp;DAI
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <input
                onChange={exchangeModal.inputChange}
                value={exchangeModal.inputValue}
                placeholder="0.0"
                type="number"
                id="invest"
              />
            </div>
            <div className="right">
              <button type="button" className="btn-uniswap">
                <span className="content">
                  <img src="/assets/img/dai.png" className="DAI-logo" alt="logo" />
                  <span>DAI</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="arrow">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE" />
          </svg>
        </div>
        <div className="input-container">
          <div className="top">
            <div className="left">Output</div>
            <div className="right" />
          </div>
          <div className="bottom">
            <div className="left">
              <input
                onChange={exchangeModal.outputChange}
                value={exchangeModal.outputValue}
                placeholder="0.0"
                type="number"
                id="invest"
              />
            </div>
            <div className="right">
              <button type="button" className="btn-uniswap">
                <span className="content">
                  <img src="/assets/img/portfolio_02.png" className="AWP-logo" alt="logo" />
                  <span>AWP++</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="exchange-rate-label">
          <div className="top">
            <div className="left">Exchange Rate</div>
            <div className="right">
              1 AWP ++ =&nbsp;
              {amountFormatter(exchangeModal.exchangeRate)
                || amountFormatter(exchangeModal.marketRate)
                || '-'}
              &nbsp;DAI
            </div>
          </div>
          <div className="top">
            <div className="left">Minimum Output Amount</div>
            <div>
              {exchangeModal.minAmount
                ? exchangeModal.minAmount.toFixed(4)
                : '-'}
              AWP++
            </div>
          </div>
        </div>
        <div className="slippage-label">
          <div className="top">
            <div className="left">Potential Slippage</div>
            <div className="right">
              {exchangeModal.slippage()}
              %
            </div>
          </div>
        </div>

        <Unless condition={account}>
          <ConnectWeb3Button />
        </Unless>

        <If condition={account}>
          <Unless condition={sufficientAllowance}>
            <button type="button" className="btn btn-primary" onClick={exchangeModal.approve}>
              Unlock DAI
            </button>
          </Unless>

          <If condition={sufficientAllowance}>
            <button
              type="button"
              className="btn btn-primary"
              disabled={exchangeModal.inputError}
              onClick={exchangeModal.buy}
            >
              Buy
            </button>
          </If>
        </If>
      </div>

      <a
        href="https://uniswap.exchange"
        target="_blank"
        className="uniswap-credit"
        rel="noopener noreferrer"
      >
        Powered by
        <span role="img" aria-label="Unicorn"> 🦄 </span>
        Uniswap
      </a>
    </Modal>
  );
};

export default view(ExchangeModal);
