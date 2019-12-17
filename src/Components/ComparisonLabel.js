import React from 'react';
import styled from 'styled-components';

const Gradient = styled.span`
width: 90%;
color: var(--almost-black);
font-size: var(--text-prettysmall);
  @media (max-width: 768px) {
  }
`;

const Container = styled.span`
display: flex;
padding: 15px;

  @media (max-width: 768px) {
  }
`;

const PortfolioName = styled.span`
display: flex;
width: 36%;
  @media (max-width: 768px) {
  }
`;

const InitialAmount = styled.span`
display: flex;
width: 27%;

  @media (max-width: 768px) {
  }
`;

const OneYearGains = styled.span`
display: flex;
width: 27%;

  @media (max-width: 768px) {
  }
`;

const APY = styled.span`
display: flex;
width: 12%;

  @media (max-width: 768px) {
  }
`;


const ComparisonLabel = props => {
    return (
      <Gradient>
      <Container>
      <PortfolioName>Investment Stragety</PortfolioName>
      <InitialAmount>Initial Amount</InitialAmount>
      <OneYearGains>24 Months Returns</OneYearGains>
      <APY>APY</APY>
      </Container>
      </Gradient>
    );
  };
  
  export default ComparisonLabel;