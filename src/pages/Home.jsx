/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import HeroSection from '../components/HeroSection';
import ComparisonTable from '../components/ComparisonTable';
import GradientBgSection from '../components/GradientBgSection';
import GradientQuote from '../components/GradientQuote';
import AWPExplainer from '../components/AWPExplainer';
import PortfolioBreakdown from '../components/PortfolioBreakdown';
import WhitepaperSection from '../components/WhitepaperSection';
import NewsletterSection from '../components/NewsletterSection';
// import Seo from '../components/Seo';

const Home = () => {
  return (
    <div>
      {/* TODO SEO */}
      <HeroSection />
      <ComparisonTable />
      <GradientBgSection />
      <GradientQuote />
      <AWPExplainer />
      <PortfolioBreakdown />
      <WhitepaperSection />
      <NewsletterSection />
    </div>
  );
};

export default view(Home);
