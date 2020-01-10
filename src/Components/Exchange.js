import React from "react";
import styled from "styled-components";
import Input from "./Input";
import { link, cta } from "../mixpanel";
import ConnectWalletButton from "./ConnectWalletButton";
import IF from "./IF";
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

const Title = styled.div`
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 590px;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  @media (max-width: 768px) {
  }
`;

const ExchangeRateLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 590px;
  padding: 5px 15px;
  border-radius: 4px;
  background-color: var(--almost-black);
  color: var(--white);
  @media (max-width: 768px) {
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
  margin: 0 5px;
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
                <SVG
                  width="256px"
                  height="417px"
                  viewBox="0 0 256 417"
                  preserveAspectRatio="xMidYMid"
                  class="sc-kPVwWT fKFejX"
                >
                  <g>
                    <polygon
                      fill="#343434"
                      points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
                    ></polygon>
                    <polygon
                      fill="#8C8C8C"
                      points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
                    ></polygon>
                    <polygon
                      fill="#3C3C3B"
                      points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
                    ></polygon>
                    <polygon
                      fill="#8C8C8C"
                      points="127.962 416.9052 127.962 312.1852 0 236.5852"
                    ></polygon>
                    <polygon
                      fill="#141414"
                      points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
                    ></polygon>
                    <polygon
                      fill="#393939"
                      points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
                    ></polygon>
                  </g>
                </SVG>
                <span>ETH</span>
                <SVG
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
                </SVG>
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
      <IF what={account === undefined} else={<BuyButtons />}>
        <ConnectWalletButton />
      </IF>
    </Container>
  );
};

export default Exchange;
