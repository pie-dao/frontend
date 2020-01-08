import React, { useState, useEffect } from 'react';
import { Modal } from 'minimal-react-modal';
import { useWalletModalOpen, useWalletModalToggle } from '../../contexts/Application';
import { SUPPORTED_WALLETS } from "../../constants";
import WalletOption from './WalletOption';
import IF from "../IF";
import {useWeb3React, usePrevious} from "../../hooks";
import PrimaryButton from '../PrimaryButton';

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
            <IF what={walletView === WALLET_VIEWS.PENDING}>
                PENDING VIEW

                {pendingError && 
                    <>
                        <div>ERROR CONNECTING</div>
                        {errorMessage}
                        <PrimaryButton onClick={() => {setWalletView(WALLET_VIEWS.OPTIONS)}}>GO BACK</PrimaryButton>
                    </>
                }
            </IF>
            <IF what={walletView === WALLET_VIEWS.ACCOUNT}>
                ACCOUNT VIEW
            </IF>
        </Modal>
    );
}

export default WalletModal;