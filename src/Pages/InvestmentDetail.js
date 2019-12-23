import React from "react";
import ComparisonTable from "../Components/ComparisonTable";
import GradientText from "../Components/GradientText";
import Features from "../Components/Features";
import BlackBGgradientText from "../Components/BlackBGgradientText";
import BigBlackTitle from "../Components/BigBlackTitle";
import Newsletter from "../Components/Newsletter";
import AWPDetail from "../Components/AWPDetail";

function InvestmentDetail() {
  return (
    <div className="App">
      <GradientText GradientTextContent="You will gain way more"/>
      <AWPDetail />
      <ComparisonTable />
      <Newsletter />
      <Features />
      <BlackBGgradientText />
      <BigBlackTitle />
      <Newsletter />
    </div>
  );
}

export default InvestmentDetail;
