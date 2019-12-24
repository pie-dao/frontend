import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
padding: 100px 0;
background: linear-gradient(to right, #FFE2FA 0%, #CCEFF3 100%);

  @media (max-width: 768px) {
    padding: 10% 0;
  }
`;

const Text = styled.div`
font-family: var(--primary-font);
color: var(--almost-black);
font-size: var(--text-big);
font-weight: 500;
text-align: left;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
    line-height: 2.6rem;
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
    font-size: var(--text-ratherbig-mobile);
  }
`;



const GradienBgSection = props => {
    return (
      <Container>
        <section class="content center">
        <Text>Top investment deals are impossible to get for the most of us.<p></p>

We are changing this by making the best wealth creation strategies accessible to everyone, with no minimum.

We use a combination of derivatives, synthetic assets and cryptocurrencies to mirror battle proof hedge funds.<p></p>
<A href="#">Lightpaper</A>
  </Text>
      </section>
      </Container>
    );
  };
  
  export default GradienBgSection;