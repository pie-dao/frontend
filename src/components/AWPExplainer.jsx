/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';

const AWPExplainer = () => {
  return (
    <div className="content">
      <div className="awp-explainer lg:flex-row lg:w-90pc lg:mx-5pc">
        <div className="awp-box">
          <img
            src="../assets/img/awpcrypto.jpg"
            alt="portfolio logo"
            className="awp-crypto lg:awpc-desktop"
            with="100%"
            height="auto"
          />
        </div>
        <div className="awp-box">
          <div className="awp-content lg:px-10px">
            <div className="title">AWP+++</div>
            <div className="text-normal font-regular">
              Inspired by the world renowned All Weather Portfolio by Ray Dalio,
              our analysts put together the AWP++ allowing a balanced exposure to
              Stocks, Bonds, Commodities and Cryptos, for everyone to enjoy the
              peace of mind of a mid-risk investment Portfolio with no minumum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default view(AWPExplainer);
