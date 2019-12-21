import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Container = styled.div`
display: flex;
padding: 20px 0;
margin: 0 5%;
font-family: var(--secondary-font);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Left = styled.div`
display: flex;
align-items: center;
flex-grow: 1;

  @media (max-width: 768px) {
  }
`;

const Right = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-grow: 1;

  @media (max-width: 768px) {
  }
`;

const A = styled.a`
color: var(--almost-black);
text-decoration: none;
margin-left: 2rem;
font-size: var(--text-prettysmall);
:hover {
    opacity: 0.6;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const MobileNone = styled.div`
display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;



const TopNavi = props => {
    return (
<Container>
  <Left><Logo/></Left>
  <Right>
    <A href="#">whitepaper</A>
    <MobileNone><A href="#">discord</A></MobileNone>
    <MobileNone> <A href="#">contact</A></MobileNone>
  </Right>
  </Container>
    );
  };
  
  export default TopNavi;