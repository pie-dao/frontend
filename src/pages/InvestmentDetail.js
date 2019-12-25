import React from "react";
import GradientTextSection from "../components/GradientTextSection";
import BlackBgGradientText from "../components/BlackBgGradientText";
import NewsletterSection from "../components/NewsletterSection";
import AWPDetail from "../components/AWPDetail";

function InvestmentDetail() {
  return (
    <div className="App">
      <GradientTextSection>You will gain way more</GradientTextSection>
      <AWPDetail />
      <NewsletterSection />
      <BlackBgGradientText>
        If you had invested $100 per month over the past 10 years, you would have $111,324.92 today. The next best time to invest is now.
      </BlackBgGradientText>
      <NewsletterSection />
    </div>
  );
}

export default InvestmentDetail;