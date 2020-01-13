import React from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const GreyBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 0 10% 0;
  font-family: var(--secondary-font);
  background-color: #f6f6f6;

  @media (max-width: 768px) {
  }
`;

const Title = styled.div`
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
<<<<<<< HEAD
  margin: 5% 0;
=======
  margin-bottom: 5%;
>>>>>>> 6ba4d95... props

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--secondary-font);

  @media (max-width: 768px) {
    padding: 0 0 10% 0;
  }
`;

const TransactionsTable = props => {
  return (
    <GreyBox>
      <Title>Transaction List</Title>
      <Container>
        <section className="content">
          <TransactionItem
            link="#"
            bg="#F8E71C"
            color="var(--almost-black)"
            TransactionDate="1/13/2020 at 13.45"
            TransactionName="Approve Token"
            TransactionUSDValue="0.034"
            TransactionState="Pending..."
            TransactionETHValue="0.00002"
          />

          <TransactionItem
            link="#"
            bg="#2db400"
            color="var(--white)"
            TransactionDate="1/13/2020 at 13.45"
            TransactionName="Approve Token"
            TransactionUSDValue="0.034"
            TransactionState="Approved"
            TransactionETHValue="0.00002"
          />

          <TransactionItem
            link="#"
            bg="#fc0253"
            color="var(--white)"
            TransactionDate="1/13/2020 at 13.45"
            TransactionName="Send Token"
            TransactionUSDValue="0.034"
            TransactionState="Failed"
            TransactionETHValue="0.00002"
          />

          <TransactionItem
            link="#"
            bg="#F8E71C"
            color="var(--almost-black)"
            TransactionDate="1/13/2020 at 13.45"
            TransactionName="Approve Token"
            TransactionUSDValue="0.034"
            TransactionState="Pending..."
            TransactionETHValue="0.00002"
          />

          <TransactionItem
            link="#"
            bg="#2db400"
            color="var(--white)"
            TransactionDate="1/13/2020 at 13.45"
            TransactionName="Approve Token"
            TransactionUSDValue="0.034"
            TransactionState="Approved"
            TransactionETHValue="0.00002"
          />

          <TransactionItem
            link="#"
            bg="#fc0253"
            color="var(--white)"
            TransactionDate="1/13/2020 at 13.45"
            TransactionName="Send Token"
            TransactionUSDValue="0.034"
            TransactionState="Failed"
            TransactionETHValue="0.00002"
          />
        </section>
      </Container>
    </GreyBox>
  );
};

export default TransactionsTable;
