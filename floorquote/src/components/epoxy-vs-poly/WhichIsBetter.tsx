import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/lib/design-system';

export function WhichIsBetter() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.primary }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem' }}
        >
          Which Is Better for a Calgary Garage?
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '1.5rem' }}>
          There is no single coating that works best for every Calgary garage.
          The right system depends on your priorities&nbsp;&mdash; whether that is
          upfront cost, fast return to service, UV resistance, or long-term
          durability under local conditions.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '1rem' }}>
          <strong>Polyaspartic</strong> can be attractive for many Calgary
          residential garages because of its fast cure time, UV stability and
          moisture resistance.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '1rem' }}>
          <strong>Epoxy</strong> can still be a strong option for high-build
          systems, budget-conscious projects and situations where longer working
          time is helpful.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, maxWidth: '820px', marginBottom: '2rem' }}>
          Many homeowners also don&apos;t need to choose one chemistry
          exclusively&nbsp;&mdash; hybrid systems that combine an epoxy base coat
          with a polyaspartic topcoat are a common approach. The sections below
          explain how each system works and what changes your actual
          estimate.
        </p>
        <Link href="/calculator" className="calgary-btn-primary" style={{ display: 'inline-flex' }}>
          Compare My Options
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
