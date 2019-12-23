import React from 'react';
import styled from 'styled-components';
import logo from '../../../logo.png';

const LogoContainer = styled.img`
    height: 50px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;



const Logo = props => {
    return (
<LogoContainer src={logo} className="App-logo" alt="logo" />
    );
  };
  
  export default Logo;