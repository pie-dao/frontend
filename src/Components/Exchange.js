import React from "react";
import styled from "styled-components";
import Input from "./Input";
import { link, cta } from "../mixpanel";
import { useWeb3React } from "../hooks";
import { useAddressBalance } from "../contexts/Balances";
import { isAddress, amountFormatter } from "../utils";
import { DAI_ADDRESS, AWP_ADDRESS } from "../constants";
import PrimaryButton from "./PrimaryButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  @media (max-width: 768px) {
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 5%;

  }
`;

const ExchangeRateLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
  border-radius: 4px;
  background-color: var(--almost-black);
  color: var(--white);
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 5%;
  }
`;

const SlippageLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px 0 15px;
  background-color: var(--white);
  color: var(--almost-black);
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 5%;
  }
`;

const Arrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 20px 0;

  @media (max-width: 768px) {
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: var(--text-prettysmall);
  font-weight: 300;
  @media (max-width: 768px) {
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
  }
`;

const Left = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width: 768px) {
  }
`;

const Right = styled.div`
  display: flex;
  @media (max-width: 768px) {
  }
`;

const SelectButton = styled.button`
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  color: var(--almost-black);
  height: 2rem;
  background-color: var(--white);
  cursor: pointer;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(51, 51, 51);
  border-image: initial;
  border-radius: 2.5rem;
  outline: none;
  padding: 0 10px;
  @media (max-width: 768px) {
  }
`;

const InsideButton = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  @media (max-width: 768px) {
  }
`;

const SVG = styled.svg`
  width: 1rem;
  height: 1rem;
  margin: 0 5px;
  @media (max-width: 768px) {
  }
`;

const IMG = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 0 5px 0 0;
  @media (max-width: 768px) {
  }
`;

const BuyButtons = props => {
  return (
    <>
      <PrimaryButton>Unlock DAI</PrimaryButton>
    </>
  );
};

const Exchange = props => {
  const { account } = useWeb3React();

  const daiBalance = amountFormatter(
    useAddressBalance(account, isAddress(DAI_ADDRESS))
  );
  const awpBalance = amountFormatter(
    useAddressBalance(account, isAddress(AWP_ADDRESS))
  );
  const daiAllowance = amountFormatter(
    useAddressBalance(account, isAddress(DAI_ADDRESS))
  );
  const awpAllowance = amountFormatter(
    useAddressBalance(account, isAddress(AWP_ADDRESS))
  );
  const ethBalance = amountFormatter(useAddressBalance(account), "ETH");

  return (
    <Container>
      {/* <Title>Buy AWP++ Token now</Title> */}
      <InputContainer>
        <Top>
          <Left>Input</Left>
          <Right>Balance: 12.594 DAI</Right>
        </Top>
        <Bottom>
          <Left>
            {" "}
            <Input inpPlaceholder="0.0" inpType="number" inpID="invest" />
          </Left>
          <Right>
            <SelectButton>
              <InsideButton>
              <IMG
                  src="../img/dai.png"
                  className="DAI-logo"
                  alt="logo"
                />
                <span>DAI</span>
                {/* <SVG
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  class="sc-iQKALj bleFDA"
                >
                  <path
                    d="M0.97168 1L6.20532 6L11.439 1"
                    stroke="#AEAEAE"
                  ></path>
                </SVG> */}
              </InsideButton>
            </SelectButton>
          </Right>
        </Bottom>
      </InputContainer>
      <Arrow>                <SVG
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  class="sc-iQKALj bleFDA"
                >
                  <path
                    d="M0.97168 1L6.20532 6L11.439 1"
                    stroke="#AEAEAE"
                  ></path>
                </SVG></Arrow>
      <InputContainer>
        <Top>
          <Left>Output</Left>
          <Right></Right>
        </Top>
        <Bottom>
          <Left>
            {" "}
            <Input inpPlaceholder="0.0" inpType="number" inpID="invest" />
          </Left>
          <Right>
            <SelectButton>
              <InsideButton>
                <IMG
                  src="../img/portfolio_02.png"
                  className="AWP-logo"
                  alt="logo"
                />
                <span>AWP ++</span>
              </InsideButton>
            </SelectButton>
          </Right>
        </Bottom>
      </InputContainer>
      <ExchangeRateLabel>
        <Top>
          <Left>Exchange Rate</Left>
          <Right>1 AWP ++ = 1 DAI</Right>
        </Top>
      </ExchangeRateLabel>
      <SlippageLabel>
        <Top>
          <Left>Potential Slippage</Left>
          <Right>0.29%</Right>
        </Top>
      </SlippageLabel>
    </Container>
  );
};

export default Exchange;
