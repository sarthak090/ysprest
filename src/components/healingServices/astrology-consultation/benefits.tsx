export const Astrologybenefits = () => {
  const benefits = [
    `Predicts pains & sickness based on the movements of celestial bodies.
        `,
    `Cleanses & detoxifies the energies through crystals & gemstones.
        `,
    `Keeps you cheerful, healthy & content.
        `,
    `Recommends gemstones & crystals to keep negative energy away.
        `,
    `Makes way for good fortune, success & prosperity.
        `,
  ];
  return (
    <div>
      <ul className="flex flex-col items-start justify-center">
        {benefits.map((benefit) => (
          <li className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 37.19 23.418"
            >
              <g id="checkmark" transform="translate(-1.81 24.418)">
                <path
                  id="Path_12792"
                  data-name="Path 12792"
                  d="M18.5-16.9c-6.4,7.3-7,7.8-8.9,6.5-6-3.8-6.6-4-7.6-3-.7.7.5,2.6,4.1,6.3,4.3,4.2,5.5,4.9,6.5,3.9C15.3-6,26.8-24,26.1-24.4,25.7-24.7,22.3-21.3,18.5-16.9Z"
                  fill="#0a2d4d"
                ></path>
                <path
                  id="Path_12793"
                  data-name="Path 12793"
                  d="M31.1-16.5c-5.6,6.6-6.5,7.3-8.3,6.4-1.6-.8-2.3-.8-2.9.2-1.4,2.2-1.1,3.4,1.9,6.2L24.6-1l7.2-10.9c4-6,7.2-11.1,7.2-11.5C39-25.1,36.9-23.3,31.1-16.5Z"
                  fill="#0a2d4d"
                ></path>
              </g>
            </svg>
            <p className="text-left">{benefit}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
