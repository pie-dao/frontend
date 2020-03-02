/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import PropTypes from 'prop-types';

const GradientBgSection = ({ mixpanel }) => {
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
        <a
          className="underline"
          href="https://docs.piedao.org/pie-dao/dough"
          target="blank"
          onClick={() => {
            mixpanel.cta({
              position: 'homepage',
              type: 'link',
              label: 'Join PieDAO',
            });
          }}
        >
          Join PieDAO
        </a>
      </div>
    </div>
  );
};

GradientBgSection.propTypes = {
  mixpanel: PropTypes.shape({
    cta: PropTypes.func.isRequired,
  }).isRequired,
  links: PropTypes.shape({
    portfolio: PropTypes.func.isRequired,
  }).isRequired,
};

export default view(GradientBgSection);
