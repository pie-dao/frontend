import React from 'react';
import styled from 'styled-components';


const BlackContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: var(--secondary-font);
background-color: var(--almost-black);
padding: 10%;

  @media (max-width: 768px) {
  }
`;



const Title = styled.div`
font-family: var(--primary-font);
color: var(--almost-black);
font-size: var(--text-ratherbig);
font-weight: 700;
text-align: center;
background: linear-gradient(to right, #FFE2FA 0%, #CCEFF3 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
  }
`;








const BlackBGgradientText = props => {
    return (
<BlackContainer>
<Title>If you invested $100 per month in the last 10 years, you would have $111,324.92 now.
 We don’t want you to make the same mistake again.</Title>
  </BlackContainer>
    );
  };
  
  export default BlackBGgradientText;