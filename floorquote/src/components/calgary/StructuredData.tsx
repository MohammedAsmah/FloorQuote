export function StructuredData() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://www.floorquoteconnect.com/calgary-garage-flooring',
      url: 'https://www.floorquoteconnect.com/calgary-garage-flooring',
      name: 'Garage Flooring in Calgary: Compare Options & Costs',
      description:
        'Compare Calgary garage flooring options and costs. Understand what drives pricing, estimate your project, and connect with local pros for a quote.',
      inLanguage: 'en-CA',
      about: {
        '@type': 'Thing',
        name: 'Garage Flooring in Calgary',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.floorquoteconnect.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Garage Flooring in Calgary',
          item: 'https://www.floorquoteconnect.com/calgary-garage-flooring',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does garage flooring cost in Calgary?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It varies widely, because pricing depends on square footage, concrete condition, surface preparation, the coating system, the number of coats, and extras like flakes, steps, and moisture work. A realistic next step is an estimate based on your specific garage: our cost calculator uses Calgary market pricing and accounts for these factors, or you can request quotes from local flooring professionals.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best garage floor coating for a Calgary garage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There\u2019s no single best system \u2014 it depends on your budget, how you use the garage, and your concrete\u2019s condition. Epoxy is a proven, budget-friendly choice; polyaspartic cures faster and resists UV yellowing; flake systems add texture and a custom look. Talk to an installer about your situation, and get estimates for more than one option so you can compare.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is epoxy good for garage floors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Epoxy is one of the most popular garage floor systems because it\u2019s durable, chemical-resistant, and relatively affordable. Success depends heavily on surface preparation. Some epoxy formulations can amber or yellow with strong UV exposure, so discuss your situation (like a south-facing garage door) with your installer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is polyaspartic better than epoxy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on what matters to you. Polyaspartic cures much faster, is more flexible, and resists UV yellowing better, but it generally costs more. Epoxy offers strong adhesion and value at a lower price point. Both can serve a garage well with proper preparation \u2014 it\u2019s a trade-off, not a clear winner.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does garage floor coating last?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lifespan depends on the system, surface preparation, and how the floor is used. Epoxy systems commonly last in the 5\u201310 year range, while polyaspartic systems are frequently quoted in the 10\u201315+ year range. Quality preparation and basic maintenance are the biggest factors in reaching those numbers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can garage floor coating be applied to old concrete?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, in most cases. Older concrete can be coated as long as it\u2019s structurally sound, clean, and properly prepared. Cracks and damage get repaired first, and the prep work may add to the cost \u2014 which is exactly why an in-person look beats a phone estimate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does garage floor coating work in cold weather?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Installed coatings handle cold weather fine once cured. Application is the temperature-sensitive part \u2014 most coatings have minimum application and curing temperatures. That\u2019s why installers schedule around the weather, and why heated attached garages are easier to work in during Calgary winters.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost to coat a two-car garage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There\u2019s no reliable one-size-fits-all number. Two-car garages come in different sizes, and cost depends on your concrete\u2019s condition and the system you choose. The most useful step is a personalized estimate: use the calculator for a ballpark based on your garage, then request quotes to compare real numbers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does garage floor coating take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on the system and how much preparation is needed. Fast-cure systems can often be installed within a day or two, while systems with longer cure times take longer. Ask for a clear timeline before you commit \u2014 preparation time is usually the variable.',
          },
        },
        {
          '@type': 'Question',
          name: 'What preparation is needed before coating a garage floor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard preparation includes cleaning and degreasing, mechanical grinding or diamond profiling to create a bondable surface, and repair of cracks or damage. Moisture testing may be recommended for some slabs. Preparation is the most important part of the job \u2014 it\u2019s where adhesion is won or lost.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can garage floor coatings handle road salt and vehicle fluids?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality coatings are designed to resist chemicals and stains, including the salt, sand, and de-icing materials Calgary winters track in, plus common vehicle fluids. No floor is indestructible \u2014 wipe up spills and clean periodically and the coating will last longer.',
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
