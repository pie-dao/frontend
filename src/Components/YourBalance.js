import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  font-family: var(--primary-font);
  font-size: var(--text-normal);
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: var(--text-table-mobile);
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 0;
  }
`;

const BalanceAmount = styled.div`
  font-weight: 500;
  @media (max-width: 768px) {
  }
`;

const Balance = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 768px) {
  }
`;

const Earned = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 768px) {
  }
`;

const APY = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;

  @media (max-width: 768px) {
  }
`;

const LabelGreen = styled.div`
  background-color: #2db400;
  color: var(--white);
  padding: 3px 6px;
  border-radius: 3px;

  @media (max-width: 768px) {
    padding: 2px 3px;
  }
`;

const LabelGradient = styled.div`
  background: linear-gradient(to right, #f10096 0%, #21d7ff 100%);
  color: var(--white);
  padding: 3px 6px;
  border-radius: 3px;
  margin-left: 5px;

  @media (max-width: 768px) {
    padding: 2px 3px;
  }
`;

const LabelBlack = styled.div`
  background-color: var(--almost-black);
  color: var(--white);
  padding: 3px 6px;
  border-radius: 3px;
  margin-right: 5px;

  @media (max-width: 768px) {
    padding: 2px 3px;
    margin-left: 3px;
  }
`;

const YourBalance = props => {
  return (
    <>
      <Container>
        <Row>
          <span>Balance</span>
          <Balance>
            <BalanceAmount>{props.PortfolioBalance}</BalanceAmount>
            <LabelGradient>{props.PortfolioName}</LabelGradient>
            </Balance>
        </Row>
        <Row>
          <span>Earned so far</span>{" "}
          <Earned>
            <LabelBlack>$</LabelBlack>
            {props.CurrentGains}
          </Earned>
        </Row>
        <Row>
          <span>APY</span>
          <APY>
            <LabelGreen>{props.APY}</LabelGreen>
          </APY>
        </Row>
      </Container>
    </>
  );
};

export default YourBalance;
