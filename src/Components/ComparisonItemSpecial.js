import React from "react";
import styled from "styled-components";

const Gradient = styled.div`
  padding: 1px;
  margin: -1px 0 0 0;
  background: linear-gradient(to right, #f10096 0%, #21d7ff 100%);
  font-size: var(--text-normal);

  @media (max-width: 768px) {
    width: 100%;
    font-size: var(--text-table-mobile);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  padding: 15px 5px 15px 15px;
  font-family: var(--primary-font);
  font-weight: 300;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const LogoContainer = styled.img`
  height: 34px;
  margin-right: 10px;
  @media (max-width: 768px) {
  }
`;

const PortfolioName = styled.div`
  display: flex;
  width: 36%;
  align-items: center;
  font-weight: 500;

  @media (max-width: 768px) {
    max-width: 38%;
  }
`;

const InitialAmount = styled.div`
  display: flex;
  width: 27%;
  align-items: center;
  font-weight: 500;

  @media (max-width: 768px) {
  }
`;

const OneYearGains = styled.div`
  display: flex;
  width: 27%;
  align-items: center;
  font-weight: 500;

  @media (max-width: 768px) {
  }
`;

const APY = styled.div`
  display: flex;
  width: 12%;
  align-items: center;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 10%;
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

const LabelYellow = styled.div`
  background-color: #f8e71c;
  color: var(--almost-black);
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

const ComparisonItemSpecial = props => {
  return (
    <Gradient>
      <Container>
        <PortfolioName>
          <LogoContainer src={props.PortfolioLogo} alt="portfolio logo" />
          {props.PortfolioName}
          <LabelGradient>PIE</LabelGradient>
        </PortfolioName>
        <InitialAmount>
          <LabelBlack>$</LabelBlack>
          {props.InitialAmount}
        </InitialAmount>
        <OneYearGains>
          <LabelYellow>{props.OneYearGains}</LabelYellow>
        </OneYearGains>
        <APY>
          <LabelGreen>{props.APY}</LabelGreen>
        </APY>
      </Container>
    </Gradient>
  );
};

export default ComparisonItemSpecial;
