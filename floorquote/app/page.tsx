import { Navigation } from '@/components/landing/Navigation';
import { Hero } from '@/components/landing/Hero';
import { TrustSection } from '@/components/landing/TrustSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { ComparisonSection } from '@/components/landing/ComparisonSection';
import { CalculatorPreview } from '@/components/landing/CalculatorPreview';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { CoatingTypes } from '@/components/landing/CoatingTypes';
import { LocalExpertise } from '@/components/landing/LocalExpertise';
import { FAQSection } from '@/components/landing/FAQSection';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
import { StructuredData } from '@/components/landing/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FloorQuote - Calgary Garage Floor Coating Cost Estimator',
  description:
    'Get a fast, accurate garage floor coating cost estimate for your Calgary garage using local market pricing.',
  keywords:
    'garage floor coating, epoxy flooring Calgary, garage floor cost estimator, polyaspartic coating, concrete coating Calgary, garage floor quotes',
  authors: [{ name: 'FloorQuote' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FloorQuote - Calgary Garage Floor Coating Cost Estimator',
    description:
      'Get a fast, accurate garage floor coating cost estimate for your Calgary garage using local market pricing.',
    url: 'https://www.floorquoteconnect.com',
    siteName: 'FloorQuote',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/floorquote-icon.png',
        width: 512,
        height: 512,
        alt: 'FloorQuote - Garage Floor Coating Estimator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FloorQuote - Calgary Garage Floor Coating Cost Estimator',
    description:
      'Get a fast, accurate garage floor coating cost estimate for your Calgary garage using local market pricing.',
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

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <StructuredData />
      <Navigation />
      <Hero />
      <TrustSection />
      <HowItWorks />
      <ComparisonSection />
      <CalculatorPreview />
      <BenefitsSection />
      <CoatingTypes />
      <LocalExpertise />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
