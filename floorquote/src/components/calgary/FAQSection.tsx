import { ChevronDown } from 'lucide-react';
import { colors } from '@/lib/design-system';

export function FAQSection() {
  const faqs = [
    {
      question: 'How much does garage flooring cost in Calgary?',
      answer:
        'It varies widely, because pricing depends on square footage, concrete condition, surface preparation, the coating system, the number of coats, and extras like flakes, steps, and moisture work. A realistic next step is an estimate based on your specific garage: our cost calculator uses Calgary market pricing and accounts for these factors, or you can request quotes from local flooring professionals.',
    },
    {
      question: 'What is the best garage floor coating for a Calgary garage?',
      answer:
        'There\u2019s no single best system \u2014 it depends on your budget, how you use the garage, and your concrete\u2019s condition. Epoxy is a proven, budget-friendly choice; polyaspartic cures faster and resists UV yellowing; flake systems add texture and a custom look. Talk to an installer about your situation, and get estimates for more than one option so you can compare.',
    },
    {
      question: 'Is epoxy good for garage floors?',
      answer:
        'Yes. Epoxy is one of the most popular garage floor systems because it\u2019s durable, chemical-resistant, and relatively affordable. Success depends heavily on surface preparation, and some epoxies can amber or yellow with strong UV exposure \u2014 so discuss your garage\u2019s sun exposure with your installer.',
    },
    {
      question: 'Is polyaspartic better than epoxy?',
      answer:
        'It depends on what matters to you. Polyaspartic cures much faster, is more flexible, and resists UV yellowing better, but it generally costs more. Epoxy offers strong adhesion and value at a lower price point. Both can serve a garage well with proper preparation \u2014 it\u2019s a trade-off, not a clear winner.',
    },
    {
      question: 'How long does garage floor coating last?',
      answer:
        'Lifespan depends on the system, surface preparation, and how the floor is used. Epoxy systems commonly last in the 5\u201310 year range, while polyaspartic systems are frequently quoted in the 10\u201315+ year range. Quality preparation and basic maintenance are the biggest factors in reaching those numbers.',
    },
    {
      question: 'Does garage floor coating work in cold weather?',
      answer:
        'Installed coatings handle cold weather fine once cured. Application is the temperature-sensitive part \u2014 most coatings have minimum application and curing temperatures. That\u2019s why installers schedule around the weather, and why heated attached garages are easier to work in during Calgary winters.',
    },
    {
      question: 'Can garage floor coating be applied to old concrete?',
      answer:
        'Yes, in most cases. Older concrete can be coated as long as it\u2019s structurally sound, clean, and properly prepared. Cracks and damage get repaired first, and the prep work may add to the cost \u2014 which is exactly why an in-person look beats a phone estimate.',
    },
    {
      question: 'What should I ask a garage flooring contractor in Calgary?',
      answer:
        'Ask what surface preparation is included in the quote, which system and how many coats are used, how moisture issues are handled, what the warranty covers, and how long your garage will be out of commission. Preparation time is usually the variable that moves the final number.',
    },
  ];

  return (
    <section
      className="calgary-section"
      style={{
        backgroundColor: colors.background.primary,
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{
            fontWeight: '700',
            color: colors.text.primary,
            marginBottom: '1.25rem',
            textAlign: 'center',
          }}
        >
          Garage Flooring FAQs
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
          Straight answers to the questions Calgary homeowners ask most often.
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
                    lineHeight: '1.6',
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
