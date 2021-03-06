/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';

const ComparisonTable = () => {
  return (
    <div className="content">
      <div className="table-container">
        <div className="labels-container lg:text-prettysmall">
          <div className="item-container lg:pt-15px lg:mb-0 lg:bl-15px">
            <div className="labels-portfolio-name font-regular lg:w-36pc">
              Strategy Name
            </div>
            <div className="labels-initial-amount font-regular">
              Initial Amount
            </div>
            <div className="labels-one-year-gains font-regular">2019 Returns</div>
            <div className="labels-apy lg:w-12pc">APY</div>
          </div>
        </div>
        <div className="gradient-container lg:text-normal">
          <div className="item-container lg:pt-15px lg:mb-0 lg:bl-15px">
            <div className="portfolio-name awp-bold lg:w-36pc">
              <img
                className="icon-container"
                src="../assets/img/portfolio_02.png"
                alt="portfolio logo"
              />
              AWP ++
              <div className="label-gradient">by PieDAO</div>
            </div>
            <div className="initial-amount">
              <div className="label-black lg:py-3px lg:px-6px">$</div>
              10,000
            </div>
            <div className="one-year-gains">
              <div className="label-yellow">+ $ 3,049</div>
            </div>
            <div className="apy lg:w-12pc">
              <div className="label-green">30.49%</div>
            </div>
          </div>
        </div>

        <div className="gradient-container lg:text-normal">
          <div className="item-container lg:pt-15px lg:mb-0 lg:bl-15px">
            <div className="portfolio-name lg:w-36pc">
              <img
                className="icon-container"
                src="../assets/img/awp-regular.png"
                alt="portfolio logo"
              />
              AWP
            </div>
            <div className="initial-amount">
              <div className="label-black lg:py-3px lg:px-6px">$</div>
              10,000
            </div>
            <div className="one-year-gains">
              <div className="label-yellow">+ $ 1,822</div>
            </div>
            <div className="apy lg:w-12pc">
              <div className="label-green">18.22%</div>
            </div>
          </div>
        </div>

        <div className="gradient-container lg:text-normal">
          <div className="item-container lg:pt-15px lg:mb-0 lg:bl-15px">
            <div className="portfolio-name lg:w-36pc">
              <img
                className="icon-container"
                src="../assets/img/gold.png"
                alt="portfolio logo"
              />
              GOLD
            </div>
            <div className="initial-amount">
              <div className="label-black lg:py-3px lg:px-6px">$</div>
              10,000
            </div>
            <div className="one-year-gains">
              <div className="label-yellow">+ $ 1,786</div>
            </div>
            <div className="apy lg:w-12pc">
              <div className="label-green">17.86%</div>
            </div>
          </div>
        </div>

        <div className="gradient-container lg:text-normal">
          <div className="item-container lg:pt-15px lg:mb-0 lg:bl-15px">
            <div className="portfolio-name lg:w-36pc">
              <img
                className="icon-container"
                src="../assets/img/compound.png"
                alt="portfolio logo"
              />
              Compund DAI
            </div>
            <div className="initial-amount">
              <div className="label-black lg:py-3px lg:px-6px">$</div>
              10,000
            </div>
            <div className="one-year-gains">
              <div className="label-yellow">+ $ 660,0</div>
            </div>
            <div className="apy lg:w-12pc">
              <div className="label-green">6.60%</div>
            </div>
          </div>
        </div>

        <div className="gradient-container lg:text-normal">
          <div className="item-container lg:pt-15px lg:mb-0 lg:bl-15px">
            <div className="portfolio-name lg:w-36pc">
              <img
                className="icon-container"
                src="../assets/img/ethereum.png"
                alt="portfolio logo"
              />
              ETH
            </div>
            <div className="initial-amount">
              <div className="label-black lg:py-3px lg:px-6px">$</div>
              10,000
            </div>
            <div className="one-year-gains">
              <div className="label-red">- $ 498</div>
            </div>
            <div className="apy lg:w-12pc">
              <div className="label-red">4.98%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default view(ComparisonTable);
