import React from "react";
import AWPDetail from "../Components/AWPDetail";
import ComparisonItemSpecial from "../Components/ComparisonItemSpecial";
import YourInvestmentLabel from "../Components/YourInvestmentLabel";

function InvestmentDetail() {
  return (
    <div className="App">
      <AWPDetail />
      <section className="contentMiddle">
        {/* <YourInvestmentLabel />
        <ComparisonItemSpecial
          PortfolioLogo="../img/portfolio_02.png"
          PortfolioName="AWP++"
          InitialAmount="10,000.00"
          OneYearGains="+ $ 2,770"
          APY="27.70%"
        /> */}
      </section>
    </div>
  );
}

export default InvestmentDetail;
