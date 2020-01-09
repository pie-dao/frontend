import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import SmallText from './SmallText';
import TextLoop from "react-text-loop";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 30px 0;
  font-family: var(--secondary-font);

  @media (max-width: 768px) {
    padding: 0 0 10px 0;
  }
`;

const PreTitle = styled.div`
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
  }
`;

const Title = styled.div`
  max-width: 100%;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-quiteverybig);
  font-size: 9vw;
  font-weight: 700;
  text-align: center;
  /* background: linear-gradient(to right, #F10096 0%, #21D7FF 100%); */
  background: linear-gradient(-60deg, #F10096, #21D7FF);
  background-size: 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 6rem;
  animation: flow 7s ease-in-out infinite;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-wrap: break-word;
  margin: 5% 0;
  display: flex;
  flex-direction: column;

  @keyframes flow {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  @media (max-width: 768px) {
    /* font-size: var(--text-quiteverybig-mobile);
    line-height: 7.5rem; */
    margin: 5% 0;
    font-size: 20vw;
    line-height: 4rem;
  }
`;

const SubTitle = styled.div`
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-medium);
  font-weight: 300;
  text-align: center;
  padding: 0 18%;
  line-height: 2rem;

  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
    padding: 0 0;
  }
`;

const Hero = props => {
    return (
      <Container>
        <section className="content center">
          <PreTitle>What if you could invest like</PreTitle>
          <TextLoop noWrap={false} interval={1400} adjustingSpeed={0} defaultStyle={0} mask={true} fade={false} className="textloop">
            <Title> <div>Ray</div> <div>Dalio</div></Title>
            <Title>Abigail Johnson</Title>
            <Title>Warren Buffet</Title>
            <Title>Lubna S. Olayan</Title>
            <Title>George Sorod</Title>
            <Title>Peter Lynch</Title>
            <Title>Muriel Siebert</Title>
          </TextLoop>
          <SubTitle>The richest people in the World have gained 10% every year for the past 10 years. We think it's fair for you to make some <strong>real money</strong> too.</SubTitle>
          <PrimaryButton>Get early access</PrimaryButton>
          <SmallText SmallContent="Reserved to the first 500 users only"/>
        </section>
      </Container>
    );
  };
  
  export default Hero;
