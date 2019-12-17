import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const LogoContainer = styled.img`

  @media (max-width: 768px) {
  }
`;



const Logo = props => {
    return (
<LogoContainer src={logo} className="App-logo" alt="logo" />
    );
  };
  
  export default Logo;