import React from 'react';

export default function WaveBenefits() {
  const benefits = [
    `Open your subconscious mind to the possibilities of fortune and luck

            `,
    `Tune your subconscious mind into identifying favourable events around you

            `,
    `Help you identify and benefit from this Wave of Fortune Lifeline in your current life.

            `,
    `Cleanse your aura and align your chakras to Attract Abundance & Happiness.

            `,
    `Activate past Lifelines filled with happy memories and access skills, strengths & abilities for abundance manifestation.

            `,
    `Help you embody your successful, rich, powerful and prosperous persona.

            `,
    `Attract past life tribes for prosperity through partnerships.
            `,
    `Help you quantum jump into your golden lifetimes.
`,
  ];
  return (
    <>
      {benefits.map((benefit: string) => (
        <div className="flex items-center gap-4 font-semibold ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth={2}
            className="h-8 w-8 flex-shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
          <p className="my-2 text-[18px]">{benefit}</p>
        </div>
      ))}
    </>
  );
}
