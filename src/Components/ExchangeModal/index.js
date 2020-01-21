import React from 'react';
import styled from "styled-components";
import { useExchangeModalOpen, useExchangeModalClose } from '../../contexts/Application';
import { Modal } from 'minimal-react-modal';
import Exchange from '../Exchange';

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

const ExchangeModal = (props) => {

    const open = useExchangeModalOpen();
    const closeModal = useExchangeModalClose();

    return (
       <> 
      <Modal
        className="mainModal"
        isActive={open} // required
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
        <Exchange afterTrade={closeModal} />
        
        <UniswapCredit href="https://uniswap.exchange/" target="_blank">
          Powered by <span role="img" aria-label="Unicorn">🦄</span>Uniswap
        </UniswapCredit>
      </Modal>
      </>
    )
}

export default ExchangeModal;