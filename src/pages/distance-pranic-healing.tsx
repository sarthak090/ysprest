import Healers from '@/components/healingServices/Healers';
import { getLayout } from '@/components/layouts/layout';
import Accordion from '@/components/ui/accordion';
import SeoByRankMath from '@/components/products/SEO';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import { useCart } from '@/store/quick-cart/cart.context';
import { useRouter } from 'next/router';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
import SmoothScrollLink from '@/components/ui/SmoothScrollLink';
import Benefits from '@/components/healingServices/distance-pranic-healing/Benefits';
import YTEmbed from '@/components/home/YTEmbed';
import CartCounterButton from '@/components/cart/cart-counter-button';
function DistanePanicHealing(props: any) {
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

      <section className="bg-white">
        <section
          style={{
            background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/banner-2.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100%',
          }}
          className="  min-h-[600px]     bg-no-repeat  pb-0"
        >
          <section className=" flex justify-center py-40 lg:px-32">
            <section className="text-center text-black opacity-100">
              <h1 className="text-[30px] font-semibold ">
                HEAL IMBALANCES OF YOUR MIND, BODY & SOUL BY <br />
                CHANNELING DIVINE ENERGY THROUGH PRANIC HEALING.
              </h1>
              <div className=" my-8 flex justify-center gap-8 ">
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
                    <a href="#buynow">Buy Now</a>
                  </button>
                </SmoothScrollLink>
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
              </div>
            </section>
          </section>
        </section>
        <section className=" ">
          <div className="bg-[#E9F5FF] px-52 py-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-[#166AB4]">
                <p>We have a panel of</p>
                <p className="text-[30px] font-semibold">
                  10+ Certified Healers
                </p>
              </div>
              <div className="text-[#166AB4]">
                <p>Working</p>
                <p className="text-[30px] font-semibold">Since 2007</p>
              </div>
              <div className="text-[#166AB4]">
                <p>We Are</p>
                <p className="text-[30px] font-semibold">
                  ISO 9001:2015 Certified
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
          <div className="grid grid-cols-2 gap-8">
            <div id="learnmore">
              <img src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/1.jpg" />
            </div>
            <div className="grid text-[18px]">
              <p className="text-[28px] font-semibold text-darkBlue">
                What Is Distance Pranic Healing?
              </p>
              <p>
                Pranic Healing is a non-touch energy treatment that accelerates
                the body’s balance, relieves any form of mental stress, and
                heals the soul integrally. Referred to as life-force, pranic
                healing is an invincible force of energy.{' '}
              </p>
              <p>
                Bringing together the cosmic energy it is performed with
                profound energy healing skills, with an approach to accelerate
                the Pranic force of the body and harmonize the energy
                frequencies. Pranic force, the energy procured from the sun,
                wind & ground effectively heals physical, emotional & spiritual
                imbalances. It shows light to the soul, brings it out of the
                darkness, combats insecurities and blockages that a soul faces.
                With pranic force in the body and performs healing, clearing all
                the blockages through energy transformations.
              </p>
              <p>
                Thus, a perfect balance of modern & ancient approaches towards
                healing, distance pranic healing effectively deals with
                emotional, physical, and mental imbalances.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center gap-4 text-[18px]">
              <p className="text-[28px] font-semibold text-darkBlue">
                How can Distance Pranic Healing help you?
              </p>
              <p>
                Pranic healing involves a non-touch energy transfer that
                rectifies the imbalances. It overcomes negative energy and
                instills ecstasy that aims to improve your daily routine and
                accelerates good health in the long run.
              </p>
              <p>
                Successful completion of Pranic Healing boosts self-esteem,
                reduces stress levels, enhances spiritual growth, and improves
                memory & concentration. It takes care of emotional imbalances
                along with reducing anxiety, stress & insecurities.
              </p>
            </div>
            <div>
              <img src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/2.jpg" />
            </div>
          </div>
        </section>
        <div className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52"></div>
        <section className="2xl:px-52">
          <p className="text-center text-[30px] font-semibold text-darkBlue">
            Benefits of Pranic Healing
          </p>
          <p className="my-6 text-center">
            Your Spiritual Revolution offers holistic growth through Pranic
            Healing that aims to re-energize the body’s balance, restore inner
            peace, and show light to the soul.
          </p>
          <div className="grid grid-cols-4 gap-5">
            <Benefits />
          </div>
        </section>

        <div className="mx-auto   w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
          <div className="text-center text-[30px] font-semibold text-darkBlue ">
            How will Distance Pranic Healing take place?
          </div>
          <div className="my-8 grid grid-cols-3 gap-6">
            <div className=" rounded-2xl px-4 py-8 shadow-900">
              <div className="mb-6 flex gap-2 text-[18px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-darkBlue  text-white">
                  01
                </div>
                <p>Identify Energy Blockages</p>
              </div>
              <div>
                Our healers & practitioners will first identify the reasons &
                causes for the energy blockages & imbalances and how it impacts
                your health & wellbeing.
              </div>
            </div>
            <div className=" rounded-2xl px-4 py-8 shadow-900">
              <div className="mb-6 flex gap-2 text-[18px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-darkBlue  text-white">
                  01
                </div>
                <p>Identify Energy Blockages</p>
              </div>
              <div>
                Our healers & practitioners will first identify the reasons &
                causes for the energy blockages & imbalances and how it impacts
                your health & wellbeing.
              </div>
            </div>
            <div className=" rounded-2xl px-4 py-8 shadow-900">
              <div className="mb-6 flex gap-2 text-[18px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-darkBlue  text-white">
                  01
                </div>
                <p>Identify Energy Blockages</p>
              </div>
              <div>
                Our healers & practitioners will first identify the reasons &
                causes for the energy blockages & imbalances and how it impacts
                your health & wellbeing.
              </div>
            </div>
          </div>
          <div className="grid justify-center gap-8">
            <Healers />
          </div>
        </div>
        <YTEmbed embedId="3jKYDzomawU" />
        <section className="my-8">
          <div className="my-6 py-6 text-center text-[25px] font-semibold">
            <p className="text-[34px]">
              Find the right energy & balance for your life with <br />{' '}
              spiritually enlightening vibrational frequencies
            </p>
          </div>
          <div className="grid px-32 lg:grid-cols-12" id="buynow">
            <div className="col-span-6 flex justify-center">
              <img
                src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/distance-pranic-healing.jpg"
                className="rounded-lg shadow-downfall-lg"
                width={500}
              />
            </div>
            <div className="col-span-6">
              <p className="mb-6 text-[25px] font-semibold">
                Distance Pranic Healing
              </p>
              <p className="my-4 text-[20px]">
                Connect with your inner-self through Pranic Healing.
              </p>
              <p className="my-4 text-[18px]">
                Powerful Healing for 7 days (7 Sessions)
              </p>
              <p className="my-4 text-[18px]">
                Price: ₹7,999 (Incl. GST) / US $129
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

        <CartCounterButton />
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
          <section className="my-8 text-center font-semibold">
            <p className="text-[24px] font-semibold text-[#0A2D4D]">
              Still have a Question?
            </p>
            <p className="my-6">
              If you have any other question that has not been answered in the
              FAQ, please <br /> email us at:{' '}
              <a
                href="mailto: amitt@YourSpiritualRevolution.org"
                className="text-red-500"
              >
                amitt@YourSpiritualRevolution.org
              </a>
            </p>
            <p>
              WhatsApp:
              <a
                className="text-red-500"
                href="https://wa.me/+918591706800/?text=I am interested to know more about Integral Health and Wellness Healing"
              >
                8591706800
              </a>{' '}
            </p>
          </section>
        </div>

        <section
          style={{
            background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/banner-2.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100%',
          }}
          className="  flex   min-h-[300px] items-center justify-center  bg-no-repeat  pb-0"
        >
          <div className="grid gap-8">
            <p className="text-[30px] font-semibold    text-dark">
              Embrace Positivity, Enhance Energy And Evolve Spiritually.
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
    </>
  );
}
const faqs = [
  {
    title: `How will Remote/Distance Healing work?
  `,

    content: `Distance Healing can be explained by phenomena of Quantum Entanglement as an alternative healing therapy to overcome physical, mental, and emotional imbalances. Quantum entanglement discovered by Schrödinger is one of the most significant discoveries of modern science. It states that we all are particles in the universe, entangled together with strong force.

\n\n    Thus, even if we are separated by distance, we are connected and can affect each other’s actions. Albert Einstein quoted this phenomenon as “spooky action at a distance.”
    
\n\n This interconnection is referred to as ‘Oneness,’ the state of being one. The healers & practitioners, with their expertise, access this unified field of energy & activate the connection. They can alter your energy body with positive vibrations to attract abundance, overcome illness, and improve immunity. The various modalities can help in Integral Healing even at a remote distance.

  `,
  },
  {
    title: `What details do i need to share with you?`,
    content: `We will need your personal details like Name, Photo and Date, Place, and Time of Birth.


      `,
  },
  {
    title: `What is the source of Pranic Healing?`,
    content: `The main sources of pranic healing are energy derived from the sun, wind & ground. It uses the prana energy from the sun, wind & the ground to heal the physical ailments & emotional imbalances.




      `,
  },
  {
    title: `What are the various modes of payment available?`,
    content: `We accept payment by credit cards/debit cards/net banking (for Indian customers) and PayPal (for international customers).



      `,
  },
  {
    title: `Is it available in my Country?`,
    content: `The programs are available to anyone and everyone around the world. Register to know more about the availability of services.




      `,
  },
  {
    title: `Can I purchase this for my friends and family?`,
    content: `Yes, you can. All you need to do is share the mentioned details with us.




      `,
  },
];
export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;

  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/distance-pranic-healing`;
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/distance-pranic-healing/`;
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
DistanePanicHealing.getLayout = getLayout;
export default DistanePanicHealing;
