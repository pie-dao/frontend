import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.img`

  @media (max-width: 768px) {
    max-width: 1240px;
  }
`;



const TemporaryFeatures = props => {
    return (
<LogoContainer src="../img/temporaryFeatures.png" className="App-logo" alt="logo" width="1240px" />
    );
  };
  
  export default TemporaryFeatures;