import React from "react";
import styled from "styled-components";
import SmallText from "./SmallText";

const Contenitore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media (max-width: 768px) {
    margin: 5% 0;
    padding: 0;
  }
`;

const LR = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;


  @media (max-width: 768px) {
    flex-direction: column;

  }
`;

const RL = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;


  @media (max-width: 768px) {
    flex-direction: column;

  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  width: 80%;
  padding: 12% 10%;
  max-height: 400;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  /* background-color: #f6f6f6; */

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10%;
  }
`;

const Title = styled.div`
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const Text = styled.div`
  text-align: left;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-prettysmall);
  font-weight: 300;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
  }
`;

const CryptoPortfolio = styled.div`
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

  @media (max-width: 900px) {
    background-image: url("../img/cryptofolio-mobile.jpg");
    width: 100%;
    height: 400px;
    background-position: center;

  }

  @media (max-width: 768px) {
    background-image: url("../img/cryptofolio-mobile.jpg");
    width: 100%;
    height: 70vw;
    background-position: center;

  }
`;

const AWPCrypto = styled.div`
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
    background-image: url("../img/awpcrypto-mobile.jpg");
    width: 100%;
    height: 70vw;
    background-position: center;
  }
`;

const Features = props => {
  return (
    <Contenitore>
      <section className="content">
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

      {/* <RL>
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
      </RL> */}
      </section>
    </Contenitore>
  );
};

export default Features;
