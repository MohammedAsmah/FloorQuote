import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { Hero } from '@/components/calgary/Hero';
import { IntroSection } from '@/components/calgary/IntroSection';
import { OptionsSection } from '@/components/calgary/OptionsSection';
import { CostSection } from '@/components/calgary/CostSection';
import { CalgarySection } from '@/components/calgary/CalgarySection';
import { ProcessSection } from '@/components/calgary/ProcessSection';
import { ChooseSection } from '@/components/calgary/ChooseSection';
import { ComparisonSection } from '@/components/calgary/ComparisonSection';
import { FAQSection } from '@/components/calgary/FAQSection';
import { LeadSection } from '@/components/calgary/LeadSection';
import { StructuredData } from '@/components/calgary/StructuredData';
import type { Metadata } from 'next';

const pageUrl = 'https://www.floorquoteconnect.com/calgary-garage-flooring';

export const metadata: Metadata = {
  title: {
    absolute: 'Garage Flooring in Calgary: Compare Options & Costs',
  },
  description:
    'Compare Calgary garage flooring options and costs. Understand what drives pricing, estimate your project, and connect with local pros for a quote.',
  alternates: {
    canonical: '/calgary-garage-flooring',
  },
  openGraph: {
    title: 'Garage Flooring in Calgary: Compare Options & Costs',
    description:
      'Compare Calgary garage flooring options and costs. Understand what drives pricing, estimate your project, and connect with local pros for a quote.',
    url: pageUrl,
    siteName: 'FloorQuote',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/floorquote-icon.png',
        width: 512,
        height: 512,
        alt: 'FloorQuote - Garage Flooring in Calgary',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garage Flooring in Calgary: Compare Options & Costs',
    description:
      'Compare Calgary garage flooring options and costs. Understand what drives pricing, estimate your project, and connect with local pros for a quote.',
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

export default function CalgaryGarageFlooringPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <StructuredData />
      <Navigation />
      <Hero />
      <IntroSection />
      <OptionsSection />
      <CostSection />
      <ComparisonSection />
      <ProcessSection />
      <ChooseSection />
      <CalgarySection />
      <FAQSection />
      <LeadSection />
      <Footer />
    </main>
  );
}
