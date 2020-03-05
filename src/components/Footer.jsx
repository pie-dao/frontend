/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import PropTypes from 'prop-types';

const Footer = ({ mixpanel }) => {
  return (
    <div className="footer-container">
      <div className="left">
        <span
          className="footer-link hidden lg:block"
        >
            PieDAO 2020
        </span>
      </div>
      <div className="right">
        <a
          className="footer-link hidden lg:block"
          href="https://discord.gg/eJTYNUF"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            mixpanel.track({
              position: 'Footer',
              type: 'link',
              label: 'Discord',
            });
          }}
        >
            Discord
        </a>
        <a
          className="footer-link hidden lg:block"
          href="https://twitter.com/PieDAO_DeFi?s=20"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            mixpanel.track({
              position: 'Footer',
              type: 'link',
              label: 'Twitter',
            });
          }}
        >
            Twitter
        </a>
        <a
          className="footer-link hidden lg:block"
          href="https://medium.com/piedao"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            mixpanel.track({
              position: 'Footer',
              type: 'link',
              label: 'Medium',
            });
          }}
        >
            Medium
        </a>
        <a
          className="footer-link hidden lg:block"
          href="https://forum.piedao.org/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            mixpanel.track({
              position: 'Footer',
              type: 'link',
              label: 'Forum',
            });
          }}
        >
            Forum
        </a>
        <a
          className="footer-link hidden lg:block"
          href="https://docs.piedao.org/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            mixpanel.track({
              position: 'Footer',
              type: 'link',
              label: 'Documentation',
            });
          }}
        >
            Documentation
        </a>
        <a
          className="footer-link hidden lg:block"
          href="hhttps://github.com/pie-dao/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            mixpanel.track({
              position: 'Footer',
              type: 'link',
              label: 'Github',
            });
          }}
        >
            Gighub
        </a>
        <img src="/assets/img/ethDark.svg" height="30" width="auto" className="h-30px lg:h-30px lg:ml-20px" alt="Ethereum" />
        <img src="/assets/img/aragon.svg" height="30" width="auto" className="h-30px lg:h-50px lg:ml-20px" alt="Argon" />
      </div>
    </div>
  );
};

Footer.propTypes = {
  mixpanel: PropTypes.shape({
    track: PropTypes.func.isRequired,
  }).isRequired,
  links: PropTypes.shape({
    portfolio: PropTypes.func.isRequired,
  }).isRequired,
};

export default view(Footer);
