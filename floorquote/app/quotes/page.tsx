import { Navigation } from '@/src/components/landing/Navigation';
import { QuoteRequestForm } from '@/src/components/quotes/QuoteRequestForm';
import { Footer } from '@/src/components/landing/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Garage Floor Quotes | FloorQuote',
  description:
    'Request quotes from trusted local flooring professionals for your garage floor coating project in Calgary.',
  alternates: {
    canonical: '/quotes',
  },
  openGraph: {
    title: 'Request Garage Floor Quotes | FloorQuote',
    description:
      'Request quotes from trusted local flooring professionals for your garage floor coating project in Calgary.',
    url: 'https://www.floorquoteconnect.com/quotes',
    type: 'website',
  },
};

export default function QuotesPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Navigation />
      <QuoteRequestForm />
      <Footer />
    </main>
  );
}
