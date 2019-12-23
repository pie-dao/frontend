import React from 'react';
import Hero from '../Components/Hero';
import ComparisonTable from '../Components/ComparisonTable';
import GradienBgSection from '../Components/GradienBgSection';
import GradientText from '../Components/GradientText';
import Features from '../Components/Features';
import BlackBGgradientText from '../Components/BlackBGgradientText';
import BigBlackTitle from '../Components/BigBlackTitle';
import FAQ from '../Components/FAQ';
import Newsletter from '../Components/Newsletter';



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
      <FAQ/>
      <Newsletter/>
    </div>
  );
}

export default Home;
