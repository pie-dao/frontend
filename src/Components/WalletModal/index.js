import React, { useState, useEffect } from 'react';
import { Modal } from 'minimal-react-modal';
import { useWalletModalOpen, useWalletModalToggle } from '../../contexts/Application';
import { SUPPORTED_WALLETS } from "../../constants";
import WalletOption from './WalletOption';
import IF from "../IF";
import {useWeb3React, usePrevious} from "../../hooks";
import PrimaryButton from '../PrimaryButton';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--secondary-font);
  background-color: var(--white);
  padding: 2% 0;

  @media (max-width: 768px) {
    padding: 2% 0;
  }
`;

const TextMessage = styled.div`
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-normal);
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const ErrorImage = styled.img`
  height: 200px;
  margin: 0 10px 0 0;

  @media (max-width: 768px) {
    height: 100px;
  }
`;

const WALLET_VIEWS = {
    OPTIONS: 'options',
    OPTIONS_SECONDARY: 'options_secondary',
    ACCOUNT: 'account',
    PENDING: 'pending'
}

const WalletModal = props => {

    const { active, account, activate, error, connector } = useWeb3React();
    const walletModalOpen = useWalletModalOpen();
    const toggleWalletModal = useWalletModalToggle();
    const [pendingWallet, setPendingWallet] = useState();
    const [pendingError, setPendingError] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [walletView, setWalletView] = useState(WALLET_VIEWS.OPTIONS);

    const tryActivation = async connector => {
        setPendingWallet(connector) // set wallet for pending view
        setWalletView(WALLET_VIEWS.PENDING)
        activate(connector, undefined, true).catch(e => {
            setPendingError(true);
            setErrorMessage(e.message);
        })
    }

    // close modal when a connection is successful
    const activePrevious = usePrevious(active)
    const connectorPrevious = usePrevious(connector)
    useEffect(() => {
        if (walletModalOpen && ((active && !activePrevious) || (connector && connector !== connectorPrevious && !error))) {
          setWalletView(WALLET_VIEWS.ACCOUNT);
          toggleWalletModal();
        }
    }, [setWalletView, active, error, connector, walletModalOpen, activePrevious, connectorPrevious])

    return (
        <Modal
            className="mainModal"
            isActive={walletModalOpen} // required
            closeModal={toggleWalletModal} // required
            showAnimation={true}
            modalBoxStyle={{
                width: "90%",
                maxWidth: 600,
                padding: "5%"
            }}
            >
            <IF what={walletView === WALLET_VIEWS.OPTIONS}>
                <WalletOption onClick={() => { tryActivation(SUPPORTED_WALLETS.METAMASK.connector) }} wallet={SUPPORTED_WALLETS.METAMASK} />
            </IF>
            <IF what={walletView == WALLET_VIEWS.PENDING}>
                

                {pendingError ? 
                    <>
                        <Container>
                        <ErrorImage src="../../../img/error.jpg" alt="error icon" />

                            <TextMessage>Error Connecting</TextMessage>
                            <TextMessage>{errorMessage}</TextMessage>
                        </Container>
                        
                        <PrimaryButton onClick={() => {setWalletView(WALLET_VIEWS.OPTIONS)}}>GO BACK</PrimaryButton>
                    </> :
                    <Container>Please Log-in to your wallet and Connect it to PIE</Container>
                }
            </IF>
            <IF what={walletView == WALLET_VIEWS.ACCOUNT}>
                <Container>Account View</Container>
            </IF>
        </Modal>
    );
}

export default WalletModal;