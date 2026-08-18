import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { CompareHero } from '@/components/epoxy-vs-poly/CompareHero';
import { QuickCompare } from '@/components/epoxy-vs-poly/QuickCompare';
import { WhichIsBetter } from '@/components/epoxy-vs-poly/WhichIsBetter';
import { EpoxySection } from '@/components/epoxy-vs-poly/EpoxySection';
import { PolyasparticSection } from '@/components/epoxy-vs-poly/PolyasparticSection';
import { HybridSection } from '@/components/epoxy-vs-poly/HybridSection';
import { CostSection } from '@/components/epoxy-vs-poly/CostSection';
import { CalgaryFactors } from '@/components/epoxy-vs-poly/CalgaryFactors';
import { DecisionGuide } from '@/components/epoxy-vs-poly/DecisionGuide';
import { CompareFAQ } from '@/components/epoxy-vs-poly/CompareFAQ';
import { CompareFinalCTA } from '@/components/epoxy-vs-poly/CompareFinalCTA';
import { CompareStructuredData } from '@/components/epoxy-vs-poly/CompareStructuredData';

export const metadata = {
  title: 'Epoxy vs Polyaspartic Garage Floors in Calgary | FloorQuote',
  description:
    'Compare epoxy and polyaspartic garage flooring in Calgary. See differences in cost, durability, cure time, UV resistance and which system fits your garage.',
  alternates: {
    canonical: 'https://www.floorquoteconnect.com/epoxy-vs-polyaspartic-garage-floor-calgary',
  },
  openGraph: {
    title: 'Epoxy vs Polyaspartic Garage Floors in Calgary | FloorQuote',
    description:
      'Compare epoxy and polyaspartic garage flooring in Calgary. See differences in cost, durability, cure time, UV resistance and which system fits your garage.',
    url: 'https://www.floorquoteconnect.com/epoxy-vs-polyaspartic-garage-floor-calgary',
    siteName: 'FloorQuote Connect',
    type: 'website',
    locale: 'en_CA',
  },
};

export default function EpoxyVsPolyasparticCalgaryPage() {
  return (
    <>
      <Navigation />
      <CompareStructuredData />
      <CompareHero />
      <QuickCompare />
      <WhichIsBetter />
      <EpoxySection />
      <PolyasparticSection />
      <HybridSection />
      <CostSection />
      <CalgaryFactors />
      <DecisionGuide />
      <CompareFAQ />
      <CompareFinalCTA />
      <Footer />
    </>
  );
}
