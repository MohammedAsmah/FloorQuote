import { colors } from '@/lib/design-system';

export function WhyPricesDiffer() {
  return (
    <section className="calgary-section" style={{ backgroundColor: colors.background.primary }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2
          className="calgary-h2"
          style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '1.5rem' }}
        >
          Why Online Garage Flooring Prices Are Different
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary, marginBottom: '1.5rem' }}>
          If you&apos;ve searched for garage flooring prices in Calgary, you&apos;ve
          probably seen different numbers from different sources. That&apos;s
          because one contractor may quote only the coating, while another
          includes grinding, crack repairs, primer, multiple coats, decorative
          flakes, a protective topcoat, warranty, and labour. &quot;$X per
          square foot&quot; does not always mean the same scope of work.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: colors.text.secondary }}>
          This is a major reason FloorQuote focuses on project details rather
          than one generic price. Instead of relying on a national average or a
          single per-square-foot number, enter your actual garage details and
          see an estimate based on the factors that matter for your project.
        </p>
      </div>
    </section>
  );
}
