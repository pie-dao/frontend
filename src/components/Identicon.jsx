/* eslint react/prop-types: 0 */
import React, { useEffect, useRef } from 'react';
import Jazzicon from 'jazzicon';

import { view } from 'react-easy-state';
import { useWeb3React } from '@web3-react/core';

const Identicon = () => {
  const { account } = useWeb3React();
  const ref = useRef();

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = '';
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
    }
  }, [account]);

  return <div className="identicon" ref={ref} />;
};

export default view(Identicon);
