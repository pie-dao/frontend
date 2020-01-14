import React from "react";
import Hero from "../Components/Hero";
import ComparisonTable from "../Components/ComparisonTable";
import GradienBgSection from "../Components/GradienBgSection";
import GradientText from "../Components/GradientText";
import Features from "../Components/Features";
import BlackBGgradientText from "../Components/BlackBGgradientText";
import BigBlackTitle from "../Components/BigBlackTitle";
import FAQ from "../Components/FAQ";
import Newsletter from "../Components/Newsletter";
import AllocationTab from "../Components/AllocationTab";

function Home() {
  return (
    <div>
      <Hero />
      <ComparisonTable />
      <GradienBgSection />
      <FAQ />
      <GradientText GradientTextContent="In the last 15 years, nearly 92% of actively managed funds underperformed the S&P 500." />
      <Features />
      <AllocationTab />
      <BlackBGgradientText BlackBGgradientContent="In 2019 our AWP ++portfolio returned 27.7% APY, exceeding by almost 10% the best medium risk portfolio out there. The next best time to invest is now."/>
      <BigBlackTitle />
      <Newsletter />
    </div>
  );
}

export default Home;
