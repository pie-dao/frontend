import Gun from 'gun/gun';
import mixpanel from 'mixpanel-browser';
import Onboard from 'bnc-onboard';
import React from 'react';

import { ethers } from 'ethers';

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
  whitepaper: () => link({ position: 'navbar', to: 'whitepaper', type: 'text' }),
};

const network = 'kovan';

const props = {
  content,
  gun,
  images,
  links,
  network,

  mixpanel: {
    link,
    track,

    click: (obj) => track('Click', obj),
    cta: (obj) => track('Click CTA', obj),
  },
};

props.onboard = Onboard({
  dappId: '523b279d-0fe0-42e8-8977-e688c3686e57',
  networkId: 42,
  subscriptions: {
    wallet: (wallet) => {
      props.wallet = wallet;
      props.provider = new ethers.providers.Web3Provider(wallet.provider);
    },
  },
  walletCheck: [
    { checkName: 'connect' },
    { checkName: 'network' },
  ],
});

render(<App {...props} />, document.getElementById('App'));
