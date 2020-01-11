import React from 'react';
import styled from 'styled-components';

const Gradient = styled.div`
color: var(--almost-black);
font-size: var(--text-prettysmall);
  @media (max-width: 768px) {
    padding: 0 10px;
    width: 100%;
    font-size: var(  --text-label-mobile);
  }
`;

const Container = styled.div`
display: flex;
padding: 15px;

  @media (max-width: 768px) {
  }
`;

const PortfolioName = styled.div`
display: flex;
width: 36%;
  @media (max-width: 768px) {
    width: 38%;
    max-width: 38%;
  }
`;

const InitialAmount = styled.div`
display: flex;
width: 27%;

  @media (max-width: 768px) {
  }
`;

const OneYearGains = styled.div`
display: flex;
width: 27%;

  @media (max-width: 768px) {
  }
`;

const APY = styled.div`
display: flex;
width: 12%;

  @media (max-width: 768px) {
    width: 10%;
  }
`;


const YourInvestmentLabel = props => {
    return (
      <Gradient>
      <Container>
      <PortfolioName>Your Investment</PortfolioName>
      <InitialAmount>Amount</InitialAmount>
      <OneYearGains>Earned so far</OneYearGains>
      <APY>APY</APY>
      </Container>
      </Gradient>
    );
  };
  
  export default YourInvestmentLabel;