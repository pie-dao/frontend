import React from 'react';
import TopNavi from '../components/partials/TopNavi';
import Hero from '../components/elements/home/Hero';
import ComparisonTable from '../components/elements/home/comparison/ComparisonTable';
import GradienBgSection from '../components/GradienBgSection';
import GradientText from '../components/elements/home/sections/BetterPerformingSection';
import Features from '../components/elements/home/sections/FeaturesSection';
import BlackBGgradientText from '../components/elements/home/sections/IfYouHadSection';
import NewsletterSection from '../components/elements/home/sections/NewsletterSection';
import WhitepaperSection from '../components/elements/home/sections/WhitepaperSection';

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
