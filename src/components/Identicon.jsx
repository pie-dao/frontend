/* eslint react/prop-types: 0 */
import React, { useEffect, useRef } from 'react';
import Jazzicon from 'jazzicon';

import { view } from 'react-easy-state';

const Identicon = ({ wallet }) => {
  const ref = useRef();

  useEffect(() => {
    if (wallet && ref.current) {
      ref.current.innerHTML = '';
      ref.current.appendChild(Jazzicon(16, parseInt(wallet.address.slice(2, 10), 16)));
    }
  }, [wallet.address]);

  return <div className="identicon" ref={ref} />;
};

export default view(Identicon);
