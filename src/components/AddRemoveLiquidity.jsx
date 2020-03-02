/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import { view } from 'react-easy-state';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

import addRemoveLiquidity from '../stores/addRemoveLiquidity';
import AwpLight from './charts/AwpLight';
import SingleAsset from './SingleAsset';

const buttonClick = () => {
  const {
    slider,
    tab,
  } = addRemoveLiquidity;
  if (tab === 'remove') {
    addRemoveLiquidity.redeem(slider[tab]);
  } else {
    addRemoveLiquidity.mint(slider[tab]);
  }
};

const AddRemoveLiquidity = ({ mixpanel }) => {
  const {
    // selectAdd,
    selectRemove,
    slider,
    sliderMax,
    tab,
  } = addRemoveLiquidity;

  const max = sliderMax();

  return (
    <section className="content">
      <div className="liquidity-container lg:flex-row lg:w-94pc">
        <div className="liquidity-left lg:w-auto lg:m-0 lg:min-w-300px">
          <div className="tab-navi">
            <div
              className={tab === 'add' ? 'tab-item active' : 'tab-item'}
              onClick={() => {
                // selectAdd();
                mixpanel.cta({
                  position: 'Mint-Redeem',
                  type: 'tab navi',
                  label: 'Mint',
                });
              }}
            >
              Mint AWP++
            </div>
            <div
              className={tab === 'remove' ? 'tab-item active' : 'tab-item'}
              onClick={() => {
                selectRemove();
                mixpanel.cta({
                  position: 'Mint-Redeem',
                  type: 'tab navi',
                  label: 'Redeem',
                });
              }}
            >
              Redeem AWP++
            </div>
          </div>
          <div className="liquidity-amount lg:text-liquidity-amount">
            {slider[tab]}
          </div>
          <div className="awp-label lg:text-big lg:leading-none lg:m-0">AWP++</div>
          <div className="slider-wrapper">
            <Slider
              min={0}
              max={max}
              step={0.1}
              onChange={addRemoveLiquidity.sliderChange}
              value={slider[tab]}
              vertical={false}
            />
          </div>
          <button
            onClick={() => {
              buttonClick();
              mixpanel.cta({
                position: 'Mint-Redeem',
                type: 'tab navi',
                label: 'Redeem',
              });
            }}
            type="button"
            className="btn"
          >
            {tab === 'add' ? 'Add ' : 'Remove '}
            Liquidity
          </button>
        </div>
        <div className="liquidity-right lg:w-auto lg:ml-2pc lg:tex-left lg:flex-row lg:flex-grow">
          <div className="liquidity-column lg:items-start lg:text-left lg:pl-3pc lg:pr-1pc lg:max-w-300px">
            <h1 className="title lg:text-left lg:text-big py-2pc">Liquidity Breakdown</h1>
            <AwpLight />
            <div className="normal-text lg:m-0 lg:text-left py-2pc">
            We backtested the All Weather Portfolio and the AWP++ against DeFi
            Landing in the last 12 months. Don&apos;t take our word for it. Have a
            look at the chart on the left.
            </div>
          </div>
          <div className="liquidity-column lg:flex-grow lg:pl-2pc lg:pr-3pc">
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
    </section>
  );
};

AddRemoveLiquidity.propTypes = {
  mixpanel: PropTypes.shape({
    cta: PropTypes.func.isRequired,
  }).isRequired,
  links: PropTypes.shape({
    portfolio: PropTypes.func.isRequired,
  }).isRequired,
};

export default view(AddRemoveLiquidity);
