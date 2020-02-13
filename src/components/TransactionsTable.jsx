import React from 'react';

import { view } from 'react-easy-state';
import { useWeb3React } from '@web3-react/core';

import amountFormatter from '../utils/amountFormatter';
import ConnectWeb3Button from './ConnectWeb3Button';
import Identicon from './Identicon';
import If from './If';
import myAccount from '../stores/myAccount';
import { buildLink } from '../utils/etherscan';

const formatTimestamp = (timestamp) => (new Date(timestamp * 1000)).toUTCString();
const transactionName = ({ direction }) => (
  direction === 'buy' ? 'Bought AWP Token' : 'Sold AWP Token'
);
const transactionAWPValue = ({ direction, awpAmount }) => (
  `${direction === 'buy' ? '+' : '-'} ${amountFormatter(awpAmount)} AWP ++`
);
const transactionUSDValue = ({ direction, daiAmount }) => (
  `${direction === 'buy' ? '-' : '+'} ${amountFormatter(daiAmount)} DAI`
);

const TransactionsTable = () => {
  const transactions = (myAccount.awpTransactions || []).sort((a, b) => b.timestamp - a.timestamp);
  const { chainId } = useWeb3React();
  const count = transactions.length;

  if (count === 0) {
    return '';
  }

  return (
    <div className="transactions-table-container">
      <section className="content">
        <If condition={count > 0}>
          <div className="title">Transaction List</div>
          <div className="transactions lg:w-100pc">
            {transactions.map((transaction) => (
              <div className="transaction lg:w-100pc">
                <div className="top">{formatTimestamp(transaction.timestamp)}</div>
                <div className="bottom">
                  <div className="left">
                    <div className="icon-container">
                      <div className="image-container">
                        <Identicon diameter={70} />
                      </div>
                    </div>
                  </div>

                  <div className="right">
                    <div className="row">
                      <div className="name">{transactionName(transaction)}</div>
                      <div className="awp-value">{transactionAWPValue(transaction)}</div>
                    </div>

                    <div className="row">
                      <div className="state">
                        <span className="color-label">
                          { transaction.blockNumber === 'pending' ? 'Pending' : 'Confirmed' }
                        </span>
                        <span>
                          <a className="transaction-link" target="_blank" rel="noopener noreferrer" href={buildLink(chainId, transaction.transactionHash, 'transaction')}>
                            View transaction&nbsp;
                            <span role="img" aria-label="link">🔗</span>
                          </a>
                        </span>
                      </div>
                      <div className="usd-value">{transactionUSDValue(transaction)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </If>

        <If condition={count === 0}>
          To view transactions please connect your wallet.
          <ConnectWeb3Button />
        </If>
      </section>
    </div>
  );
};

export default view(TransactionsTable);
