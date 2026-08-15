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
            text: 'Yes. Epoxy is one of the most popular garage floor systems because it\u2019s durable, chemical-resistant, and relatively affordable. Success depends heavily on surface preparation, and some epoxies can amber or yellow with strong UV exposure \u2014 so discuss your garage\u2019s sun exposure with your installer.',
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
          name: 'Does garage floor coating work in cold weather?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Installed coatings handle cold weather fine once cured. Application is the temperature-sensitive part \u2014 most coatings have minimum application and curing temperatures. That\u2019s why installers schedule around the weather, and why heated attached garages are easier to work in during Calgary winters.',
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
          name: 'What should I ask a garage flooring contractor in Calgary?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ask what surface preparation is included in the quote, which system and how many coats are used, how moisture issues are handled, what the warranty covers, and how long your garage will be out of commission. Preparation time is usually the variable that moves the final number.',
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
