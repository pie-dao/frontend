/* eslint arrow-body-style: 0 */
/* eslint react/jsx-boolean-value: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import TextLoop from 'react-text-loop';
import PropTypes from 'prop-types';

const LoopName = ({ children }) => (
  <h1 className="hero-title lg:text-hero-desktop lg:leading-32">{children}</h1>
);
LoopName.propTypes = { children: PropTypes.node.isRequired };

const HeroSection = () => {
  return (
    <div className="hero-section lg:pb-30px">
      <div className="content lg:w-90pc mx-5pc">
        <div className="pretitle lg:text-big">
          What is you could invest like
        </div>

        <TextLoop
          interval={3500}
          adjustingSpeed={0}
          defaultStyle={0}
          mask={true}
          fade={false}
          className="textloop lg:h-270px lg:w-500px"
        >
          <LoopName>Ray Dalio</LoopName>
          <LoopName>Abigail Johnson</LoopName>
          <LoopName>Warren Buffet</LoopName>
          <LoopName>Lubna Olayan</LoopName>
          <LoopName>George Soros</LoopName>
          <LoopName>Peter Lynch</LoopName>
          <LoopName>Muriel Siebert</LoopName>
        </TextLoop>
        <div className="subtitle lg:text-normal lg:leading-normal">
          Every Hall-of-Fame investor is obsessed with the question of how best
          to diversify in order to maximize returns and minimize risks.
        </div>
        <button type="button" className="btn">
          Get early access
        </button>
        <div className="smalltext">Invitation only. 500 users cap.</div>
      </div>
    </div>
  );
};

export default view(HeroSection);
