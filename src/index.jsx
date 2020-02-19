import mixpanel from 'mixpanel-browser';
import React from 'react';

import './styles.css';

import { render } from 'react-dom';

import App from './App';
import compoundAPR from './stores/compoundAPR';
import eth from './stores/eth';

const images = {
  logo: '/assets/logo.png',
};

const content = {
  name: 'Pie - Top investment for everyone',
  seo: {
    description: 'The richest people in the World have gained 10% every year for the past 10 '
      + 'years. We think it is fair for you to make some real money too.',
    discord: {
      description: 'Redirecting to Pie Network Discord Channel',
      keywords: 'Community, Discord, ETF, Investment, Rebalancing, Robo advisor, ethereum,'
        + 'ethereum wallet, wallet, crypto wallet, decentralized app, dapps',
      title: 'Dexwallet Discord Channel',
    },
    image: '/assets/img/preview.jpg',
    keywords: 'ETF, Investment, Rebalancing, Robo advisor, ethereum, ethereum wallet, wallet, '
      + 'crypto wallet, decentralized app, dapps',
  },
  url: 'https://pie.network/',
};

compoundAPR.init('https://pie-protocol-api.herokuapp.com/charts/comparison/2019-12');
eth.init();

mixpanel.init('5a14e8a5c178e521e0d0d0a4e644f022', { debug: false });

const track = (event, obj) => mixpanel.track(event, obj);
const link = (obj) => track('Click Link', obj);

const links = {
  navbar: () => link({ position: 'navbar', to: '/', type: 'logo' }),
  portfolio: () => link({ position: 'navbar', to: 'portfolio', type: 'text' }),
  mintredeem: () => link({ position: 'navbar', to: 'mint-redeem', type: 'text' }),
  whitepaper: () => link({ position: 'navbar', to: 'whitepaper', type: 'text' }),
};

const props = {
  content,
  images,
  links,

  mixpanel: {
    link,
    track,

    click: (obj) => track('Click', obj),
    cta: (obj) => track('Click CTA', obj),
  },
};

render(<App {...props} />, document.getElementById('App'));
