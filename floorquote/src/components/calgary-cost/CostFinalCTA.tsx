import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, MapPin, Clock } from 'lucide-react';
import { colors } from '@/lib/design-system';

export function CostFinalCTA() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.primary }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          Get a Calgary Garage Flooring Estimate
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, marginBottom: '2.5rem' }}>
          Instead of relying on a generic national average, enter your project
          details and see an estimate based on FloorQuote&apos;s Calgary pricing
          model. No obligation, no phone call required.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center', marginBottom: '3rem' }}>
          <Link href="/calculator" className="calgary-btn-primary" style={{ fontSize: '1.125rem', padding: '1.125rem 2.5rem' }}>
            Calculate My Garage Flooring Cost
            <ArrowRight size={20} />
          </Link>
          <Link href="/quotes" className="calgary-btn-secondary">
            Request Garage Flooring Quotes
          </Link>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          {[
            { icon: CheckCircle, text: 'No obligation' },
            { icon: Shield, text: 'Free estimate' },
            { icon: MapPin, text: 'Calgary market pricing' },
            { icon: Clock, text: 'Results in seconds' },
          ].map((item) => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: colors.text.secondary }}>
              <item.icon size={16} color={colors.accent.teal} />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
