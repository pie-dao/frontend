/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';

const GradientBgSection = () => {
  return (
    <div className="gradient-bg-section lg:py-100px">
      <div className="gradiebg-bg-text">
        Pie DAO makes diversified asset allocation and rebalancing a piece of
        cake
        <span role="img" aria-label="cake">
          &nbsp;🍰
        </span>
        <br />
        Universal access to anyone on the Ethereum network, with no minimum.
        <br />
        <br />
        <a className="underline" href="https://piedao.org/" target="blank">
          Request Whitepaper
        </a>
      </div>
    </div>
  );
};

export default view(GradientBgSection);
