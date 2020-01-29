/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import { view } from 'react-easy-state';
import Slider from 'rc-slider';

import addRemoveLiquidity from '../stores/addRemoveLiquidity';
import AwpLight from './charts/AwpLight';
import SingleAsset from './SingleAsset';

const AddRemoveLiquidity = () => {
  const { selectAdd, selectRemove, tab } = addRemoveLiquidity;

  return (
    <div className="liquidity-container lg:flex-row">
      <div className="liquidity-left lg:w-auto lg:m-0">
        <div className="tab-navi">
          <div className={tab === 'add' ? 'tab-item active' : 'tab-item'} onClick={selectAdd}>
            Add Liquidity
          </div>
          <div
            className={tab === 'remove' ? 'tab-item active' : 'tab-item'}
            onClick={selectRemove}
          >
            Remove Liquidity
          </div>
        </div>
        <div className="liquidity-amount lg:text-liquidity-amount">21.50</div>
        <div className="awp-label lg:text-big lg:leading-none lg:m-0">AWP++</div>
        <div className="slider-wrapper">
          <Slider vertical={false} />
        </div>

        <button type="button" className="btn">
          Add Liquidity
        </button>
      </div>
      <div className="liquidity-right lg:w-64pc lg:tex-left lg:flex-row">
        <div className="liquidity-column lg:items-start lg:text-left ">
          <h1 className="title lg:text-left lg:text-big">Liquidity Breakdown</h1>
          <AwpLight />
          <div className="normal-text lg:m-0 lg:text-left">
            We backtested the All Weather Portfolio and the AWP++ against DeFi
            Landing in the last 12 months. Don&apos;t take our word for it. Have a
            look at the chart on the left.
          </div>
        </div>
        <div className="liquidity-column lg:flex-grow">
          <SingleAsset token="tlt" />
          <SingleAsset token="vti" />
          <SingleAsset token="iei" />
          <SingleAsset token="gld" />
          <SingleAsset token="gsg" />

          <SingleAsset token="btc" />
          <SingleAsset token="eth" />
          <SingleAsset token="link" />
          <SingleAsset token="zrk" />
          <SingleAsset token="snx" />
          <SingleAsset token="ren" />
          <SingleAsset token="lrc" />
          <SingleAsset token="knc" />
          <SingleAsset token="bnt" />
          <SingleAsset token="mln" />
        </div>
      </div>
    </div>
  );
};

export default view(AddRemoveLiquidity);
