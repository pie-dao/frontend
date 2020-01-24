import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { view } from 'react-easy-state';

import ConnectWeb3Button from './ConnectWeb3Button';

const TopNavigation = ({ links, images }) => {
  const {
    navbar,
    portfolio,
    whitepaper,
    mintredeem,
  } = links;
  const { logo } = images;

  return (
    <div className="nav-container">
      <div className="left">
        <Link onClick={navbar} to="/">
          <img src={logo} className="h-30px lg:h-50px" alt="Logo" />
        </Link>
      </div>
      <div className="right">
        <Link to="/portfolio" className="link" onClick={portfolio}>
          portfolio
        </Link>
        <Link to="/mint-redeem" className="link" onClick={mintredeem}>
          mint/redeem
        </Link>
        <a
          onClick={whitepaper}
          className="link"
          href="https://pie283460.typeform.com/to/uy9NZt"
          target="_blank"
          rel="noopener noreferrer"
        >
          whitepaper
        </a>
        <div className=".hidden lg:block" />

        <ConnectWeb3Button />
      </div>
    </div>
  );
};

TopNavigation.propTypes = {
  links: PropTypes.shape({
    mintredeem: PropTypes.func.isRequired,
    navbar: PropTypes.func.isRequired,
    portfolio: PropTypes.func.isRequired,
    whitepaper: PropTypes.func.isRequired,
  }).isRequired,
  images: PropTypes.shape({
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default view(TopNavigation);
