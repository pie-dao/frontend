import React from "react";
import GradientText from "../Components/GradientText";
import BlackBGgradientText from "../Components/BlackBGgradientText";
import Newsletter from "../Components/Newsletter";
import AWPDetail from "../Components/AWPDetail";

function InvestmentDetail() {
  return (
    <div className="App">
      <GradientText GradientTextContent="You will gain way more"/>
      <AWPDetail />
      <Newsletter />
      <BlackBGgradientText BlackBGgradientContent="If you had invested $100 per month over the past 10 years, you would have $111,324.92 today. The next best time to invest is now." />
      <Newsletter />
    </div>
  );
}

export default InvestmentDetail;
