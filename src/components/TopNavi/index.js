import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

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
    font-size: var(--text-prettysmall-mobile);
    margin-left: 0;
  }
`;

const StyledLink = styled(Link)`
color: var(--almost-black);
text-decoration: none;
margin-left: 2rem;
font-size: var(--text-prettysmall);
:hover {
    opacity: 0.6;
  }
  @media (max-width: 768px) {
    font-size: var(--text-prettysmall-mobile);
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
  <Left>
    <Link to="/"><Logo/></Link>
  </Left>
  <Right>
    <A href="#">whitepaper</A>
    <MobileNone><StyledLink to="/charts">charts</StyledLink></MobileNone>
    <MobileNone><StyledLink to="/Investment">investment</StyledLink></MobileNone>
    <MobileNone><A href="#">discord</A></MobileNone>
    <MobileNone> <A href="#">contact</A></MobileNone>
  </Right>
  </Container>
    );
  };
  
  export default TopNavi;