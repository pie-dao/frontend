import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import CompoundAPR from "./CompoundAPR";
import { ModalContainer, Modal } from "minimal-react-modal";
import Input from "./Input";
import { link, cta } from "../mixpanel";
import ConnectWalletButton from "./ConnectWalletButton";
import IF from "./IF";
import { useWeb3React } from "../hooks";
import { useAddressBalance } from "../contexts/Balances";
import { isAddress, amountFormatter } from "../utils";
import { DAI_ADDRESS, AWP_ADDRESS } from "../constants";
import Exchange from "./Exchange";

const Contenitore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px 0;
  padding: 0 5%;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    margin: 1% 5%;
    padding: 0;
    width: 90%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
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

const BuyButtons = props => {
  return (
    <>
      <PrimaryButton>Unlock DAI</PrimaryButton>
    </>
  );
};

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
        <ModalContainer>
          {(openModal, closeModal, isActive) => (
            <div>
              <button
                className="buttonModal"
                ButtonLabel="Buy Now"
                onClick={openModal}
              >
                Buy Now
              </button>
              <Modal
                className="mainModal"
                isActive={isActive} // required
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
                  The crypto basket, allocated for a maximum of 10%, aims to
                  give exposure to different assets in the blockchain industry
                  between:
                </ModalText>
                <Exchange />
                <IF what={account === undefined} else={<BuyButtons />}>
                  <ConnectWalletButton />
                </IF>
              </Modal>
            </div>
          )}
        </ModalContainer>
      </Right>
    </Contenitore>
  );
};

export default AWPDetail;
