import React from 'react';
import Hero from '../Hero';
import ComparisonTable from '../ComparisonTable';
import GradienBgSection from '../GradienBgSection';
import GradientText from '../GradientText';
import Features from '../Features';
import BlackBGgradientText from '../elements/home/BlackBGgradientText';
import WhitepaperSection from '../components/elements/WhitepaperSection';
import NewsletterSection from '../components/NewsletterSection';

function Investment() {
  return (
    <div>
      <Hero/>
      <GradienBgSection/>
      <GradientText/>
      <NewsletterSection/>
      <Features/>
      <BlackBGgradientText/>
      <WhitepaperSection/>
      <NewsletterSection/>
    </div>
  );
}

export default Investment;
