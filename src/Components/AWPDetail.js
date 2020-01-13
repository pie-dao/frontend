import React, { useState } from "react";
import styled from "styled-components";
import CompoundAPR from "./Charts/CompoundAPR";
import YourBalance from "./YourBalance";
import YourInvestment from "./Charts/YourInvestment";
import { Modal } from "minimal-react-modal";
import Exchange from "./Exchange";
import TransactionsTable from "./TransactionsTable";

const Contenitore = styled.div`
  @media (max-width: 1000px) {
  }
`;

const PreInvestment = styled.div`
  display: none;
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

const Title = styled.div`
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

const AWPDetail = props => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  console.log("render");

  return (
    <Contenitore>
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
          </Text>
          <button
            className="buttonModal"
            ButtonLabel="Buy Now"
            onClick={openModal}
          >
            Buy More
          </button>
        </Right>
      </PreInvestment>

      <PostInvestment>
        <Left>
          <YourInvestment />
        </Left>

        <Right>
          <Title>Your Investment</Title>
          <YourBalance
            APY="27.31%"
            CurrentGains="371.20"
            PortfolioLogo="../img/portfolio_02.png"
            PortfolioName="AWP++"
            PortfolioBalance="1,234.00"
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
      <Modal
        className="mainModal"
        isActive={modalOpen} // required
        closeModal={closeModal} // required
        showAnimation={true}
        modalBoxStyle={{
          width: "90%",
          maxWidth: 600,
          padding: "5%",
          textAlign: "center"
        }}
      >
        <ModalTitle>Buy PIE Tokens now</ModalTitle>
        <ModalText>
          The crypto basket, allocated for a maximum of 10%, aims to give
          exposure to different assets in the blockchain industry between:
        </ModalText>
        <Exchange />
        
        <UniswapCredit href="https://uniswap.exchange/" target="_blank">
          Powered by <span role="img" aria-label="Unicorn">🦄</span>Uniswap
        </UniswapCredit>
      </Modal>
      <TransactionsTable />
    </Contenitore>
  );
};

export default AWPDetail;
