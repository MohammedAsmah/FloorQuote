import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/lib/design-system';

export function QuickAnswer() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.card }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.5rem' }}
        >
          At a Glance
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, marginBottom: '1.5rem' }}>
          There is no single Calgary garage flooring price that applies to every
          garage. Professional garage floor coating prices vary widely because
          every project has different preparation needs, coating systems, and
          floor conditions. A final contractor quote can also differ after
          on-site inspection.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, marginBottom: '2.5rem' }}>
          FloorQuote&apos;s calculator accounts for the key factors — garage
          size, coating type, concrete condition, cracks, decorative finish, and
          more — so you get a realistic estimate range before contacting anyone.
        </p>
        <Link href="/calculator" className="calgary-btn-primary">
          Calculate Your Garage Flooring Cost
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
