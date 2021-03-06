import BigNumber from 'bignumber.js';
import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';

import addRemoveLiquidity from '../stores/addRemoveLiquidity';

const round = (weight) => BigNumber(weight).decimalPlaces(2).toFixed();

const SingleAsset = ({ token }) => {
  const { amount, isAvailable, tab } = addRemoveLiquidity;
  const { symbol, weight } = addRemoveLiquidity[token];

  const amt = BigNumber(amount(token, tab)).toFixed();
  const available = isAvailable(token, tab);

  return (
    <div className="single-asset">
      <div className="asset-left">
        <div className={available ? 'availability bg-avail' : 'availability bg-insuf'}>
          <img className="icon" src="/assets/img/available.svg" alt="icon" />
          <div className="liquidity-label">
            {available ? 'Avail' : 'Insuf'}
          </div>
        </div>
        <div className="asset-amount">
          {amt}
          &nbsp;
          {symbol}
        </div>
      </div>
      <div className={`asset-weight bg-${symbol}`}>
        {round(weight)}
        %
      </div>
    </div>
  );
};

SingleAsset.propTypes = {
  token: PropTypes.string.isRequired,
};

export default view(SingleAsset);
