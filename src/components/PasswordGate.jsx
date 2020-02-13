/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint react/prop-types: 0 */
/* eslint no-alert: 0 */
import React, { useEffect, useState } from 'react';

import { view } from 'react-easy-state';
import { utils } from 'ethers';

const PasswordGate = ({ children }) => {
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [passwordPending, setPasswordPending] = useState(true);
  let hashedPassword;
  let password;

  useEffect(() => {
    const solution = '0xfe9341a416aec42a2819008f03768af71d3a13521a29b654903cc31a8064bb67';

    if (!localStorage.skipCheck) {
      password = prompt('To access this functionality you need to enter the password', '');
      if (password === null) {
        document.location.href = '/';
      }
      hashedPassword = utils.keccak256(utils.formatBytes32String(password));

      setPasswordPending(false);

      if (hashedPassword === solution) {
        setPasswordCorrect(true);
        localStorage.skipCheck = true;
      }
    }
  }, []); // this effect behaves like a componentDidMount hook.

  if (passwordCorrect || localStorage.skipCheck) {
    return <>{children}</>;
  }

  if (passwordPending) {
    return <></>;
  }

  return (
    <>
      Password Incorrect.
      <a href=""> Reload </a>
      to try again.
    </>
  );
};

export default view(PasswordGate);
