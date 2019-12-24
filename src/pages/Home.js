import React from 'react';
import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import GradienBgSection from '../components/GradienBgSection';
import GradientText from '../components/BetterPerformingSection';
import Features from '../components/FeaturesSection';
import BlackBGgradientText from '../components/IfYouHadSection';
import FAQ from '../components/FAQSection';
import NewsletterSection from '../components/NewsletterSection';
import WhitepaperSection from '../components/WhitepaperSection';



function Home() {
  return (
    <div>
      <Hero/>
      <Comparison/>
      <GradienBgSection/>
      <FAQ/>
      <GradientText/>
      <NewsletterSection/>
      <Features/>
      <BlackBGgradientText/>
      <WhitepaperSection/>
      <NewsletterSection/>
    </div>
  );
}

export default Home;
