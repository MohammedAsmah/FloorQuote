import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/lib/design-system';

export function CompareFinalCTA() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.card }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1rem' }}
        >
          Still Not Sure Which Garage Floor System Fits?
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '640px', margin: '0 auto 2rem' }}>
          Compare your options using your actual garage details instead of
          choosing from a generic price or product description.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          <Link href="/calculator" className="calgary-btn-primary">
            Calculate My Garage Flooring Cost
            <ArrowRight size={18} />
          </Link>
          <Link href="/quotes" className="calgary-btn-secondary">
            Request Garage Flooring Quotes
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
