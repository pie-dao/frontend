import React from 'react';
import PrimaryButton from './PrimaryButton';
import { useWalletModalToggle } from '../contexts/Application';


const ConnectWalletButton = props => {
    const toggleWalletModal = useWalletModalToggle();

    return (
        <PrimaryButton onClick={toggleWalletModal} >
            Connect Metamask
        </PrimaryButton>
    )
}

export default ConnectWalletButton;