import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CompoundAPR from "./Charts/CompoundAPR";
import YourBalance from "./YourBalance";
import YourInvestment from "./Charts/YourInvestment";
import { Modal } from "minimal-react-modal";
import Exchange from "./Exchange";
import TransactionsTable from "./TransactionsTable";
import TokenBalance from "./TokenBalance";
import { AWP_ADDRESS, AWP_EXCHANGE } from "../constants";
import { useWeb3React } from "../hooks";
import { useUniswapHistoricPosition } from "../contexts/UniswapActions";
const Contenitore = styled.div`
  @media (max-width: 1000px) {
  }
`;

const PreInvestment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  padding: 0 5%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 5%;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex-grow: 1;

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

const ModalTitle = styled.div`
  width: 100%;
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const ModalText = styled.div`
  width: center;
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

const UniswapCredit = styled.a`
  width: center;
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-prettysmall);
  font-weight: 300;

  @media (max-width: 768px) {
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
  const [modalOpen, setModalOpen] = useState(false);

  console.log('modalOpen', modalOpen)

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

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
            APY={`${(totalDeposited / totalValue * 100).toFixed(2)}%`}
            CurrentGains={totalValue}
            PortfolioLogo="../img/portfolio_02.png"
            PortfolioName="AWP++"
            PortfolioBalance={account ? <TokenBalance account={account} tokenAddress={AWP_ADDRESS}/> : localBalance}
          />
          {/* <button
            className="buttonModal"
            ButtonLabel="Buy Now"
            onClick={openModal}
          >
            Buy More
          </button> */}
        </Right>
      </PostInvestment>
      }
      <Modal
        className="mainModal"
        isActive={modalOpen} // required
        closeModal={closeModal} // required
        showAnimation={false}
        modalBoxStyle={{
          width: "90%",
          maxWidth: 600,
          padding: "5%",
          textAlign: "center"
        }}
      >
        <ModalTitle>Buy AWP++</ModalTitle>
        <ModalText>
          Diversified exposure across equity, commodities, t-bills (20y/3y), crypto & DeFi, plus, automatic rebalancing.
        </ModalText>
        <Exchange afterTrade={() => {
          console.log('closing...')
          setModalOpen(false) 
        }} />
        
        <UniswapCredit href="https://uniswap.exchange/" target="_blank">
          Powered by <span role="img" aria-label="Unicorn">🦄</span>Uniswap
        </UniswapCredit>
      </Modal>

      
      
    </Contenitore>
   
    </section>
    <GreyBox>
        <Title>Exchange Powered by <span role="img" aria-label="Unicorn">🦄</span>Uniswap</Title>
    </GreyBox>

    <section className="content">
      <Contenitore>
        <div style={{margin:'0 200px'}}>
          {/* <ModalTitle>AWP++</ModalTitle> */}
            <ModalText>
              <strong>AWP++</strong>  Diversified exposure across equity, commodities, t-bills (20y/3y), crypto & DeFi, plus, automatic rebalancing.
            </ModalText>
            <Exchange afterTrade={() => {
              console.log('closing...')
              setModalOpen(false) 
            }} />
            
            {/* <UniswapCredit href="https://uniswap.exchange/" target="_blank">
              Powered by <span role="img" aria-label="Unicorn">🦄</span>Uniswap
            </UniswapCredit> */}
          </div>
        </Contenitore>
        <YourInvestment hacky={true}/>
      </section>
      </>
  );
};

export default AWPDetail;
