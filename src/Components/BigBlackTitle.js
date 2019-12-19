import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: var(--secondary-font);
background-color: var(--white);
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


  @media (max-width: 768px) {
  }
`;

const WP = styled.div`
font-size: 6rem;
font-weight: 700;
text-align: center;
margin-top: 12px;


  @media (max-width: 768px) {
  }
`;

const A = styled.a`
color:  #F10096;

`;







const BigBlackTitle = props => {
    return (
<Container>
<Title>We promise it's good stuff.
Read the Whitepaper</Title>
<A href="#"><WP>📄</WP></A>
  </Container>
    );
  };
  
  export default BigBlackTitle;