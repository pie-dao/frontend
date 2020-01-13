import React from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 100px 0;
  border-bottom: 1px solid #cccccc;
  font-family: var(--secondary-font);

  @media (max-width: 768px) {
    padding: 0 0 10% 0;
  }
`;

const TransactionsTable = props => {
  return (
    <Container>
      <section className="content">

      <TransactionItem 
      TransactionDate="1/13/2020 at 13.45"
      TransactionName="Approve Token"
      TransactionUSDValue="0.034"
      TransactionState="Pending..."
      TransactionETHValue="0.00002"
      />

      </section>
    </Container>
  );
};

export default TransactionsTable;
