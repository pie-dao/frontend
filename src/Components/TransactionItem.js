import React from "react";
import styled from "styled-components";
import TransactIcon from "./TransactIcon";

const Container = styled.div`
  width: 90%;
  margin: 20px 0;
  padding: 20px 5%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
  font-family: var(--primary-font);
  font-size: var(--text-prettysmall);
  font-weight: 300;

  @media (max-width: 768px) {
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

const Yellow = styled.span`
background-color: #F8E71C;
padding: 3px 6px;
border-radius: 4px;
@media (max-width: 768px) {
    padding: 2px 3px;
  }
`;

const Green = styled.span`
background-color: #2db400;
padding: 3px 6px;
border-radius: 4px;
@media (max-width: 768px) {
    padding: 2px 3px;
  }
`;

const Red = styled.span`
background-color: #fc0253;
padding: 3px 6px;
border-radius: 4px;
@media (max-width: 768px) {
    padding: 2px 3px;
  }
`;





const ComparisonItem = props => {
  return (
    <Container>
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
            <TransactionUSDValue>{props.TransactionUSDValue} USD</TransactionUSDValue>
          </Row>
          <Row>
            <TransactionState><Yellow>{props.TransactionState}</Yellow></TransactionState>
            <TransactionETHValue>{props.TransactionETHValue} ETH</TransactionETHValue>
          </Row>
        </Right>
      </Bottom>
    </Container>
  );
};

export default ComparisonItem;

// <PortfolioName><LogoContainer src={props.PortfolioLogo} alt="portfolio logo" />{props.PortfolioName}</PortfolioName>
// <InitialAmount><LabelBlack>$</LabelBlack></InitialAmount>
// <OneYearGains><LabelYellow>{props.OneYearGains}</LabelYellow></OneYearGains>
// <APY><LabelGreen>{props.APY}</LabelGreen></APY>
