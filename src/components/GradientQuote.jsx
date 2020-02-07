/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';

const GradientQuote = () => {
  return (
    <div className="content">
      <div className="gradient-quote-container">
        <div className="quote lg:text-ratherbig">Diversification is the only free lunch in finance</div>
        <div className="author lg:text-big">Harry Markowitz Economist & Nobel Prize</div>
      </div>
    </div>
  );
};

export default view(GradientQuote);
