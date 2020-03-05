/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';
import ComparisonTable from '../components/ComparisonTable';
import GradientQuote from '../components/GradientQuote';
import AWPExplainer from '../components/AWPExplainer';
import PortfolioBreakdown from '../components/PortfolioBreakdown';
import WhitepaperSection from '../components/WhitepaperSection';
import FAQ from '../components/FAQ';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
// import Seo from '../components/Seo';

const AwpPlusPlus = () => {
  return (
    <div>
      <AWPExplainer />
      <ComparisonTable />
      <PortfolioBreakdown />
      <GradientQuote />
      <FAQ />
      <WhitepaperSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default view(AwpPlusPlus);
