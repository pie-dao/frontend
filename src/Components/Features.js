import React from "react";
import styled from "styled-components";
import SmallText from "./SmallText";

const Container = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 10%;

  @media (max-width: 768px) {
  }
`;

const LR = styled.span`
  display: flex;
  width: 100%;
  flex-direction: row;

  @media (max-width: 768px) {
  }
`;

const RL = styled.span`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
  }
`;

const Box = styled.span`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
  }
`;

const Content = styled.span`
  display: flex;
  width: 80%;
  padding: 10%;
  max-height: 400;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #f6f6f6;

  @media (max-width: 768px) {
  }
`;

const Title = styled.span`
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;

  @media (max-width: 768px) {
  }
`;

const Text = styled.span`
  text-align: left;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-prettysmall);
  font-weight: 300;
  margin-top: 30px;

  @media (max-width: 768px) {
  }
`;

const CryptoPortfolio = styled.span`
  width: 100%;
  height: 400px;
  padding: 0;
  margin: 0;
  background-image: url("../img/cryptofolio.jpg");
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  background-position: left top;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
  }
`;

const AWPCrypto = styled.span`
  width: 100%;
  height: 400px;
  padding: 0;
  margin: 0;
  background-image: url("../img/awpcrypto.jpg");
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  background-position: right bottom;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
  }
`;

const Features = props => {
  return (
    <Container>
      <LR>
        <Box>
          <AWPCrypto />
        </Box>
        <Box>
          <Content>
            <Title>Crypto Exposure</Title>
            <Text>
              The crypto basket, allocated for a maximum of 10%, aims to give
              exposure to different assets in the blockchain industry between:
              <p></p>
              <ul>
                <li> Settlement Layer</li>
                <li> Privacy coins</li>
                <li> Gaming</li>
                <li> Decentralized Finance Protocols Coins</li>
              </ul>
              <SmallText SmallContent="*Portfolio Returns, up to December 2007, are simulated. They have been calculated using the historical series of equivalent ETFs / Assets, instead of the actual ETFs of the portfolio." />
            </Text>
          </Content>
        </Box>
      </LR>

      <RL>
        <Box>
          <CryptoPortfolio />
        </Box>
        <Box>
          <Content>
            <Title>Crypto Exposure</Title>
            <Text>
              The crypto basket, allocated for a maximum of 10%, aims to give
              exposure to different assets in the blockchain industry between:
              <p></p>
              <ul>
                <li> Settlement Layer</li>
                <li> Privacy coins</li>
                <li> Gaming</li>
                <li> Decentralized Finance Protocols Coins</li>
              </ul>
              <SmallText SmallContent="*Portfolio Returns, up to December 2007, are simulated. They have been calculated using the historical series of equivalent ETFs / Assets, instead of the actual ETFs of the portfolio." />
            </Text>
          </Content>
        </Box>
      </RL>
    </Container>
  );
};

export default Features;
