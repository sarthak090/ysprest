import PricingBanner from '@/components/healingServices/PricingBanner';
import Processes from '@/components/healingServices/Processes';
import StillHaveQuery from '@/components/healingServices/Query';
import Testimonials from '@/components/healingServices/Testimonials';
import { getLayout } from '@/components/layouts/layout';
import Accordion from '@/components/ui/accordion';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useCart } from '@/store/quick-cart/cart.context';
import { useRouter } from 'next/router';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
import SmoothScrollLink from '@/components/ui/SmoothScrollLink';
import CartCounterButton from '@/components/cart/cart-counter-button';
export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/aura-and-chakra-healing/`;
  const product = await fetch(productUrl).then((r) => r.json());

  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/aura-chakra-healing`;
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
function AuraChakraHealing(props: any) {
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
    <section className="bg-white">
      <SeoByRankMath {...props.seoData} />
      <section
        style={{
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Aura-Chakra-Healing-Banner-e1643612358681.jpg")`,
        }}
        className="  bg-cover !bg-right-top  !bg-no-repeat py-20  px-2 pb-0   lg:min-h-[400px]"
      >
        <section className=" flex justify-start lg:py-40 lg:px-32">
          <section className="  text-white opacity-100">
            <h1 className="text-center font-sans text-3xl font-semibold lg:text-left lg:text-[34px] ">
              DISTANCE AURA & CHAKRA HEALING
            </h1>
            <p className="my-3 text-center text-xl lg:text-left lg:text-[24px]">
              Heal your physical, mental, emotional & spiritual distress with{' '}
              <br />
              Aura & Chakra Healing.
            </p>
            <div className=" my-8 flex gap-8 ">
              <SmoothScrollLink to="learnmore">
                <button
                  style={{
                    backgroundColor: '#166AB4',
                    borderRadius: '30px 30px 30px 30px',
                    boxShadow:
                      '0px 4px 10px 0px rgba(0, 0, 0, 0.2784313725490196)',
                    padding: '15px 45px 12px 45px',
                    fontWeight: '400',
                    fontSize: '18px',
                  }}
                  className="text-white"
                >
                  Learn More
                </button>
              </SmoothScrollLink>
              <SmoothScrollLink to="buynow">
                <button
                  style={{
                    backgroundColor: '#0A2D4D',
                    borderRadius: '30px 30px 30px 30px',
                    boxShadow:
                      '0px 4px 10px 0px rgba(0, 0, 0, 0.2784313725490196)',
                    padding: '15px 45px 12px 45px',
                    fontWeight: '400',
                    fontSize: '18px',
                  }}
                  className="text-white"
                >
                  Buy Now
                </button>
              </SmoothScrollLink>
            </div>
          </section>
        </section>
      </section>
      <CartCounterButton />

      <section className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <img
              height={500}
              width={500}
              src="https://yourspiritualrevolution.org/wp-content/uploads/2021/09/aura-vector.png"
            />
          </div>
          <div className=" flex flex-col justify-center  gap-4 text-[18px]">
            <p className="text-[34px] font-semibold text-darkBlue">
              What is an Aura?
            </p>
            <p>
              Aura is composed of vibrational frequencies and the energy field
              that surrounds our body. Constant feelings of sickness, low
              energy, negativity, stress, anxiety and fatigue, pale face, and
              lack of concentration are consequences of a negative aura.
            </p>
            <p>
              Aura Healing takes care of the negative energy that keeps a soul
              away from charming better opportunities, accomplishment & overall
              wellbeing. An aura can immediately get affected by the exchange of
              energies with other auras around. And to avoid such dilutions of
              auras, it is of utmost importance to cleanse the auric field from
              time to time.
            </p>
            <p>
              Aura healing nurtures the positive energy present inside the body
              and focuses on uplifting the vibrations to make a soul happy,
              cheerful, and optimistic.
            </p>
          </div>
        </div>
        <div className="my-6 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-4 text-[18px]">
            <p className="  text-[28px] font-semibold text-darkBlue">
              What is Chakra Healing?
            </p>
            <p>
              In Sanskrit, “chakra” means ‘disk’ or ‘wheel,’ which refers to the
              energy centers in the body along the spine. The 7 major chakras
              that significantly channel the healing energy are Crown Chakra,
              Third Eye Chakra, Throat Chakra, Heart Chakra, Solar Plexus
              Chakra, Sacral Chakra, and Root Chakra. These Chakras often treat
              and restore the energy present inside the body.
            </p>
            <p>
              Blockage or imbalance of any chakra can lead to acute or minute
              physical, emotional, or spiritual sickness related to the
              particular blocked chakra. Symptoms related to chakra blockage can
              reveal the imbalance and express the urgency of chakra healing.
            </p>
            <p>
              Therefore, it is essential to keep all the seven chakras balanced
              to attract positive energy, restore vibration that keeps the
              spirit high and invite abundance & prosperity in all aspects.
            </p>
          </div>
          <div>
            <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/chakraa-1.jpg" />
          </div>
        </div>
      </section>

      <div
        id="learnmore"
        className="mx-auto w-full max-w-1920 bg-[#F3F3F3]   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52"
      >
        <section className="grid md:grid-cols-12">
          <section className="flex flex-col justify-center md:col-span-8">
            <h4 className="text-2xl font-bold text-blue-900 lg:text-[32px]">
              Are you suffering from following problems?
            </h4>
            <ul className="my-8 grid list-disc gap-6 pl-12 text-[24px] ">
              <li>Constantly Stressed or Anxious</li>
              <li>Invaded by Negativity</li>
              <li>Chronic Pains & Prolonged Sickness</li>
              <li>Emotional Imbalance</li>
            </ul>
          </section>
          <section className="col-span-4 flex flex-col justify-center">
            <img
              src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Untitled-1-removebg-preview.png"
              alt="distance-auro-chakra-healing"
            />
          </section>
        </section>
        <div className="grid gap-8 text-[20px] ">
          <p>
            Feeling of stress, anxiousness, irritability, lethargy, and negative
            thoughts are mainly caused due to the auras & personalities we
            interact or come in contact with. If you keep feeling sick and
            emotionally unstable constantly for a longer period of time, it is a
            sign that your mind, body & soul needs aura cleansing and balancing
            of chakra. Aura cleansing gives relief from stress and combats
            physical pain. Blocked chakras & diluted aura develop sickness &
            imbalances in your body. It impacts all the aspects of health in a
            highly negative way.
          </p>
          <p>
            Chakra balancing results as an effective solution to heal your mind,
            body, and spirit physically, mentally, emotionally, and spiritually.
            Successful completion of aura cleansing & chakra balancing will make
            you healthy inside out. It radiates beauty, fitness & a personality
            that acts as a magnet for prosperity & abundance.
          </p>
        </div>
      </div>
      <section className="px-2 md:my-16 2xl:px-52">
        <p className="text-center text-2xl font-semibold text-darkBlue lg:text-[38px]">
          Benefits of Distance Aura & Chakra Healing
        </p>
        <p className="my-6 text-center text-[19px]">
          Your Spiritual Revolution offers a combined package of Aura & Chakra
          cleansing that aims to eliminate all the blockages from your aura &
          chakra. It is designed as a well-balanced holistic method that will
          serve you innumerable benefits like.
        </p>
        <div className="grid gap-5 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/benifits-of-aura-chakra.jpg" />
          </div>
          <div className="flex flex-col justify-center gap-8 md:col-span-8">
            {benefits.map((benefit) => (
              <div className=" flex items-center gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-6 w-6"
                  viewBox="0 0 109 109"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.9"
                      y1="0.131"
                      x2="0.212"
                      y2="0.921"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#166ab4"></stop>
                      <stop offset="1" stop-color="#0a2d4d"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    id="checked"
                    d="M80.154,92.146l-7.629,7.629L97.05,124.3l54.5-54.5-7.63-7.629-46.871,46.6-16.9-16.621ZM146.1,102.5a43.414,43.414,0,1,1-31.609-41.965l8.446-8.448A50.7,50.7,0,0,0,102.5,48,54.5,54.5,0,1,0,157,102.5Z"
                    transform="translate(-48 -48)"
                    fill="url(#linear-gradient)"
                  ></path>
                </svg>
                <div className="text-[22px]">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto   w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="text-center text-xl font-semibold text-darkBlue lg:text-[30px] ">
          How will Distance Aura Chakra Healing take place?
        </div>
        <div className="my-8 grid gap-6 md:grid-cols-3">
          <Processes processes={processes} />
        </div>

        <div className="flex justify-center">
          <img
            src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/Before-after.jpg"
            width={500}
            height={500}
          />
        </div>
        <div className="grid justify-center gap-8">
          <Testimonials />
        </div>
      </div>

      <section className="my-8">
        <div className="my-6 py-6 text-center text-[25px] font-semibold">
          <p className="text-[34px]">
            Reset, Revive, and Re-Energize your soul with Aura & Chakra Healing
          </p>
        </div>
        <PricingBanner onClick={buyNowClickHandler} {...pricingData} />
      </section>
      <section className="2xl:px-52">
        <p className="text-center text-[24px] font-semibold text-[#616AB4]">
          Frequently Asked Questions
        </p>
        <div className="py-4">
          <div className="grid gap-4 md:grid-cols-1">
            <Accordion items={faqs} translatorNS="en" />
          </div>
        </div>
      </section>
      <div className="bg-white">
        <StillHaveQuery />
      </div>

      <section
        style={{
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Aura-Chakra-Healing-Banner-e1643612358681.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100%',
        }}
        className="  flex   min-h-[300px] items-center justify-center  bg-no-repeat  pb-0"
      >
        <div className="grid gap-8">
          <p className="text-[30px] font-semibold    text-white">
            Cleanse, detoxify and embrace your inner self by radiating positive
            energy.
          </p>
          <div className="flex justify-center">
            <button
              onClick={buyNowClickHandler}
              className="rounded-lg bg-white px-10 py-4 text-[18px] font-semibold text-darkBlue shadow-downfall"
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
const benefits = [
  `Stress & Anxiety Relief
  `,
  `Relief from Physical & Mental Pain
  `,
  `Improve Immunity
  `,
  `Induce Positive Energy
  `,
  `Rejuvenate your Mind, Body & Soul
  `,
  `Increases Concentration and Enhance Memory
  `,
  `Boost your Power of Healing
  `,
  `Maintains Emotional Balance
  `,
];
const processes = [
  {
    title: `Identify aura & chakra energy blockages
    `,
    content: `Our Healers & Practitioners will examine your Auras & Chakras, blocked and negative energies & how they are impacting your wellbeing.

  `,
  },
  {
    title: `Aura cleansing & chakra
    balancing
    
    `,
    content: `The practitioners, with their expertise, will then clear all the negative energy impacting your Aura & balance your Chakras to induce positivity and attract abundance.


  `,
  },
  {
    title: `Aura Chakra Healing Report

    `,
    content: `Once the healing process is completed, you will get a detailed report within 3-4 days curated by our Healers. It will contain a before & after analysis of your aura & chakras healing.


  `,
  },
];
const pricingData = {
  img_src:
    'https://yourspiritualrevolution.org/wp-content/uploads/2022/01/distance-aura-chakra-card.jpg',
  data: {
    title: `   Distance Aura & Chakra Healing
    `,
    sub_title: `   Reset, Revive, and Re-Energize your soul
    with Aura & Chakra Healing.
`,
    session: `      Powerful Healing for 1 Session

`,
    price: `            Price: ₹3,999 (Incl. GST) / US $79

`,
  },
};
const faqs = [
  {
    title: `How will Remote/Distance Healing work?
  `,

    content: `Distance Healing can be explained by phenomena of Quantum Entanglement as an alternative healing therapy to overcome physical, mental, and emotional imbalances. Quantum entanglement discovered by Schrödinger is one of the most significant discoveries of modern science. It states that we all are particles in the universe, entangled together with strong force. Thus, even if we are separated by distance, we are connected and can affect each other’s actions. Albert Einstein quoted this phenomenon as “spooky action at a distance.”

  \n

  This interconnection is referred to as ‘Oneness,’ the state of being one. The healers & practitioners, with their expertise, access this unified field of energy & activate the connection. They can alter your energy body with positive vibrations to attract abundance, overcome illness, and improve immunity. The various modalities can help in Integral Healing even at a remote distance.
  `,
  },
  {
    title: `How do you know if your chakra is blocked?`,
    content: `If you are feeling hyper, tense, nervous, or overly exhausted, it means your chakras are spinning too quickly. And the feeling of tiredness, ungroundedness, and lack of creative energy can be due to chakras spinning too slow.

      `,
  },
  {
    title: `Is Aura the same as the vibes?`,
    content: `Aura is almost the same as vibes. Aura comprises “vibrational frequency,” which is short for vibes. You can sense someone’s emotions or energy without even interacting with that person. That is due to the Aura that surrounds that person.


      `,
  },
  {
    title: `What details do I need to share with you?`,
    content: `We will need your personal details like Name, Photo and Date, Place, Time of Birth and issues you are facing (optional).

      `,
  },
  {
    title: `Is it possible to change your Aura?`,
    content: `Yes, Auras can be changed depending on your emotions and the people you surround yourself with. For example, your Aura will be different when you are emotionally stressed, and it will differ if you are sensing the feeling of contentment. 


      `,
  },
  {
    title: `When will I get my report?`,
    content: `You will receive a detailed report mentioned with all the information within 3-4 days.



      `,
  },
];
AuraChakraHealing.getLayout = getLayout;
export default AuraChakraHealing;
