import React from "react";
import styled from "styled-components";
import ComparisonItem from "./ComparisonItem";
import ComparisonItemSpecial from "./ComparisonItemSpecial";
import ComparisonLabel from "./ComparisonLabel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5%;
  padding: 0 0 100px 0;
  font-family: var(--secondary-font);

  @media (max-width: 768px) {
  }
`;

const ComparisonTable = props => {
  return (
    <Container>
      <ComparisonLabel />
      <ComparisonItemSpecial
        PortfolioLogo="../img/portfolio_02.png"
        PortfolioName="All Weather++"
        InitialAmount="10,000.00"
        OneYearGains="+ $ 2,000.00"
        APY="10.0%"
      />
      <ComparisonItem
        PortfolioLogo="../img/portfolio_02.jpg"
        PortfolioName="AWP by Ray Dalio"
        InitialAmount="10,000.00"
        OneYearGains="+ $ 1,390.00"
        APY="6.8%"
      />
      <ComparisonItem
        PortfolioLogo="../img/portfolio_03.png"
        PortfolioName="IDLE Finance"
        InitialAmount="10,000.00"
        OneYearGains="+ $ 1,030.00"
        APY="5.5%"
      />
      <ComparisonItem
        PortfolioLogo="../img/portfolio_04.png"
        PortfolioName="TokenSets"
        InitialAmount="10,000.00"
        OneYearGains="+ $ 500.00"
        APY="4.7%"
      />
      <ComparisonItem
        PortfolioLogo="../img/portfolio_05.png"
        PortfolioName="DyDx Lending"
        InitialAmount="10,000.00"
        OneYearGains="+ $ 300.00"
        APY="3.8%"
      />
    </Container>
  );
};

export default ComparisonTable;
