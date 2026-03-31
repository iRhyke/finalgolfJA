import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import simulatorPreview from "../components/home/simulatorPreview";
import pricingPreview from "../components/home/pricingPreview";
import FlowSection from "../components/home/FlowSection";
import accessPreview from "../components/home/accessPreview";
import LINESection from "../components/home/LINESection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <simulatorPreview />
      <pricingPreview />
      <FlowSection />
      <accessPreview />
      <LINESection />
      <CTASection />
    </div>
  );
}
