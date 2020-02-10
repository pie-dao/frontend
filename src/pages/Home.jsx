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
import FAQ from '../components/FAQ';
import NewsletterSection from '../components/NewsletterSection';
// import Seo from '../components/Seo';

const Home = (props) => {
  return (
    <div>
      {/* TODO SEO */}
      <HeroSection {...props} />
      <GradientBgSection />
      <AWPExplainer />
      <ComparisonTable />
      <PortfolioBreakdown />
      <GradientQuote />
      <FAQ />
      <WhitepaperSection />
      <NewsletterSection />
    </div>
  );
};

export default view(Home);
