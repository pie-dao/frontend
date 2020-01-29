import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';

import addRemoveLiquidity from '../stores/addRemoveLiquidity';

const SingleAsset = ({ token }) => {
  const { amount, isAvailable, tab } = addRemoveLiquidity;
  const { symbol, weight } = addRemoveLiquidity[token];

  const amt = amount(token, tab);
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
        {weight}
        %
      </div>
    </div>
  );
};

SingleAsset.propTypes = {
  token: PropTypes.string.isRequired,
};

export default view(SingleAsset);
