/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import HeroSection from '../components/HeroSection';
import GradientBgSection from '../components/GradientBgSection';
import GradientQuote from '../components/GradientQuote';
import WhitepaperSection from '../components/WhitepaperSection';
import FAQ from '../components/FAQ';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
// import Seo from '../components/Seo';

const Landing = (props) => {
  return (
    <div>
      {/* TODO SEO */}
      <HeroSection {...props} />
      <GradientBgSection />
      <FAQ />
      <GradientQuote />
      <NewsletterSection />
      <WhitepaperSection />
      <Footer />
    </div>
  );
};

export default view(Landing);
