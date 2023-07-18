import Healers from '@/components/healingServices/Healers';
import StillHaveQuery from '@/components/healingServices/Query';
import { getLayout } from '@/components/layouts/layout';
import { benefits } from '@/seed/reiki-healing';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useCart } from '@/store/quick-cart/cart.context';
import { useRouter } from 'next/router';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
import SmoothScrollLink from '@/components/ui/SmoothScrollLink';

export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/reiki-healing-modality`;
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/lama-fera-healing-modality`;
  const product = await fetch(productUrl).then((r) => r.json());
  const seoData = await fetch(seoURL).then((r) => r.json());
  return {
    props: {
      product,

      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
function ReikiHealing(props: any) {
  const { product } = props;
  const { addItemToCart, isInCart } = useCart();
  const router = useRouter();
  const item = generateCartItem(product, product);
  const buyNowClickHandler = () => {
    if (!isInCart(item.id)) {
      addItemToCart(item, 1);
      router.push('/checkout');
    }
  };
  return (
    <>
      <SeoByRankMath {...props.seoData} />

      <section
        style={{
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Reiki-Healing-Banner-Image.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
        className="hero flex min-h-[600px] items-center justify-start bg-cover bg-center bg-no-repeat py-32 lg:px-32"
      >
        <section className="text-white">
          <h1 className="text-[45px] font-semibold">Distance Reiki Healing</h1>
          <p className="my-5 text-[20px] font-semibold">
            Heal your mind, body & soul with the power of reiki energy!
          </p>
          <div className="grid gap-5 text-[20px]">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Helps cope with emotional difficulties.</p>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Treats chronic pain .</p>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Promotes overall well-being.</p>
            </div>
          </div>
          <div className="my-8 flex gap-4">
            <SmoothScrollLink to="learnmore">
              <button className="rounded-lg bg-[#166AB4] px-12 py-4 text-[18px] font-semibold text-white outline-none">
                Learn More
              </button>
            </SmoothScrollLink>
            <SmoothScrollLink to="buynow">
              <button className="rounded-lg bg-[#34344E] px-12 py-4 text-[18px] font-semibold text-white outline-none">
                Buy Now
              </button>
            </SmoothScrollLink>
          </div>
        </section>
      </section>
      <div className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="post-content"></div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6">
            <img
              width={500}
              height={600}
              src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/1-op.jpg"
            />
          </div>
          <div className="col-span-6">
            <h1 className="text-3xl font-bold">What is Reiki healing?</h1>
            <p className="my-4 text-[18px]">
              Reiki healing is one of the natural and oldest forms of energy
              healing therapy, with its roots drawn through Japan in the late
              1800s. Reiki therapists transfer universal force energy to the
              recipient through the distance healing process. Reiki treatment
              from a distance is equally beneficial as the flow energy works on
              the intentions set and requires no touch.
            </p>
            <p className="my-4 text-[18px]">
              Reiki sessions will work on healing all aspects; physical, mental,
              emotional and spiritual. Reiki distance healing can treat any kind
              of blockages and issues the recipient is going through. Aiming
              towards improving the flow of energy in and around the recipient’s
              body, reiki energy heals imbalances, improves well-being and
              promotes holistic health. In addition, it removes negative energy
              and instills positivity that supports health and wellness with a
              new & positive approach.
            </p>
          </div>
          <p className="col-span-12 my-4 text-[18px]">
            As we all know that the Universe offers a soul with abundant joy,
            happiness & prosperity. But with time the blockages occur & that
            keeps the soul away from receiving and experiencing universal
            offerings. It is these blockages that are cleared through reiki
            healing. Reiki distance healing successfully helps a person to
            overcome past life traumas and loss. Reiki healing brings the
            essence of life and relationships back, healing all the wounds by
            the energy itself.
          </p>
        </div>
        <div id="learnmore">
          <h4 className="text-3xl font-bold text-[#0A2D4D]">
            How can Distance Reiki Healing help you?
          </h4>
          <p className="my-4 text-[18px]">
            Reiki healing is not an alternative to medical treatment but is an
            add-on for the same. Since it involves the transfer of energy for
            the healing, it is acknowledged as one of the most ancient &
            powerful healing modalities. People suffering from chronic pains and
            prolonged sickness can get relief after the successful completion of
            reiki healing treatment. Various physical & emotional imbalances or
            issues concerning any health aspects are cured through reiki healing
            therapy. People suffering from anxiety, depression, stress, fatigue,
            sleep disorders, etc experience quick relief & long-term benefits
            from Reiki healing sessions.
          </p>
          <p className="my-4 text-[18px]">
            Reiki sessions are equally effective as in-person healing because,
            in alternative energy healing and holistic medicine therapies, we
            are working with the physical, emotional and mental aspects of an
            individual by accessing the individual’s energy body. The energy
            body can be accessed easily from anywhere and at any time and does
            not require you to be physically present with the practitioner.
            Reiki therapists can transmit energy and vibration over several
            miles to the seeker.
          </p>
        </div>
      </div>
      <div>
        <p className="bg-[#D0E1F0] py-8 text-center text-[34px] font-semibold 2xl:px-52">
          Distance Reiki Healing Energy healing causes no harm as it is a
          non-contact healing session.
        </p>
      </div>
      <div className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <section className="grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <p className="text-3xl font-semibold text-[#4D677E]">
              Benefits of Distance Reiki Healing
            </p>
            <div className="my-8">
              {benefits.map((benefit) => (
                <div className="my-5 grid gap-2">
                  <div className="flex items-center gap-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-[20px]  font-semibold">
                      {benefit.title}
                    </p>
                  </div>
                  <div className="pl-8 text-[20px]  ">{benefit.content}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-6">
            <img src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/2-op.jpg" />
          </div>
        </section>
        <section className="my-8">
          <h4 className="text-center text-3xl font-semibold text-[#0A2D4D]">
            How will Distance Reiki Healing Session take place?
          </h4>
        </section>
        <section className="lg:px-16">
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="116.979"
                height="120"
                viewBox="0 0 116.979 120"
              >
                <g id="_1" data-name="1" transform="translate(-6.076 -0.926)">
                  <path
                    id="Path_12618"
                    data-name="Path 12618"
                    d="M126.936,85.58l-1.741,3.055a22.484,22.484,0,0,0-30.659,8.443L91.48,95.339a26.011,26.011,0,0,1,35.456-9.759Z"
                    transform="translate(-65.335 -62.162)"
                    fill="#231f20"
                  ></path>
                  <path
                    id="Path_12619"
                    data-name="Path 12619"
                    d="M80.4,14.432a42.6,42.6,0,0,0-60.139-2.094A42.547,42.547,0,1,0,77,75.754c.438-.388.876-.78,1.307-1.183s.853-.813,1.264-1.229A42.552,42.552,0,0,0,80.4,14.432Zm3.461,30.244A34.593,34.593,0,0,1,49.318,78.068q-.613,0-1.234-.021A34.6,34.6,0,1,1,83.862,44.675Z"
                    transform="translate(0 0)"
                    fill="#166ab4"
                  ></path>
                  <path
                    id="Path_12620"
                    data-name="Path 12620"
                    d="M126.936,85.58l-1.741,3.055a22.484,22.484,0,0,0-30.659,8.443L91.48,95.339a26.011,26.011,0,0,1,35.456-9.759Z"
                    transform="translate(-65.335 -62.162)"
                    fill="#fff"
                  ></path>
                  <path
                    id="Path_12621"
                    data-name="Path 12621"
                    d="M363.189,357.83l-28.935-29.91L322.74,338.666l28.939,29.926a7.825,7.825,0,0,0,5.475,2.486h.28a7.879,7.879,0,0,0,5.755-13.251Z"
                    transform="translate(-242.25 -250.153)"
                    fill="#0a2d4d"
                  ></path>
                  <line
                    id="Line_324"
                    data-name="Line 324"
                    x1="10.37"
                    y1="11.117"
                    transform="translate(77.106 73.283)"
                    fill="none"
                  ></line>
                  <rect
                    id="Rectangle_2194"
                    data-name="Rectangle 2194"
                    width="3.525"
                    height="15.202"
                    transform="matrix(0.731, -0.682, 0.682, 0.731, 75.817, 74.479)"
                    fill="#0a2d4d"
                  ></rect>
                  <path
                    id="Path_12622"
                    data-name="Path 12622"
                    d="M126.936,85.58l-1.741,3.055a22.484,22.484,0,0,0-30.659,8.443L91.48,95.339a26.011,26.011,0,0,1,35.456-9.759Z"
                    transform="translate(-65.335 -62.162)"
                    fill="#0a2d4d"
                  ></path>
                </g>
              </svg>
              <p className="my-2 text-center text-[20px] font-semibold text-[#0A2D4D]">
                Identifying Energy Blockages
              </p>
              <p className="text-center">
                Once you sign up for the healing session, you will be connected
                to one of our reiki therapists via Email. The reiki therapist
                will identify your energy imbalances, blockages, traumas,
                wishes, and any other aspect affecting your health & wellbeing.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93.517"
                height="120"
                viewBox="0 0 93.517 120"
              >
                <g
                  id="clear_negative_energy"
                  data-name="clear negative energy"
                  transform="translate(-56.479 512)"
                >
                  <path
                    id="Path_12625"
                    data-name="Path 12625"
                    d="M101.837-511.531c-.445.445-.469.774-.469,7.712v7.22l-2.508.281c-15.352,1.711-28.032,10.994-35.556,25.974A63.4,63.4,0,0,0,56.906-450a80.194,80.194,0,0,0,.117,17.581,52.57,52.57,0,0,0,5.2,16.644,38.934,38.934,0,0,0,7.5,10.736A40.369,40.369,0,0,0,91.618-393.29a52.848,52.848,0,0,0,17.25.961,52.953,52.953,0,0,0,14.25-3.423c14.227-5.814,24.047-19.644,26.579-37.366a95.743,95.743,0,0,0,0-15.12,72.356,72.356,0,0,0-4.2-16.878c-2.133-5.439-6.235-12.565-7.547-13.128a1.821,1.821,0,0,0-2.6,1.641,8.286,8.286,0,0,0,1.289,2.579c8.485,12.823,11.836,31.365,8.3,45.829-2.227,9-7.031,17.23-13.243,22.668-6.164,5.392-13.055,8.2-23.063,9.447a49.241,49.241,0,0,1-16.055-.844c-11.11-2.25-19.407-8.064-25.594-17.91a57.836,57.836,0,0,1-4.383-9.541c-4.149-12.495-3.024-28.435,2.906-41.773,6.844-15.331,19.383-25.036,34.29-26.513l1.57-.164v3.633c0,3.305.047,3.68.492,4.243a1.756,1.756,0,0,0,2.672.023c.563-.563.586-.656.586-4.22,0-3.305.047-3.634.422-3.634a56.335,56.335,0,0,1,7.055,1.172,41.071,41.071,0,0,1,16.664,9c2.016,1.922,2.742,2.157,3.844,1.289a2.011,2.011,0,0,0-.141-3.094,43.638,43.638,0,0,0-26.251-12.026l-1.594-.141v-7.033c0-8.228-.023-8.392-1.922-8.392A1.873,1.873,0,0,0,101.837-511.531Z"
                    fill="#0a2d4d"
                  ></path>
                  <path
                    id="Path_12626"
                    data-name="Path 12626"
                    d="M150.929-339.7a30.458,30.458,0,0,0-18.774,8.977,33.564,33.564,0,0,0-9.281,17.485,43.1,43.1,0,0,0,.023,12.4c1.359,7.242,4.125,12.938,8.485,17.461a29.012,29.012,0,0,0,14.625,8.508c2.555.68,2.953.7,7.383.727,5.039.023,6.844-.211,10.407-1.406a30.114,30.114,0,0,0,17.461-15.211,35.871,35.871,0,0,0,2.109-26.977c-3.375-10.242-12.047-18.563-21.961-21.071A32.122,32.122,0,0,0,150.929-339.7Zm9.141,4.594c7.477,1.945,12.961,5.906,16.782,12.235a32.613,32.613,0,0,1,4.336,13.243A29.618,29.618,0,0,1,165.3-280.21a26.42,26.42,0,0,1-21.891.609,30.526,30.526,0,0,1-11.391-9.117,32.328,32.328,0,0,1-5.367-12,37.6,37.6,0,0,1,.094-12.117c2.7-12.563,11.18-20.907,23.133-22.805A33.971,33.971,0,0,1,160.07-335.1Z"
                    transform="translate(-50.499 -131.807)"
                    fill="#0a2d4d"
                  ></path>
                  <path
                    id="Path_12627"
                    data-name="Path 12627"
                    d="M189.971-273.442c-3.4.609-7.524,2.555-7.946,3.774a1.9,1.9,0,0,0,1.734,2.531,13.815,13.815,0,0,0,2.391-1.055,14.729,14.729,0,0,1,11.766-.914,17.158,17.158,0,0,1,8.883,7.149,13.094,13.094,0,0,1,1.8,7.477,12.6,12.6,0,0,1-.656,4.852,16.175,16.175,0,0,1-10.008,9.961,19.422,19.422,0,0,1-8.3.328,15.973,15.973,0,0,1-11.86-15.258,15.162,15.162,0,0,1,1.641-6.891c.82-1.547.867-2.086.211-2.93a1.891,1.891,0,0,0-2.742-.094,16.909,16.909,0,0,0-2.414,5.555,14.4,14.4,0,0,0-.4,5.039,14.3,14.3,0,0,0,.867,5.3,19.792,19.792,0,0,0,4.711,7.735,17.53,17.53,0,0,0,13.149,5.625c8.321,0,15.047-4.242,18.024-11.391a18.734,18.734,0,0,0,1.453-7.828c.023-9.117-5.367-16.219-14.016-18.516A25.716,25.716,0,0,0,189.971-273.442Z"
                    transform="translate(-90.01 -182.504)"
                    fill="#166ab4"
                  ></path>
                  <path
                    id="Path_12628"
                    data-name="Path 12628"
                    d="M228.406-235.441a8.311,8.311,0,0,0-5.414,4.43,7.15,7.15,0,0,0-.492,3.422c0,2.086.07,2.484.656,3.68a7.661,7.661,0,0,0,5.859,4.2,5.748,5.748,0,0,0,3.141-.117,7.834,7.834,0,0,0,5.484-4.359c.492-.914.563-1.383.563-3.4,0-2.227-.047-2.414-.8-3.82a7.688,7.688,0,0,0-6.539-4.149A11.032,11.032,0,0,0,228.406-235.441Zm4.336,4.336a4.321,4.321,0,0,1-.445,7.266,4.239,4.239,0,0,1-6.164-3.68,4.758,4.758,0,0,1,1.336-3.281A4.39,4.39,0,0,1,232.742-231.105Z"
                    transform="translate(-127.109 -211.623)"
                    fill="#166ab4"
                  ></path>
                </g>
              </svg>
              <p className="my-4 mt-8 text-center text-[20px] font-semibold text-[#0A2D4D]">
                Reiki Energy Transfer
              </p>
              <p className="text-center">
                Reiki healers will then transfer the energy in your body through
                distance healing and remove all the blockages. Our reiki healing
                therapists use various reiki therapies to give you desired
                results like Angel Reiki, Crystal Reiki, Usui Reiki, Karuna
                Reiki and Intent Reiki.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="124.138"
                height="110"
                viewBox="0 0 124.138 120"
              >
                <g id="customer-care" transform="translate(-1 -1.5)">
                  <path
                    id="Path_12742"
                    data-name="Path 12742"
                    d="M74.949,70.621a1.521,1.521,0,0,0-.414-1.242v-.828c0-.414-.414-.828-.414-1.242V66.9c-.414-.414-.414-.828-.828-1.656a16.171,16.171,0,0,0-7.037-5.795L55.908,56.134c1.656-.414,3.311-.414,4.967-.828l.828-.414a6.592,6.592,0,0,0,4.967-6.209V34.2a20.7,20.7,0,0,0-41.392,0V49.511a6.592,6.592,0,0,0,4.967,6.209l.828.414c1.656.414,3.311.414,4.967.828L25.692,60.273a12.042,12.042,0,0,0-7.037,5.795c-.414.414-.414.828-.828,1.656,0,.414-.414.828-.414,1.242v.828A1.521,1.521,0,0,1,17,71.035V81.8a1.955,1.955,0,0,0,2.07,2.07H72.879a1.955,1.955,0,0,0,2.07-2.07V70.621ZM41.835,32.54A7.354,7.354,0,0,0,45.974,34.2h8.278v4.139a4.451,4.451,0,0,1-4.139,4.139h-2.07a2.07,2.07,0,0,0,0,4.139h2.07a7.8,7.8,0,0,0,3.311-.828,8.177,8.177,0,0,1-7.451,4.967A8.3,8.3,0,0,1,37.7,42.474V34.2A5.314,5.314,0,0,0,41.835,32.54ZM40.593,56.962V53.65a12.28,12.28,0,0,0,10.762,0v3.311c0,1.656-2.9,4.139-5.381,5.381C43.491,60.687,40.593,58.617,40.593,56.962Zm20.282-5.381-.828.414c-1.242.414-2.9.414-4.139.828v-2.07a13.068,13.068,0,0,0,2.9-7.864V35.024a5.845,5.845,0,0,1,4.139,5.795v9.106C62.531,50.339,61.7,51.581,60.875,51.581Zm-29.8,0a2.75,2.75,0,0,1-1.656-2.07V34.2A16.605,16.605,0,0,1,45.974,17.639c8.278,0,15.315,6.209,16.143,14.073a9.89,9.89,0,0,0-5.795-2.07H45.974a1.955,1.955,0,0,1-2.07-2.07,2.07,2.07,0,1,0-4.139,0,1.955,1.955,0,0,1-2.07,2.07h-2.07a1.955,1.955,0,0,0-2.07,2.07V42.06a13.068,13.068,0,0,0,2.9,7.864v2.9c-1.656-.414-2.9-.414-4.139-.828l-1.242-.414ZM26.934,64l10.348-3.311c2.07,3.311,7.037,5.381,7.451,5.795h1.656c.828-.414,5.381-2.484,7.451-5.795L64.187,64a6.671,6.671,0,0,1,2.9,1.656c-5.795,2.07-9.52,7.451-9.52,14.073H33.557a15.468,15.468,0,0,0-9.52-14.073A23.741,23.741,0,0,1,26.934,64Zm-5.795,8.278a5.25,5.25,0,0,1,.414-2.484v-.828a11.054,11.054,0,0,1,8.278,10.348H21.139V72.277Zm49.67,7.451H62.117V78.071a11.236,11.236,0,0,1,7.864-8.692c0,.414,0,.414.414.828,0,.828.414,1.656.414,2.484v7.037Z"
                    transform="translate(50.189 37.634)"
                    fill="#166ab4"
                  ></path>
                  <path
                    id="Path_12743"
                    data-name="Path 12743"
                    d="M23.209,42.892H47.216l12,7.864a1.521,1.521,0,0,0,1.242.414c.414,0,.828,0,.828-.414A2.218,2.218,0,0,0,62.531,49.1V42.892H64.6a6.366,6.366,0,0,0,6.209-6.209V7.709A6.366,6.366,0,0,0,64.6,1.5H23.209A6.366,6.366,0,0,0,17,7.709V36.683a6.366,6.366,0,0,0,6.209,6.209ZM21.139,7.709a1.955,1.955,0,0,1,2.07-2.07H64.6a1.955,1.955,0,0,1,2.07,2.07V36.683a1.955,1.955,0,0,1-2.07,2.07H60.462a1.955,1.955,0,0,0-2.07,2.07v4.553l-9.106-6.209a1.521,1.521,0,0,0-1.242-.414H23.209a1.955,1.955,0,0,1-2.07-2.07Z"
                    transform="translate(50.189 0)"
                    fill="#0a2d4d"
                  ></path>
                  <path
                    id="Path_12744"
                    data-name="Path 12744"
                    d="M8.209,33.474h2.07v6.209c0,.828.414,1.656,1.242,1.656a1.445,1.445,0,0,1,.828.414,1.521,1.521,0,0,0,1.242-.414l12-7.864H45.462a6.366,6.366,0,0,0,6.209-6.209V10.709A6.366,6.366,0,0,0,45.462,4.5H8.209A6.366,6.366,0,0,0,2,10.709V27.266A6.366,6.366,0,0,0,8.209,33.474ZM6.139,10.709a1.955,1.955,0,0,1,2.07-2.07H45.462a1.955,1.955,0,0,1,2.07,2.07V27.266a1.955,1.955,0,0,1-2.07,2.07h-20.7a1.521,1.521,0,0,0-1.242.414l-9.106,6.209V31.4a1.955,1.955,0,0,0-2.07-2.07H8.209a1.955,1.955,0,0,1-2.07-2.07Z"
                    transform="translate(3.139 9.418)"
                    fill="#166ab4"
                  ></path>
                  <path
                    id="Path_12745"
                    data-name="Path 12745"
                    d="M58.949,70.387a1.521,1.521,0,0,0-.414-1.242v-.414c0-.414-.414-.828-.414-1.242a12.194,12.194,0,0,0-7.864-7.037L39.494,57.142V52.588a16.457,16.457,0,0,0,7.037-13.245V36.859l2.484-7.451A6.928,6.928,0,0,0,47.359,23.2a7.445,7.445,0,0,0-3.725-2.484,7.677,7.677,0,0,0-2.9-4.967A8.921,8.921,0,0,0,33.7,13.68L17.971,15.336a7.61,7.61,0,0,0-5.795,3.311c-1.242,2.07-2.07,4.139-1.242,6.623l2.484,10.348V38.1a16.457,16.457,0,0,0,7.037,13.245V55.9L9.692,59.211a12.042,12.042,0,0,0-7.037,5.795c-.414.414-.414.828-.828,1.656v.414c0,.414-.414.828-.414,1.242v.828A1.521,1.521,0,0,1,1,70.387V81.563a1.955,1.955,0,0,0,2.07,2.07h53.81a1.955,1.955,0,0,0,2.07-2.07V70.387ZM15.487,21.131a9.013,9.013,0,0,1,3.311-2.07l15.729-2.484a4.222,4.222,0,0,1,3.725.828,5.247,5.247,0,0,1,1.656,3.725,1.955,1.955,0,0,0,2.07,2.07,2.95,2.95,0,0,1,2.484,1.242,3.041,3.041,0,0,1,.828,2.484l-1.656,4.553L40.736,29A6.993,6.993,0,0,0,36.6,27.753H23.352A6.993,6.993,0,0,0,19.212,29l-2.484,2.07-1.656-7.037a3.635,3.635,0,0,1,.414-2.9Zm2.07,17.385V36.032L21.7,32.306c.414,0,.828-.414,1.656-.414H37.011a1.521,1.521,0,0,1,1.242.414l4.139,3.725v2.484A12.2,12.2,0,0,1,29.974,50.933,12.453,12.453,0,0,1,17.557,38.515ZM29.974,55.072a20.971,20.971,0,0,0,5.381-.828v2.484a3.138,3.138,0,0,1-.828,1.656,6.647,6.647,0,0,1-4.553,2.07,5.93,5.93,0,0,1-4.553-2.07,3.138,3.138,0,0,1-.828-1.656v-2.9a11.458,11.458,0,0,0,5.381,1.242Zm-19.04,8.692L21.7,60.453a.405.405,0,0,0,.414.414,10.194,10.194,0,0,0,7.864,3.725c3.311,0,6.209-1.242,7.864-3.725l.414-.414L48.6,63.764a6.671,6.671,0,0,1,2.9,1.656c-5.795,2.07-9.52,7.451-9.52,14.073H17.971A15.468,15.468,0,0,0,8.451,65.42,8.659,8.659,0,0,1,10.934,63.764ZM5.139,72.043a5.25,5.25,0,0,1,.414-2.484v-.828a11.054,11.054,0,0,1,8.278,10.348H5.139Zm49.67,7.451H46.117A10.6,10.6,0,0,1,54.4,69.145c0,.414,0,.414.414.828a17.927,17.927,0,0,0,.414,2.07v7.451Z"
                    transform="translate(0 37.868)"
                    fill="#0a2d4d"
                  ></path>
                  <path
                    id="Path_12746"
                    data-name="Path 12746"
                    d="M6.07,12.639h20.7a1.955,1.955,0,0,0,2.07-2.07,1.955,1.955,0,0,0-2.07-2.07H6.07A1.955,1.955,0,0,0,4,10.57,1.955,1.955,0,0,0,6.07,12.639Z"
                    transform="translate(9.418 21.965)"
                    fill="#0a2d4d"
                  ></path>
                  <path
                    id="Path_12747"
                    data-name="Path 12747"
                    d="M6.07,10.639H35.044a1.955,1.955,0,0,0,2.07-2.07,1.955,1.955,0,0,0-2.07-2.07H6.07A1.955,1.955,0,0,0,4,8.57,1.955,1.955,0,0,0,6.07,10.639Z"
                    transform="translate(9.418 15.689)"
                    fill="#0a2d4d"
                  ></path>
                  <path
                    id="Path_12748"
                    data-name="Path 12748"
                    d="M24.07,11.778a1.955,1.955,0,0,0,2.07-2.07,2.07,2.07,0,0,1,4.139,0c0,.828-.414,1.656-1.242,1.656a7.075,7.075,0,0,0-2.9,5.381v1.242a2.07,2.07,0,0,0,4.139,0V16.745a2.15,2.15,0,0,1,.828-1.656,5.546,5.546,0,0,0,3.311-5.381A6.366,6.366,0,0,0,28.209,3.5,6.366,6.366,0,0,0,22,9.709,1.955,1.955,0,0,0,24.07,11.778Z"
                    transform="translate(65.894 6.278)"
                    fill="#166ab4"
                  ></path>
                  <ellipse
                    id="Ellipse_1322"
                    data-name="Ellipse 1322"
                    cx="2"
                    cy="2.5"
                    rx="2"
                    ry="2.5"
                    transform="translate(92.971 29.491)"
                    fill="#2b2e81"
                  ></ellipse>
                </g>
              </svg>
              <p className="my-4 mt-2 text-center text-[20px] font-semibold text-[#0A2D4D]">
                Reiki Healing Attainment
              </p>
              <p className="text-center">
                You will be informed once the reiki energy healing session is
                completed. Our reiki therapist will be in touch with you
                throughout and will solve any queries you may have.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="my-8" id="buynow">
        <div className="py-6 text-center text-[25px] font-semibold">
          <p className="text-[#0A2D4D]">Embrace your life with the</p>
          <p className="text-[#3980BF]">
            spiritually guided energy of Reiki Healing.
          </p>
        </div>
        <div className="grid px-32 lg:grid-cols-12">
          <div className="col-span-6 flex justify-center">
            <img
              src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/3-op.jpg"
              className="rounded-lg"
              width={500}
            />
          </div>
          <div className="col-span-6">
            <p className="mb-6 text-[25px] font-semibold">
              Distance Reiki Healing
            </p>
            <p className="my-4 text-[20px]">
              Heal your mind, body, and soul by channeling the right energy.
            </p>
            <p className="my-4 text-[18px]">
              Powerful Healing for 7 days (7 Sessions)
            </p>
            <p className="my-4 text-[18px]">
              Price: ₹5,999 (Incl. GST) / US $99
            </p>

            <button
              onClick={buyNowClickHandler}
              className="my-4 w-2/3 rounded-full bg-[#166AB4] py-4 text-[20px] text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <section className="my-6 lg:px-52">
          <Healers />
        </section>
        <StillHaveQuery />
      </div>
    </>
  );
}

ReikiHealing.getLayout = getLayout;
export default ReikiHealing;
