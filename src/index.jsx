import Gun from 'gun/gun';
import mixpanel from 'mixpanel-browser';
import React from 'react';

import './styles.css';

import { render } from 'react-dom';

import App from './App';
import compoundAPR from './stores/compoundAPR';

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

const gun = Gun();

compoundAPR.init(gun, 'https://pie-protocol-api.herokuapp.com/charts/comparison/2019-12');

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

const tokens = {
  awp: '0x70d1c8c8300a785ee4efe74db4d2972a7e669cf6',
  awpX: '0xF640d521793B5BF474fD4051543E9D238f108334',
  dai: '0x1d7e3a1a65a367db1d1d3f51a54ac01a2c4c92ff',
  daiX: '0x1a3e8f0A53E0524fC2DF6841408abe778C8Ecd9d',
};

const props = {
  content,
  gun,
  images,
  links,
  network,
  networkId,
  tokens,

  mixpanel: {
    link,
    track,

    click: (obj) => track('Click', obj),
    cta: (obj) => track('Click CTA', obj),
  },
};

render(<App {...props} />, document.getElementById('App'));
