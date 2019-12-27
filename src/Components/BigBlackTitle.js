import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: var(--secondary-font);
background-color: var(--white);
padding: 10% 0;

  @media (max-width: 768px) {
    padding: 10% 0;
  }
`;



const Title = styled.div`
font-family: var(--primary-font);
color: var(--almost-black);
font-size: var(--text-ratherbig);
font-weight: 700;
text-align: center;


  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const WP = styled.div`
font-size: 6rem;
font-weight: 700;
text-align: center;
margin-top: 12px;


  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const A = styled.a`
color:  #F10096;
animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  @keyframes wave-animation {
    0% { transform: rotate(  0.0deg) }
   10% { transform: rotate(-10.0deg) }
   20% { transform: rotate( 12.0deg) }
   30% { transform: rotate(-10.0deg) }
   40% { transform: rotate(  9.0deg) }
   50% { transform: rotate(  0.0deg) }
  100% { transform: rotate(  0.0deg) }
}

`;







const BigBlackTitle = props => {
    return (
<Container>
  <section className="content center">
    <Title>We promise it's good stuff. Read the Whitepaper</Title>
    <A href="#"><WP>📄</WP></A>
  </section>
</Container>
    );
  };
  
  export default BigBlackTitle;