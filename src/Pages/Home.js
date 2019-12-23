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

function Home() {
  return (
    <div>
      <Hero />
      <ComparisonTable />
      <GradienBgSection />
      <FAQ />
      <GradientText GradientTextContent="3% better performing than the top portfolios in the World*. How about that?" />
      <Newsletter />
      <Features />
      <BlackBGgradientText />
      <BigBlackTitle />
      <Newsletter />
    </div>
  );
}

export default Home;
