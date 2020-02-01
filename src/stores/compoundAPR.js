/* eslint no-use-before-define: 0 */
import { store } from 'react-easy-state';

import gun from './gun';

const receiveDBData = (data) => {
  console.log('receiveDBData', data);
  if (data) {
    compoundAPR.store(JSON.parse(data), false);
  }
  compoundAPR.fetch();
};

const compoundAPR = store({
  data: undefined,
  error: undefined,
  endpoint: undefined,
  initialized: false,

  db: () => gun.get('compoundAPR'),
  fetch: async () => {
    try {
      const response = await fetch(compoundAPR.endpoint);
      await compoundAPR.store(await response.json());
    } catch (e) {
      compoundAPR.error = e;
    }
  },
  init: async (endpoint) => {
    if (compoundAPR.initialized) {
      console.warn('compoundAPR store already initialized');
      return;
    }

    compoundAPR.endpoint = endpoint;
    compoundAPR.db().get('data').once(receiveDBData);
    compoundAPR.initialized = true;
  },
  store: async (data, storeLocally = true) => {
    compoundAPR.data = data;
    if (storeLocally) {
      compoundAPR.db().put({ data: JSON.stringify(data) });
    }
  },
});

export default compoundAPR;
