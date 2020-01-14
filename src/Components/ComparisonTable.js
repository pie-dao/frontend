import React from "react";
import styled from "styled-components";
import ComparisonItem from "./ComparisonItem";
import ComparisonItemSpecial from "./ComparisonItemSpecial";
import ComparisonLabel from "./ComparisonLabel";
import ComparisonNegative from "./ComparisonNegative";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 100px 0;
  font-family: var(--secondary-font);

  @media (max-width: 768px) {
    padding: 0 0 10% 0;
  }
`;

const ComparisonTable = props => {
  return (
    <Container>
      <section className="content">
        <ComparisonLabel />
        <ComparisonItemSpecial
          PortfolioLogo="../img/portfolio_02.png"
          PortfolioName="AWP++"
          InitialAmount="10,000.00"
          OneYearGains="+ $ 2,770"
          APY="28.21%"
        />

        <ComparisonItem
          PortfolioLogo="../img/portfolio_02.jpg"
          PortfolioName="AWP"
          InitialAmount="10,000.00"
          OneYearGains="+ $ 1,822"
          APY="18.22%"
        />
        <ComparisonItem
          PortfolioLogo="../img/gold.png"
          PortfolioName="GOLD"
          InitialAmount="10,000.00"
          OneYearGains="+ $ 1,820"
          APY="17.59%"
        />
        <ComparisonItem
          PortfolioLogo="../img/compound.png"
          PortfolioName="Compound Finance, DAI"
          InitialAmount="10,000.00"
          OneYearGains="+ $ 660"
          APY="6.60%"
        />
        <ComparisonNegative
          PortfolioLogo="../img/ethereum.png"
          PortfolioName="ETH"
          InitialAmount="10,000.00"
          OneYearGains="- $ 498"
          APY="-4.98%"
        />
      </section>
    </Container>
  );
};

export default ComparisonTable;
