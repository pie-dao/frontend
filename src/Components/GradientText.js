import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 80px 10% 50px 10%;
font-family: var(--secondary-font);

  @media (max-width: 768px) {
  }
`;



const Title = styled.div`
font-family: var(--primary-font);
color: var(--almost-black);
font-size: var(--text-ratherbig);
font-weight: 700;
text-align: center;
background: linear-gradient(to right, #F10096 0%, #21D7FF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
  }
`;








const GradientText = props => {
    return (
<Container>
<Title>3% more of the best performing portfolio in the world*. How about that?</Title>
  </Container>
    );
  };
  
  export default GradientText;