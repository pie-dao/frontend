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
font-size: 1.8rem;
font-weight: 500;
text-align: left;

strong {
  font-size: var(--text-big);
}
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
        <section className="content center">
        <Text>
          <strong>Top investment deals are impossible to get for the most of us.</strong>
          <br></br><br></br>

          For example, Ray Dalio used to accept money from investors who had a net worth of at least <strong>$5 billion</strong> and with a minimum investment requirement of <strong>$100 million</strong>. 
          <br></br>Nowadays he won’t accept any new investors.
          <br></br><br></br>
          We are making the best asset allocation strategies accessible to everyone on the Ethereum network with no minimum.
          <br></br><br></br>
          <a href="" target="blank">Request Whitepaper</a>
        </Text>
      </section>
      </Container>
    );
  };
  
  export default GradienBgSection;