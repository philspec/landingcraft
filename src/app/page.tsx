"use client";

import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FeaturesSection from "@/components/FeaturesSection";
import InteractiveBuilderSection from "@/components/InteractiveBuilderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <InteractiveBuilderSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
