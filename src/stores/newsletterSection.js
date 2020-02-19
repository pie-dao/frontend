/* eslint no-use-before-define:0 */
import { store } from 'react-easy-state';
import BigNumber from 'bignumber.js';

const fetchSubscriberCount = async () => {
  try {
    const response = await fetch(newsletterSection.url);
    const data = await response.json();
    const count = BigNumber(data.count);
    if (count.isGreaterThan(500)) {
      newsletterSection.subscribers = 500;
    } else {
      newsletterSection.subscribers = count.toNumber();
    }
  } catch (err) {
    console.error('Failure while trying to fetch subscribers');
    console.error(err);
  }
};

const newsletterSection = store({
  pid: undefined,
  subscribers: 0,

  init: (url) => {
    newsletterSection.url = url;
    newsletterSection.updateNow();
    newsletterSection.pid = setInterval(fetchSubscriberCount, 30000);
  },
  updateNow: (evt) => {
    if (evt && newsletterSection.subscribers > 499) {
      evt.preventDefault();
    }
    fetchSubscriberCount();
  },
});

export default newsletterSection;
