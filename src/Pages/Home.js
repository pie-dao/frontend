import React from "react";
import Hero from "../Components/Hero";
import ComparisonTable from "../Components/ComparisonTable";
import GradienBgSection from "../Components/GradienBgSection";
import GradientText from "../Components/GradientText";
import Features from "../Components/Features";
import BlackBGgradientText from "../Components/BlackBGgradientText";
import BigBlackTitle from "../Components/BigBlackTitle";
import FAQ from "../Components/FAQ";
import Newsletter from "../Components/Newsletter";
import AllocationTab from "../Components/AllocationTab";
import Seo from "../Components/Seo";
import config from "../utils/config";

function Home() {
  return (
    <div>
      <Seo
        title={config.siteName}
        description={config.description}
        url={`${config.siteUrl}`}
        image={config.image}
        keywords={config.keywords}
      />
      <Hero />
      
      <ComparisonTable />
      <GradienBgSection />      
      <GradientText>
        Diversification is the only free lunch in finance. <br></br><small>- Harry Markowitz Economist & Nobel Prize.</small>
      </GradientText>
      <Features />
      <AllocationTab />
      {/* <BlackBGgradientText BlackBGgradientContent="In 2019, the AWP++ portfolio returned 30.49%"/> */}
      
      <FAQ />
      <BigBlackTitle />
      <Newsletter />
    </div>
  );
}

export default Home;
