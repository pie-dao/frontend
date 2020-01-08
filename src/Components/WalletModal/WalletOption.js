import React, { useState } from "react";
import styled from "styled-components";

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
  font-size: var(--text-medium);
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const Provider = styled.div`
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-normal);
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  border: solid 1px #b7b7b7;
  padding: 20px;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const WalletImage = styled.img`
  height: 30px;
  margin: 0 10px 0 0;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const WalletOption = props => {
  const { name } = props.wallet;
  return (
    <Container>
      <div onClick={props.onClick}>
        <Title>Select a Web3 Provider</Title>
        <Provider>
          {" "}
          <WalletImage src="../../../img/metamask-logo.svg" alt="metamask icon" />
         <span> {name} </span>
        </Provider>
      </div>
    </Container>
  );
};

export default WalletOption;
