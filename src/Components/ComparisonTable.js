import React from 'react';
import styled from 'styled-components';
import ComparisonItem from './ComparisonItem';
import ComparisonLabel from './ComparisonLabel';

const Container = styled.span`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 5%;
padding: 20px 0;
font-family: var(--secondary-font);

  @media (max-width: 768px) {
  }
`;



const ComparisonTable = props => {
    return (
      <Container>
        <ComparisonLabel/>
      <ComparisonItem PortfolioLogo="../img/portfolio_01.png" PortfolioName="Get early access" InitialAmount="Get early access" OneYearGains="+ $ 2,000.00" APY="10%" />
      </Container>
    );
  };
  
  export default ComparisonTable;