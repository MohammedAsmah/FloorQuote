import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { CostHero } from '@/components/calgary-cost/CostHero';
import { QuickAnswer } from '@/components/calgary-cost/QuickAnswer';
import { PriceFactors } from '@/components/calgary-cost/PriceFactors';
import { GarageSizeCost } from '@/components/calgary-cost/GarageSizeCost';
import { EpoxyVsPolyCost } from '@/components/calgary-cost/EpoxyVsPolyCost';
import { ConcreteConditionCost } from '@/components/calgary-cost/ConcreteConditionCost';
import { CalgaryCostFactors } from '@/components/calgary-cost/CalgaryCostFactors';
import { ExampleScenarios } from '@/components/calgary-cost/ExampleScenarios';
import { WhyPricesDiffer } from '@/components/calgary-cost/WhyPricesDiffer';
import { CostFAQ } from '@/components/calgary-cost/CostFAQ';
import { CostFinalCTA } from '@/components/calgary-cost/CostFinalCTA';
import { CostStructuredData } from '@/components/calgary-cost/CostStructuredData';
import type { Metadata } from 'next';

const pageUrl = 'https://www.floorquoteconnect.com/calgary-garage-flooring-cost';

export const metadata: Metadata = {
  title: {
    absolute: 'Garage Flooring Cost Calgary | FloorQuote',
  },
  description:
    'How much does garage flooring cost in Calgary? See what affects epoxy, polyaspartic and garage floor coating prices, then get a Calgary-focused estimate.',
  alternates: {
    canonical: '/calgary-garage-flooring-cost',
  },
  openGraph: {
    title: 'Garage Flooring Cost Calgary | FloorQuote',
    description:
      'How much does garage flooring cost in Calgary? See what affects epoxy, polyaspartic and garage floor coating prices, then get a Calgary-focused estimate.',
    url: pageUrl,
    siteName: 'FloorQuote',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/floorquote-icon.png',
        width: 512,
        height: 512,
        alt: 'FloorQuote - Garage Flooring Cost in Calgary',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garage Flooring Cost Calgary | FloorQuote',
    description:
      'How much does garage flooring cost in Calgary? See what affects epoxy, polyaspartic and garage floor coating prices, then get a Calgary-focused estimate.',
    images: ['/floorquote-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function CalgaryGarageFlooringCostPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <CostStructuredData />
      <Navigation />
      <CostHero />
      <QuickAnswer />
      <PriceFactors />
      <GarageSizeCost />
      <EpoxyVsPolyCost />
      <ConcreteConditionCost />
      <CalgaryCostFactors />
      <ExampleScenarios />
      <WhyPricesDiffer />
      <CostFAQ />
      <CostFinalCTA />
      <Footer />
    </main>
  );
}
