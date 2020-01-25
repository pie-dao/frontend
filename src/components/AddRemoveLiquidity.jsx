import React from 'react';
import { view } from 'react-easy-state';
import Slider from 'rc-slider';
import AwpLight from './charts/AwpLight';

const AddRemoveLiquidity = () => (
  <div className="liquidity-container lg:flex-row">
    <div className="liquidity-left lg:w-auto lg:m-0">
      <div className="tab-navi">
        <div className="tab-item active">Add Liquidity</div>
        <div className="tab-item">Remove Liquidity</div>
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
        <div className="single-asset">
          <div className="asset-left">
            <div className="availability bg-avail">
              <img
                className="icon"
                src="../assets/img/available.svg"
                alt="icon"
              />
              <div className="liquidity-label">Avail</div>
            </div>
            <div className="asset-amount">72 TLT</div>
          </div>
          <div className="asset-weight bg-TLT">36%</div>
        </div>
        <div className="single-asset">
          <div className="asset-left">
            <div className="availability bg-insuf">
              <img
                className="icon"
                src="../assets/img/available.svg"
                alt="icon"
              />
              <div className="liquidity-label">Insuf</div>
            </div>
            <div className="asset-amount">72 VTI</div>
          </div>
          <div className="asset-weight bg-VTI">36%</div>
        </div>
        <div className="single-asset">
          <div className="asset-left">
            <div className="availability bg-avail">
              <img
                className="icon"
                src="../assets/img/available.svg"
                alt="icon"
              />
              <div className="liquidity-label">Avail</div>
            </div>
            <div className="asset-amount">72 IEI</div>
          </div>
          <div className="asset-weight bg-IEI">36%</div>
        </div>
        <div className="single-asset">
          <div className="asset-left">
            <div className="availability bg-insuf">
              <img
                className="icon"
                src="../assets/img/available.svg"
                alt="icon"
              />
              <div className="liquidity-label">Insuf</div>
            </div>
            <div className="asset-amount">72 CRY</div>
          </div>
          <div className="asset-weight bg-CRY">36%</div>
        </div>
        <div className="single-asset">
          <div className="asset-left">
            <div className="availability bg-avail">
              <img
                className="icon"
                src="../assets/img/available.svg"
                alt="icon"
              />
              <div className="liquidity-label">Avail</div>
            </div>
            <div className="asset-amount">72 VTI</div>
          </div>
          <div className="asset-weight bg-VTI">36%</div>
        </div>
        <div className="single-asset">
          <div className="asset-left">
            <div className="availability bg-avail">
              <img
                className="icon"
                src="../assets/img/available.svg"
                alt="icon"
              />
              <div className="liquidity-label">Avail</div>
            </div>
            <div className="asset-amount">72 GLD</div>
          </div>
          <div className="asset-weight bg-GLD">36%</div>
        </div>
        <div className="single-asset">
          <div className="asset-left">
            <div className="availability bg-avail">
              <img
                className="icon"
                src="../assets/img/available.svg"
                alt="icon"
              />
              <div className="liquidity-label">Avail</div>
            </div>
            <div className="asset-amount">72 GSG</div>
          </div>
          <div className="asset-weight bg-GSG">36%</div>
        </div>
      </div>
    </div>
  </div>
);

export default view(AddRemoveLiquidity);
