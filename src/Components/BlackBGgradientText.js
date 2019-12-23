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
    padding: 10% 5%;
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
    font-size: var(--text-ratherbig-mobile);
  }
`;








const BlackBGgradientText = props => {
    return (
<BlackContainer>
<Title>If you had invested $100 per month over the past 10 years, you would have $111,324.92 today.
 The next best time to invest is now.</Title>
  </BlackContainer>
    );
  };
  
  export default BlackBGgradientText;