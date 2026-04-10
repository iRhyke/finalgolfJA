import React from "react";
import HeroSection from "../components/home/HeroSection";
import FacilityPreview from "../components/home/FacilityPreview";
import FeaturesSection from "../components/home/FeaturesSection";
import SimulatorPreview from "../components/home/SimulatorPreview";
import PricingPreview from "../components/home/PricingPreview";
import FlowSection from "../components/home/FlowSection";
import AccessPreview from "../components/home/AccessPreview";
import LINESection from "../components/home/LINESection";
import CTASection from "../components/home/CTASection";
import Facility from "./Facility";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FacilityPreview /> 
      <FeaturesSection />
      <SimulatorPreview />
      <PricingPreview />
      <FlowSection />
      <AccessPreview />
      <LINESection />
      <CTASection />
    </div>
  );
}
