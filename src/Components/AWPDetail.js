import React from "react";
import styled from "styled-components";
import CompoundAPR from "./CompoundAPR";
import { link, cta } from "../mixpanel";
import { useWeb3React } from "../hooks";
import { useAddressBalance } from "../contexts/Balances";
import { isAddress, amountFormatter } from "../utils";
import { DAI_ADDRESS, AWP_ADDRESS } from "../constants";

const Contenitore = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 0 5%;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 1% 5%;
    padding: 0;
    width: 90%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  @media (max-width: 1000px) {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
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
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-normal);
  font-weight: 300;
  padding: 0 20%;
  line-height: 1.5rem;
  margin: 1% 0 3% 0;
  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
    padding: 0 0;
  }
`;


const AWPDetail = props => {
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
    <Contenitore>
      <Left>
        <CompoundAPR />
      </Left>

      <Right>
        <Title>You can do better than DeFi Lending</Title>
        <Text>
          We backtested the All Weather Portfolio and the AWP++ against DeFi
          Landing in the last 12 months. Don't take our word for it. Have a look
          at the chart on the left.
        </Text>
      </Right>
    </Contenitore>
  );
};

export default AWPDetail;
