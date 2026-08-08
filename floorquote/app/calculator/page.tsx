import { Calculator } from '@/src/components/Calculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Garage Floor Coating Calculator | FloorQuote',
  description: 'Get instant, accurate garage floor coating estimates using our free calculator. Based on Calgary market pricing.',
  openGraph: {
    title: 'Garage Floor Coating Calculator | FloorQuote',
    description: 'Get instant, accurate garage floor coating estimates using our free calculator.',
    url: 'https://floorquote.ca/calculator',
    type: 'website',
  },
};

export default function CalculatorPage() {
  return <Calculator />;
}