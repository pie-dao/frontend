import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5% 10%;
font-family: var(--secondary-font);

@media (max-width: 768px) {
  margin: 10% 5%;
  
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
  font-size: var(--text-ratherbig-mobile);
}
`;








const GradientText = props => {
  return (
    <Container>
      <section class="content center">
        <Title>{props.GradientTextContent}</Title>
      </section>
    </Container>
    );
  };
  
  export default GradientText;