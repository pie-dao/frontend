import React from "react";
import styled from "styled-components";
import TransactIcon from "./TransactIcon";
import { link, cta } from "../mixpanel";

const Container = styled.a`
<<<<<<< HEAD
  width: 90%;
  margin: 10px 0 0 0;
  padding: 2% 5%;
=======
  width: 94%;
  margin: 10px 0 0 0;
  padding: 20px 3%;
>>>>>>> 6ba4d95... props
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  font-family: var(--primary-font);
  font-size: var(--text-prettysmall);
  font-weight: 300;
  text-decoration: none;
  color: var(--almost-black);

  @media (max-width: 768px) {
    padding: 5% 5%;

  }
`;

const Top = styled.div`
  width: 100%;
  @media (max-width: 768px) {
  }
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 768px) {
  }
`;

const Left = styled.div`
  @media (max-width: 768px) {
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media (max-width: 768px) {
  }
`;

const IconContainer = styled.div`
  height: 70px;
  width: 70px;
  margin-right: 10px;
  background-color: rgb(115, 115, 115);
  border-radius: 36px;
  @media (max-width: 768px) {
  }
`;

const TransactionIcon = styled.div`
  border-radius: 37px;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  width: 70px;
  height: 70px;
  display: inline-block;
  border: 0.5px solid white;
  @media (max-width: 768px) {
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
  }
`;

const TransactionName = styled.div`
  font-size: var(--text-medium);
  font-weight: 500;
  @media (max-width: 768px) {
  }
`;
const TransactionUSDValue = styled.div`
  font-size: var(--text-medium);
  @media (max-width: 768px) {
  }
`;

const TransactionETHValue = styled.div`
  @media (max-width: 768px) {
  }
`;

const TransactionState = styled.div`
  color: var(--almost-black);
  margin-top: 10px;
  @media (max-width: 768px) {
    padding: 2px 3px;
  }
`;

const ColorLabel = styled.span`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  font-weight: 500;
  padding: 3px 6px;
  border-radius: 4px;
  @media (max-width: 768px) {
    padding: 2px 3px;
  }
`;

<<<<<<< HEAD
const TransactionItem = props => {
  return (
    <Container
    href={props.link}
    target="_blank"
    onClick={() =>
      link({ position: "transaction list", to: "etherscan", type: "list item" })
    }
    className="Transaction Item"
    >
=======
const ComparisonItem = props => {
  return (
    <Container href={props.link}>
>>>>>>> 6ba4d95... props
      <Top>{props.TransactionDate}</Top>
      <Bottom>
        <Left>
          <IconContainer>
            <TransactionIcon>
              <TransactIcon />
            </TransactionIcon>
          </IconContainer>
        </Left>
        <Right>
          <Row>
            <TransactionName>{props.TransactionName}</TransactionName>
            <TransactionUSDValue>
              {props.TransactionUSDValue} USD
            </TransactionUSDValue>
          </Row>
          <Row>
            <TransactionState>
              <ColorLabel bg={props.bg} color={props.color}>
                {props.TransactionState}
              </ColorLabel>
            </TransactionState>
            <TransactionETHValue>
              {props.TransactionETHValue} ETH
            </TransactionETHValue>
          </Row>
        </Right>
      </Bottom>
    </Container>
  );
};

<<<<<<< HEAD
export default TransactionItem;
=======
export default ComparisonItem;

>>>>>>> 6ba4d95... props
