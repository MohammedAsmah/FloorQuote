import { ChevronDown } from 'lucide-react';
import { colors } from '@/lib/design-system';

const faqs = [
  {
    question: 'How much does garage flooring cost in Calgary?',
    answer:
      'It depends on garage size, coating system, concrete condition, preparation, and finish. There is no single Calgary price that applies to every garage. FloorQuote uses project-specific details to generate an estimate range based on Calgary market pricing.',
  },
  {
    question: 'How much does it cost to epoxy a garage floor in Calgary?',
    answer:
      'Epoxy base rates typically start lower than polyaspartic or polyurea systems, but the total depends on your garage size, floor condition, and decorative finish. FloorQuote estimates epoxy projects in the $3–8 per square foot range before adjustments for condition and finish.',
  },
  {
    question: 'Is polyaspartic more expensive than epoxy?',
    answer:
      'Generally yes — polyaspartic carries a higher base cost, typically $6–10 per square foot in the FloorQuote model. It cures faster, resists UV yellowing better, and handles moisture well, which is why many Calgary garages use it. The right system depends on your priorities.',
  },
  {
    question: 'What makes garage floor coating more expensive?',
    answer:
      'Poor concrete condition, major cracks, old coating removal, moisture issues, decorative finishes, and stem walls or steps all increase the estimate. These factors often combine — a garage with old paint, cracks, and moisture needs significantly more preparation than bare concrete in good condition.',
  },
  {
    question: 'Does garage size affect the total price?',
    answer:
      'Yes. A larger garage uses more material, more labour, and more preparation time. FloorQuote lets you enter your exact square footage, not just a category, so the total reflects your actual garage.',
  },
  {
    question: 'Does concrete condition affect garage flooring cost?',
    answer:
      'Yes. A floor in excellent condition needs minimal preparation, while a floor in poor condition can add 30% or more to the per-square-foot estimate. Cracks, staining, and old coatings each increase the preparation scope.',
  },
  {
    question: 'Can I get an estimate before contacting a contractor?',
    answer:
      'Yes — that is exactly what FloorQuote is for. Enter your project details into the calculator and see an estimate range based on Calgary market pricing, with no obligation and no phone call required.',
  },
];

export function CostFAQ() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.card }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.25rem', textAlign: 'center' }}
        >
          Garage Flooring Cost FAQs
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: colors.text.secondary,
            maxWidth: '640px',
            margin: '0 auto 3rem',
            textAlign: 'center',
            lineHeight: '1.6',
          }}
        >
          Common questions Calgary homeowners ask about garage flooring pricing.
        </p>

        <div className="calgary-faq" style={{ maxWidth: '820px', margin: '0 auto' }}>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                <span
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: colors.text.primary,
                    flex: 1,
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  color={colors.text.secondary}
                  className="faq-chevron"
                />
              </summary>
              <div className="calgary-faq-answer">
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: colors.text.secondary,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
