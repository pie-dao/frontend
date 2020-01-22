import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CompoundAPR from "./Charts/CompoundAPR";
import YourBalance from "./YourBalance";
import YourInvestment from "./Charts/YourInvestment";
import TokenBalance from "./TokenBalance";
import { AWP_ADDRESS, AWP_EXCHANGE } from "../constants";
import { useWeb3React } from "../hooks";
import { useExchangeModalOpen, useExchangeModalToggle } from "../contexts/Application";

const Contenitore = styled.div`
  width: 100%;
  @media (max-width: 1000px) {
  }
`;

const PreInvestment = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const PostInvestment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  padding: 0 5%;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  align-items: center;
  margin: 20px 20px 0 0;
  width: 60%;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 5% 0 0 0;
  }
`;

const Right = styled.div`
  align-items: center;
  margin: 0;
  width: 40%;
  @media (max-width: 1000px) {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: left;
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
  font-size: var(--text-normal);
  font-weight: 300;
  padding: 0%;
  line-height: 1.5rem;
  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
    padding: 0 0;
  }
`;


const GreyBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  text-align: center;
  align-items: center;
  font-family: var(--secondary-font);
  background-color: #f6f6f6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
  }
`;

const TitleUni = styled.div`
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
  margin: 5% 0;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const AWPDetail = props => {


  const openModal = useExchangeModalToggle();

  const { account } = useWeb3React();

  const localHistoricData = JSON.parse(localStorage[account] || "[]");

  const totalValue = localHistoricData.length ? (localHistoricData[localHistoricData.length - 1].totalPositionValue) : "-"
  const totalDeposited = localHistoricData.length ? (localHistoricData[localHistoricData.length - 1].totalDeposited) : "-";
  const totalEarned = localHistoricData.length ? (localHistoricData[localHistoricData.length - 1].totalEarned) : "-";
  const localBalance = localHistoricData.length ? (localHistoricData[localHistoricData.length - 1].totalAmount) : "-";

  console.table({
    totalDeposited,
    totalValue,
    totalEarned,
    localBalance
  })

  let shouldRefresh = localHistoricData.length === 0 ? true : false;
  //let freshData =  Object.values(useUniswapHistoricPosition(account, AWP_ADDRESS, AWP_EXCHANGE));
  let historicPosition = localHistoricData;

  if(totalDeposited === '-') {
    //console.log('historicPosition', historicPosition)
    if(historicPosition && historicPosition.length) {
      console.log("setting storage")
      localStorage[account] = JSON.stringify(historicPosition)
    }
  }

  return (
    <>
    <section className="content">
    <Contenitore>
      { (!account || totalDeposited === '-') ?
      <PreInvestment>
        <Left>
          <CompoundAPR />
        </Left>

        <Right>
          <Title>You can do better than DeFi Lending</Title>
          <Text>
            We backtested the All Weather Portfolio and the AWP++ against DeFi
            Landing in the last 12 months. Don't take our word for it. Have a
            look at the chart on the left.
            <br></br>
            👇👇👇
          </Text>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* <button
            className="buttonModal"
            ButtonLabel="Buy Now"
            onClick={openModal}
          >
            Buy More
          </button> */}
        </Right>
      </PreInvestment>
      :
      <PostInvestment>
        <Left>
          <YourInvestment />
        </Left>

        <Right>
          <Title>Your Investment</Title>
          <YourBalance
            APY="28.67%"
            // APY={`${(totalDeposited / totalValue * 100).toFixed(2)}%`}
            CurrentGains={totalValue}
            PortfolioLogo="../img/portfolio_02.png"
            PortfolioName="AWP++"
            PortfolioBalance={account ? <TokenBalance account={account} tokenAddress={AWP_ADDRESS}/> : localBalance}
          />
          <button
            className="buttonModal"
            ButtonLabel="Buy Now"
            onClick={openModal}
          >
            Buy More
          </button>
        </Right>
      </PostInvestment>
      }



    </Contenitore>
  </section>
  </>
  );
};

export default AWPDetail;
