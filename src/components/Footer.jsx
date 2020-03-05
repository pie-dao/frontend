/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import PropTypes from 'prop-types';

const Footer = ({ mixpanel }) => {
  return (
    <div className="footer-container">
      <div className="left">
        <span
          className="footer-link lg:block"
        >
            PieDAO 2020
        </span>
      </div>
      <div className="right lg:ml-8">
        <a
          className="footer-link lg:block"
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
          className="footer-link lg:ml-8"
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
          className="footer-link lg:ml-8"
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
          className="footer-link lg:ml-8"
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
          className="footer-link lg:ml-8"
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
          className="footer-link lg:ml-8"
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
        <img src="/assets/img/ethDark.svg" height="30" width="auto" className="h-50px mt-10px lg:h-30px lg:ml-20px lg:mt-0" alt="Ethereum" />
        <img src="/assets/img/aragon.svg" height="30" width="auto" className="h-50px mt-10px lg:h-50px lg:ml-20px lg:mt-0" alt="Argon" />
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
