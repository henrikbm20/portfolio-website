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
      <ProjectsSection />
      <TimelineSection />
      <ChatAnimationSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
