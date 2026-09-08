import { CalculatorLanding } from '@/src/components/calculator/CalculatorLanding';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Garage Flooring Cost Calculator Calgary | Free Estimate | FloorQuote',
  },
  description:
    "Use FloorQuote's free garage flooring cost calculator to estimate your Calgary project based on garage size, coating system, concrete condition, repairs and finish options.",
  alternates: {
    canonical: '/calculator',
  },
  openGraph: {
    title: 'Garage Flooring Cost Calculator Calgary | Free Estimate | FloorQuote',
    description:
      "Use FloorQuote's free garage flooring cost calculator to estimate your Calgary project based on garage size, coating system, concrete condition, repairs and finish options.",
    url: 'https://www.floorquoteconnect.com/calculator',
    siteName: 'FloorQuote',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/floorquote-icon.png',
        width: 512,
        height: 512,
        alt: 'FloorQuote - Garage Flooring Cost Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garage Flooring Cost Calculator Calgary | Free Estimate | FloorQuote',
    description:
      "Use FloorQuote's free garage flooring cost calculator to estimate your Calgary project based on garage size, coating system, concrete condition, repairs and finish options.",
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

export default function CalculatorPage() {
  return <CalculatorLanding />;
}
