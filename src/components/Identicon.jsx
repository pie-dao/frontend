/* eslint react/prop-types: 0 */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Jazzicon from 'jazzicon';

import { view } from 'react-easy-state';

import eth from '../stores/eth';

const Identicon = ({ diameter }) => {
  const ref = useRef();

  useEffect(() => {
    if (eth.account && ref.current) {
      ref.current.innerHTML = '';
      ref.current.appendChild(Jazzicon(diameter, parseInt(eth.account.slice(2, 10), diameter)));
    }
  }, [eth.account]);

  return <div className="identicon" ref={ref} />;
};

Identicon.defaultProps = {
  diameter: 16,
};

Identicon.propTypes = {
  diameter: PropTypes.number,
};

export default view(Identicon);
