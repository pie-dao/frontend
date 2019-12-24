import React from 'react';
import TopNavi from '../components/TopNavi';
import Hero from '../components/Hero';
import ComparisonTable from '../components/Comparison';
import GradienBgSection from '../components/GradienBgSection';
import GradientText from '../components/BetterPerformingSection';
import Features from '../components/FeaturesSection';
import BlackBGgradientText from '../components/IfYouHadSection';
import NewsletterSection from '../components/NewsletterSection';
import WhitepaperSection from '../components/WhitepaperSection';

function InvestmentDetail() {
  return (
    <div className="App">
      <Hero/>
      <ComparisonTable/>
      <GradientText/>
      <NewsletterSection/>
      <Features/>
      <BlackBGgradientText/>
      <WhitepaperSection/>
      <NewsletterSection/>
    </div>
  );
}

export default InvestmentDetail;
