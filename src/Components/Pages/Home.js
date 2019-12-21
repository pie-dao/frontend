import React from 'react';
import Hero from '../Hero';
import ComparisonTable from '../ComparisonTable';
import GradienBgSection from '../GradienBgSection';
import GradientText from '../GradientText';
import Features from '../Features';
import BlackBGgradientText from '../BlackBGgradientText';
import BigBlackTitle from '../BigBlackTitle';
import Newsletter from '../Newsletter';



function Home() {
  return (
    <div>
      <Hero/>
      <ComparisonTable/>
      <GradienBgSection/>
      <GradientText/>
      <Newsletter/>
      <Features/>
      <BlackBGgradientText/>
      <BigBlackTitle/>
      <Newsletter/>
    </div>
  );
}

export default Home;
