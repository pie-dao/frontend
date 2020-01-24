/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import TextLoop from 'react-text-loop';
import PropTypes from 'prop-types';

const LoopName = ({ children }) => <h1 className="title">{children}</h1>;
LoopName.propTypes = { children: PropTypes.node.isRequired };

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container mx-auto">
        <div className="subtitle">
          What is you could invest like
        </div>

        <TextLoop interval={3500} adjustingSpeed={0} defaultStyle={0} mask fade={false} className="textloop">
          <LoopName>Ray Dalio</LoopName>
          <LoopName>Abigail Johnson</LoopName>
          <LoopName>Warren Buffet</LoopName>
          <LoopName>Lubna Olayan</LoopName>
          <LoopName>George Soros</LoopName>
          <LoopName>Peter Lynch</LoopName>
          <LoopName>Muriel Siebert</LoopName>
        </TextLoop>
      </div>
    </div>
  );
};

export default view(HeroSection);
