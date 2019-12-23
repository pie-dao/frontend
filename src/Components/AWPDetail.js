import React from "react";
import styled from "styled-components";

const Contenitore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0;

  @media (max-width: 768px) {
    margin: 5% 0 0 0;
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
font-size: var(--text-medium);
font-weight: 300;
padding: 0;
line-height: 2rem;

  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
    padding: 0 0;  }
`;


const AWPDetail = props => {
  return (
    <Contenitore>
      <LR>
        <Box>
          <Content>
            <Title>Crypto Exposure</Title>
            <Text>
              The crypto basket, allocated for a maximum of 10%, aims to give
              exposure to different assets in the blockchain industry between:
            </Text>
          </Content>{" "}
        </Box>
        <Box>
          <Content>
            <Title>AWP++ allocation</Title>
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
            </Text>
          </Content>
        </Box>
      </LR>

      <RL>
        <Box>
        <Content>
            <Title>APY Comparison Chart</Title>
            <Text>
              The crypto basket, allocated for a maximum of 10%, aims to give
              exposure to different assets in the blockchain industry between:
            </Text>
          </Content>        </Box>
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
            </Text>
          </Content>
        </Box>
      </RL>
    </Contenitore>
  );
};

export default AWPDetail;
