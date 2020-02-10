/* eslint arrow-body-style: 0 */
/* eslint react/jsx-boolean-value: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { view } from 'react-easy-state';
import TextLoop from 'react-text-loop';
import PropTypes from 'prop-types';

const LoopName = ({ children }) => (
  <h1 className="hero-title">{children}</h1>
);
LoopName.propTypes = { children: PropTypes.node.isRequired };

const HeroSection = ({ mixpanel, links }) => {
  const {
    portfolio,
  } = links;
  return (
    <div className="hero-section lg:pb-30px">
      <div className="content lg:w-90pc lg:mx-5pc lg:max-w-800px">
        <div className="pretitle lg:text-big">
          What if you could invest like
        </div>

        <TextLoop
          interval={3500}
          adjustingSpeed={0}
          defaultStyle={0}
          mask={true}
          fade={false}
          className="textloop"
        >
          <LoopName>
            Ray
            <br />
            Dalio
          </LoopName>
          <LoopName>
            Abigail
            <br />
            Johnson
          </LoopName>
          <LoopName>
            Warren
            <br />
            Buffet
          </LoopName>
          <LoopName>
            Lubna
            <br />
            Olayan
          </LoopName>
          <LoopName>
            George
            <br />
            Soros
          </LoopName>
          <LoopName>
            Peter
            <br />
            Lynch
          </LoopName>
          <LoopName>
            Muriel
            <br />
            Siebert
          </LoopName>
        </TextLoop>
        <div className="subtitle lg:text-normal lg:leading-normal">
          Every Hall-of-Fame investor is obsessed with the question of how best
          to diversify in order to maximize returns and minimize risks.
        </div>
        <Link
          to="/portfolio"
          onClick={portfolio}
        >
          <button
            type="button"
            className="btn"
            onClick={() => {
              mixpanel.cta({
                position: 'hero',
                type: 'button',
                label: 'Start Now',
              });
            }}
          >
            Start now
          </button>
        </Link>
        <div className="smalltext">Invitation only. 500 users cap.</div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  mixpanel: PropTypes.shape({
    cta: PropTypes.func.isRequired,
  }).isRequired,
  links: PropTypes.shape({
    portfolio: PropTypes.func.isRequired,
  }).isRequired,
};

export default view(HeroSection);
