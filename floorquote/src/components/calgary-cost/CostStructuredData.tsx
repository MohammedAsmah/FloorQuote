export function CostStructuredData() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://www.floorquoteconnect.com/calgary-garage-flooring-cost',
      url: 'https://www.floorquoteconnect.com/calgary-garage-flooring-cost',
      name: 'Garage Flooring Cost Calgary | FloorQuote',
      description:
        'How much does garage flooring cost in Calgary? See what affects epoxy, polyaspartic and garage floor coating prices, then get a Calgary-focused estimate.',
      inLanguage: 'en-CA',
      about: {
        '@type': 'Thing',
        name: 'Garage Flooring Cost in Calgary',
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
          name: 'Garage Flooring Cost Calgary',
          item: 'https://www.floorquoteconnect.com/calgary-garage-flooring-cost',
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
            text: 'It depends on garage size, coating system, concrete condition, preparation, and finish. There is no single Calgary price that applies to every garage. FloorQuote uses project-specific details to generate an estimate range based on Calgary market pricing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost to epoxy a garage floor in Calgary?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Epoxy base rates typically start lower than polyaspartic or polyurea systems, but the total depends on your garage size, floor condition, and decorative finish. FloorQuote estimates epoxy projects in the $3\u20138 per square foot range before adjustments for condition and finish.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is polyaspartic more expensive than epoxy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally yes \u2014 polyaspartic carries a higher base cost, typically $6\u201310 per square foot in the FloorQuote model. It cures faster, resists UV yellowing better, and handles moisture well, which is why many Calgary garages use it.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes garage floor coating more expensive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Poor concrete condition, major cracks, old coating removal, moisture issues, decorative finishes, and stem walls or steps all increase the estimate. These factors often combine.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does garage size affect the total price?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A larger garage uses more material, more labour, and more preparation time. FloorQuote lets you enter your exact square footage so the total reflects your actual garage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does concrete condition affect garage flooring cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A floor in excellent condition needs minimal preparation, while a floor in poor condition can add 30% or more to the per-square-foot estimate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get an estimate before contacting a contractor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes \u2014 that is exactly what FloorQuote is for. Enter your project details into the calculator and see an estimate range based on Calgary market pricing, with no obligation and no phone call required.',
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
