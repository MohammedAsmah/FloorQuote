'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { colors } from '@/lib/design-system';

const faqs = [
  {
    q: 'Is polyaspartic better than epoxy for Calgary garage floors?',
    a: 'Polyaspartic is not universally better, but it can be a stronger fit for many Calgary garages because of its fast cure time, UV stability and moisture resistance. Epoxy can still be a practical option for budget-focused projects, high-build applications and situations where longer working time is helpful.',
  },
  {
    q: 'Is polyaspartic more expensive than epoxy?',
    a: 'Yes, the base rate is typically higher. FloorQuote estimates epoxy in the $3\u20138 per square foot range, while polyaspartic typically falls in the $6\u201310 range. The actual estimate also depends on your garage size, concrete condition and finish.',
  },
  {
    q: 'How long does epoxy take to cure?',
    a: 'Standard epoxy typically requires 24\u201372 hours to cure before regular foot traffic and several days before vehicle traffic. Actual cure time depends on the specific product, ambient temperature and humidity during application.',
  },
  {
    q: 'How long does polyaspartic take to cure?',
    a: 'Polyaspartic coatings generally cure much faster than epoxy, often becoming walkable within a few hours. This faster return to service is one of the main reasons Calgary homeowners choose polyaspartic systems.',
  },
  {
    q: 'Does Calgary\'s cold weather affect garage floor coating?',
    a: 'Calgary\'s seasonal temperature swings can affect installation conditions. Some coatings need specific temperature ranges during application. Polyaspartic generally handles lower installation temperatures better than standard epoxy, but the actual range depends on the specific product and manufacturer specifications.',
  },
  {
    q: 'Can epoxy and polyaspartic be used together?',
    a: 'Yes, hybrid systems are common. A typical approach uses an epoxy base coat for adhesion and build, decorative flakes or aggregate for texture and colour, and a polyaspartic topcoat for UV stability and fast cure. Different layers perform different functions.',
  },
  {
    q: 'Which coating is better for a garage with road salt?',
    a: 'Both systems can handle road salt exposure when properly applied, but coating selection and surface preparation matter more in Calgary than in milder climates. The floor needs a system that bonds well to clean, prepared concrete and holds up under repeated salt and moisture exposure.',
  },
  {
    q: 'Which coating should I choose for my garage?',
    a: 'There is no single best coating for all Calgary garages. The right system depends on your priorities\u2014whether that is upfront cost, fast return to service, UV resistance or long-term durability. Use the FloorQuote calculator to compare estimates based on your actual garage details.',
  },
];

function FaqItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: `1px solid ${colors.border.default}`,
      }}
    >
      <button
        onClick={toggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '1rem', fontWeight: '600', color: colors.text.primary, paddingRight: '1rem' }}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          color={colors.text.muted}
          style={{
            flexShrink: 0,
            transition: 'transform 200ms ease-in-out',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      <div
        style={{
          maxHeight: isOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 300ms ease-in-out',
        }}
      >
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: colors.text.secondary, paddingBottom: '1.25rem', margin: 0 }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export function CompareFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.primary }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '2rem' }}
        >
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, i) => (
          <FaqItem
            key={faq.q}
            faq={faq}
            isOpen={openIndex === i}
            toggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
