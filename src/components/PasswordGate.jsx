/* eslint react/prop-types: 0 */
/* eslint no-alert: 0 */
import React from 'react';

import { view } from 'react-easy-state';
import { utils } from 'ethers';

let hashedPassword;
let password;
let passwordCorrect;

const solution = '0xfe9341a416aec42a2819008f03768af71d3a13521a29b654903cc31a8064bb67';

if (!localStorage.skipCheck) {
  password = prompt('Enter Password', '');
  hashedPassword = utils.keccak256(utils.formatBytes32String(password));
  passwordCorrect = hashedPassword === solution;
}

if (passwordCorrect) {
  localStorage.skipCheck = true;
}

const PasswordGate = ({ children }) => {
  if (passwordCorrect || localStorage.skipCheck) {
    return <>{children}</>;
  }

  return <>Password Incorrect. Reload and try again.</>;
};

export default view(PasswordGate);
