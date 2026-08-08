import { Navigation } from '@/src/components/landing/Navigation';
import { Hero } from '@/src/components/about/Hero';
import { WhatIsFloorQuote } from '@/src/components/about/WhatIsFloorQuote';
import { TheProblem } from '@/src/components/about/TheProblem';
import { HowItWorks } from '@/src/components/about/HowItWorks';
import { WhyFloorQuote } from '@/src/components/about/WhyFloorQuote';
import { Transparency } from '@/src/components/about/Transparency';
import { FinalCTA } from '@/src/components/about/FinalCTA';
import { Footer } from '@/src/components/landing/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About FloorQuote | Garage Floor Estimates in Calgary',
  description: 'Learn how FloorQuote helps Calgary homeowners understand garage floor coating costs and connect with local flooring professionals.',
  openGraph: {
    title: 'About FloorQuote | Garage Floor Estimates in Calgary',
    description: 'Learn how FloorQuote helps Calgary homeowners understand garage floor coating costs and connect with local flooring professionals.',
    url: 'https://floorquote.ca/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Navigation />
      <Hero />
      <WhatIsFloorQuote />
      <TheProblem />
      <HowItWorks />
      <WhyFloorQuote />
      <Transparency />
      <FinalCTA />
      <Footer />
    </main>
  );
}