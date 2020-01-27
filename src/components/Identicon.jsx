/* eslint react/prop-types: 0 */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Jazzicon from 'jazzicon';

import { view } from 'react-easy-state';
import { useWeb3React } from '@web3-react/core';

const Identicon = ({ diameter }) => {
  const { account } = useWeb3React();
  const ref = useRef();

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = '';
      ref.current.appendChild(Jazzicon(diameter, parseInt(account.slice(2, 10), diameter)));
    }
  }, [account]);

  return <div className="identicon" ref={ref} />;
};

Identicon.defaultProps = {
  diameter: 16,
};

Identicon.propTypes = {
  diameter: PropTypes.number,
};

export default view(Identicon);
