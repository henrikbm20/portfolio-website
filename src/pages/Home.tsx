import {
  HeroSection,
  BenefitsSection,
  ChatAnimationSection,
  TimelineSection,
  TestimonialsSection,
  CTASection
} from '../components/home';

export function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <TimelineSection />
      <ChatAnimationSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
