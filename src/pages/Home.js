import React from "react";
import Hero from "../components/Hero";
import Comparison from "../components/Comparison";
import GradienBgSection from "../components/GradienBgSection";
import GradientTextSection from "../components/GradientTextSection";
import FeaturesSection from "../components/FeaturesSection";
import BlackBgGradientText from "../components/BlackBgGradientText";
import WhitepaperSection from "../components/WhitepaperSection";
import FAQSection from "../components/FAQSection";
import NewsletterSection from "../components/NewsletterSection";

function Home() {
  return (
    <div>
      <Hero />
      <Comparison />
      <GradienBgSection />
      <FAQSection />
      <GradientTextSection>
            3% better performing than the top portfolios in the World*. How about that?
      </GradientTextSection>
      <NewsletterSection />
      <FeaturesSection />
      <BlackBgGradientText>
            If you had invested $100 per month over the past 10 years, you would have $111,324.92 today. The next best time to invest is now.
      </BlackBgGradientText>
      <WhitepaperSection />
      <NewsletterSection />
    </div>
  );
}

export default Home;