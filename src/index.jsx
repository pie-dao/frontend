import Gun from 'gun/gun';
import mixpanel from 'mixpanel-browser';
import React from 'react';

import './styles.css';

import { render } from 'react-dom';

import App from './App';

const images = {
  logo: '/assets/logo.png',
};

const content = {
  name: 'Pie - Top investment for everyone',
  seo: {
    discord: {
      description: 'Redirecting to Pie Network Discord Channel',
      image: '/assets/img/preview.jpg',
      keywords: 'Community, Discord, ETF, Investment, Rebalancing, Robo advisor, ethereum,'
        + 'ethereum wallet, wallet, crypto wallet, decentralized app, dapps',
      title: 'Dexwallet Discord Channel',
    },
  },
  url: 'https://pie.network/',
};

const gun = Gun();

mixpanel.init('5a14e8a5c178e521e0d0d0a4e644f022', { debug: false });

const track = (event, obj) => mixpanel.track(event, obj);
const link = (obj) => track('Click Link', obj);

const links = {
  navbar: () => link({ position: 'navbar', to: '/', type: 'logo' }),
  portfolio: () => link({ position: 'navbar', to: 'portfolio', type: 'text' }),
  mintredeem: () => link({ position: 'navbar', to: 'mint-redeem', type: 'text' }),
  whitepaper: () => link({ position: 'navbar', to: 'whitepaper', type: 'text' }),
};

const network = 'kovan';
const networkId = 42;

const props = {
  content,
  gun,
  images,
  links,
  network,
  networkId,

  mixpanel: {
    link,
    track,

    click: (obj) => track('Click', obj),
    cta: (obj) => track('Click CTA', obj),
  },
};

render(<App {...props} />, document.getElementById('App'));
