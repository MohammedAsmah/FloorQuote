import { Calculator } from '@/src/components/Calculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Garage Flooring Cost Calculator | FloorQuote',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CalculatorStartPage() {
  return <Calculator />;
}