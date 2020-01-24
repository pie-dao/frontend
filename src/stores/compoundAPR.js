/* eslint no-use-before-define: 0 */
import { store } from 'react-easy-state';

let db;

const receiveDBData = (data) => {
  if (data) {
    compoundAPR.store(data, false);
  }
  compoundAPR.fetch();
};

const compoundAPR = store({
  data: undefined,
  error: undefined,
  endpoint: undefined,
  initialized: false,

  db: () => db.get('compoundAPR'),
  fetch: async () => {
    try {
      const response = await fetch(compoundAPR.endpoint);
      await compoundAPR.store(await response.json());
    } catch (e) {
      compoundAPR.error = e;
    }
  },
  init: async (gun, endpoint) => {
    if (compoundAPR.initialized) {
      console.warn('compoundAPR store already initialized');
      return;
    }

    db = gun;
    compoundAPR.endpoint = endpoint;
    compoundAPR.db().once(receiveDBData);
    compoundAPR.initialized = true;
  },
  store: async (data, storeLocally = true) => {
    compoundAPR.data = data;
    if (storeLocally) {
      compoundAPR.db().put(data);
    }
  },
});

export default compoundAPR;
