import React from "react";
import styled from "styled-components";
import Identicon from "./Identicon";
import { useWeb3React } from "../hooks";
import { isAddress } from "web3-utils";
import { useWalletModalToggle } from "../contexts/Application";

const Container = styled.button`
  display: flex;
  font-size: 0.9rem;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(-60deg, #cb1a8f, #fc02a7);
  color: var(--white);
  font-weight: 500;
  flex-flow: row nowrap;
  padding: 0.5rem;
  border-radius: 2rem;
  border: none;
  margin-left: 2rem;

  :hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
  }
`;

const P = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.83rem;
  flex: 1 1 auto;
  overflow: hidden;
  margin: 0px 0.5rem 0px 0.25rem;
  @media (max-width: 768px) {
  }
`;

const IconContainer = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: rgb(115, 115, 115);
  border-radius: 1.125rem;
  @media (max-width: 768px) {
  }
`;

const ImageContainer = styled.div`
  border-radius: 50px;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  width: 16px;
  height: 16px;
  display: inline-block;
  border: 0.5px solid white;
  @media (max-width: 768px) {
  }
`;

// const WalletImage = styled.img`
//   height: 15px;
//   margin: 0 10px 0 0;

//   @media (max-width: 768px) {
//     height: 15px;
//   }
// `;

function shortenAddress(address, digits = 4) {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${address.substring(0, digits + 2)}...${address.substring(
    42 - digits
  )}`;
}

const ConnectWeb3Button = props => {
  const { account } = useWeb3React();

  const toggleWalletModal = useWalletModalToggle();

  return (
    <Container onClick={toggleWalletModal}>
      {account ? (
        <>
          <P>{shortenAddress(account, 4)}</P>
          <IconContainer>
            <ImageContainer>
              {/* <WalletImage src="../../../img/error.jpg" alt="metamask icon" /> */}
              <Identicon diameter={100} />
            </ImageContainer>
          </IconContainer>
        </>
      ) : (
        "Connect Web3"
      )}
    </Container>
  );
};

export default ConnectWeb3Button;
