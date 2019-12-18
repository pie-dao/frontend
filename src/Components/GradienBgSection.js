import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
padding: 100px 10%;
background: linear-gradient(to right, #FFE2FA 0%, #CCEFF3 100%);

  @media (max-width: 768px) {
  }
`;

const Text = styled.div`
font-family: var(--primary-font);
color: var(--almost-black);
font-size: var(--text-big);
font-weight: 500;
text-align: left;

  @media (max-width: 768px) {
  }
`;

const A = styled.a`
font-family: var(--primary-font);
color: var(--almost-black);
font-size: var(--text-big);
:hover {
    opacity: 0.6;
    cursor: pointer;
  }


  @media (max-width: 768px) {
  }
`;



const GradienBgSection = props => {
    return (
      <Container>
        <Text>Best investment deals are impossible to get for the most of us.<p></p>

We are changing this by making the best wealth creation strategies accessible to everyone, with no minimum.

We use a combination of cryptocurrencies and synthetic assets to replicate the best in class hedge funds.<p></p>
<A href="#">Read the Litepaper</A>
  </Text>
      </Container>
    );
  };
  
  export default GradienBgSection;