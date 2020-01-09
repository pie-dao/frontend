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
import { isAddress, amountFormatter } from '../utils';
import { DAI_ADDRESS, AWP_ADDRESS} from "../constants";

const Contenitore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 0 5%;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 1% 5%;
    padding: 0;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 2% 80px 0;

  @media (max-width: 1000px) {
    padding: 0;
    margin: 0;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0 80px 2%;

  @media (max-width: 1000px) {
    padding: 0;
    margin: 10px 0 0 0;
    text-align: center;
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
  padding: 0;
  line-height: 1.5rem;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
    padding: 0 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
  }
`;

const TokenLabel = styled.div`
  display: flex;
  align-items: center;
  min-width: 120px;
  @media (max-width: 768px) {
  }
`;

const TokenImage = styled.img`
  height: 30px;
  margin: 0 10px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const BuyButtons = props => {
  return(
    <>
      <PrimaryButton>Unlock DAI</PrimaryButton>
    </>
  )
}

const AWPDetail = props => {
  const {account} = useWeb3React();

  const daiBalance = amountFormatter(useAddressBalance(account, isAddress(DAI_ADDRESS)));
  const awpBalance = amountFormatter(useAddressBalance(account, isAddress(AWP_ADDRESS)));
  const daiAllowance = amountFormatter(useAddressBalance(account, isAddress(DAI_ADDRESS)));
  const awpAllowance = amountFormatter(useAddressBalance(account, isAddress(AWP_ADDRESS)));
  const ethBalance = amountFormatter(useAddressBalance(account), "ETH");

  return (
    <Contenitore>
      <Left>
        <CompoundAPR />
      </Left>

      <Right>
        <Title>DeFi Lending is doomed</Title>
        <Text>
          The crypto basket, allocated for a maximum of 10%, aims to give
          exposure to different assets in the blockchain industry between:
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
              </button>{" "}
              <button
                onClick={() => {
                  cta({
                    position: "navbar",
                    to: "/",
                    type: "button",
                    label: "Buy Now"
                  });
                }}
              >
                BUY
              </button>
              <Modal
                className="mainModal"
                isActive={isActive} // required
                closeModal={closeModal} // required
                showAnimation={true}
                modalBoxStyle={{
                  width: "90%",
                  maxWidth: 600,
                  padding: "5%"
                }}
              >
                <Title>Buy PIE Tokens now</Title>
                <Text>
                  The crypto basket, allocated for a maximum of 10%, aims to
                  give exposure to different assets in the blockchain industry
                  between:
                </Text>
                <InputContainer>
                  <Input
                    inpPlaceholder="i.e. 1000"
                    inpType="number"
                    inpID="invest"
                  />
                  <TokenLabel>
                    <TokenImage src="../img/dai.png" alt="token icon" />
                    DAI
                  </TokenLabel>
                </InputContainer>
                <InputContainer>
                  <Input inpPlaceholder="0" inpType="number" inpID="invest" />
                  <TokenLabel>
                    <TokenImage
                      src="../img/portfolio_02.png"
                      alt="token icon"
                    />
                    pAWP
                  </TokenLabel>
                </InputContainer>
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
