import React from 'react';
import {
  HeroSection,
  BenefitsSection,
  ChatAnimationSection,
  TimelineSection,
  ProjectsSection,
  TestimonialsSection,
  CTASection
} from '../components/home';

export function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ChatAnimationSection />
      <TimelineSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
