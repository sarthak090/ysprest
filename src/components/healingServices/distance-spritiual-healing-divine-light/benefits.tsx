export default function DistanceSpritiualBenefits() {
  const benefits = [
    `Suffering from physical, emotional or mental imbalances
        `,
    `Diluted with negative energies
        `,
    `Affected by past life karmic wounds
        `,
    `Stressed, anxious, insecure about life’s uncertainties
        `,
    `Lack of focus, concentration & confidence
        `,
    `Unclear approach towards life
        `,
  ];
  return (
    <>
      {benefits.map((benefit: string) => (
        <div className="my-8 flex items-center gap-4 font-semibold ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="flower_1_"
            data-name="flower (1)"
            width="42.029"
            height="30"
            viewBox="0 0 42.029 30"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                y1="0.426"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#166ab4"></stop>
                <stop offset="1" stop-color="#0b355a"></stop>
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="0.5"
                y1="0.354"
                xlinkHref="#linear-gradient"
              ></linearGradient>
            </defs>
            <path
              id="Path_12784"
              data-name="Path 12784"
              d="M41.989,18.128a.641.641,0,0,0-.586-.586c-.305-.026-7.194-.5-12.829,2.706-1.719-6.2-6.889-10.709-7.15-10.938a.635.635,0,0,0-.827,0c-.261.229-5.431,4.737-7.15,10.938C7.818,17.047.923,17.518.624,17.543a.636.636,0,0,0-.586.586c-.032.414-.7,10.193,5.049,15.936,4.584,4.6,11.746,5.093,14.656,5.093.548,0,.942-.013,1.139-.026a.865.865,0,0,0,.127.019.853.853,0,0,0,.127-.019c.2.012.592.026,1.139.026,2.91,0,10.066-.5,14.656-5.093C42.683,28.322,42.022,18.543,41.989,18.128Zm-36,15.039c-4.578-4.578-4.75-12.243-4.7-14.376,1.776-.045,7.392.07,11.862,2.763a14.069,14.069,0,0,0-.255,2.6c0,6.252,4.368,11.5,6.532,13.72C16.515,37.827,10.048,37.229,5.985,33.167Zm15.025,4.482c-1.541-1.471-6.844-7.01-6.844-13.491s5.3-12.021,6.844-13.5c1.541,1.477,6.845,7.01,6.845,13.5S22.552,36.178,21.011,37.649ZM36.03,33.167c-4.049,4.056-10.518,4.654-13.427,4.711,2.159-2.222,6.526-7.469,6.526-13.72a13.958,13.958,0,0,0-.255-2.6c4.47-2.687,10.1-2.808,11.868-2.763C40.793,20.924,40.621,28.583,36.03,33.167Z"
              transform="translate(0.001 -9.158)"
              fill="#fff"
            ></path>
            <path
              id="Path_12785"
              data-name="Path 12785"
              d="M35.264,24.943c0,6.475-5.3,12.02-6.846,13.491-1.541-1.471-6.845-7.009-6.845-13.491s5.3-12.021,6.845-13.5C29.96,12.923,35.264,18.456,35.264,24.943Z"
              transform="translate(-7.407 -9.943)"
              fill="url(#linear-gradient)"
            ></path>
            <path
              id="Path_12786"
              data-name="Path 12786"
              d="M36.7,38.2c-4.049,4.057-10.518,4.655-13.427,4.712,2.159-2.223,6.526-7.47,6.526-13.723a13.963,13.963,0,0,0-.255-2.6c4.47-2.688,10.1-2.809,11.868-2.764C41.462,25.957,41.29,33.618,36.7,38.2Zm-16.6,4.712c-2.91-.051-9.377-.65-13.44-4.712-4.578-4.579-4.75-12.246-4.7-14.379,1.776-.045,7.392.07,11.862,2.764a14.074,14.074,0,0,0-.255,2.6C13.563,35.445,17.93,40.7,20.095,42.915Z"
              transform="translate(-0.668 -14.194)"
              fill="url(#linear-gradient-2)"
            ></path>
          </svg>
          <p className="text-[18px]">{benefit}</p>
        </div>
      ))}
    </>
  );
}
