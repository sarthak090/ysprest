import HealingProcess from '@/components/healingServices/HealingProcess';
import { getLayout } from '@/components/layouts/layout';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useCart } from '@/store/quick-cart/cart.context';
import { useRouter } from 'next/router';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
import SmoothScrollLink from '@/components/ui/SmoothScrollLink';
import Accordion from '@/components/ui/accordion';
import CartCounterButton from '@/components/cart/cart-counter-button';
export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/distance-money-reiki`;
  const seoData = await fetch(seoURL).then((r) => r.json());
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/distance-emotion-code-and-body-code/`;
  const product = await fetch(productUrl).then((r) => r.json());
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

function Distancemoneyreiki(props: any) {
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
      <section className=" grid grid-cols-2">
        <div className="  flex flex-col justify-center px-16">
          <h1 className="my-6 text-[40px] font-semibold">
            Distance Money Reiki Healing
          </h1>
          <p className="text-[20px] font-semibold">
            Clear the negativity that stops you from attracting <br /> wealth
            abundance, prosperity & success.
          </p>
          <div className=" my-8 flex gap-8 ">
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
        </div>
        <div className="bg-bgBlue">
          <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Money-First-Image.png" />
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="flex items-center justify-center bg-bgBlue">
          <img
            className="max-w-[600px]"
            src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/img1.jpg"
          />
        </div>
        <div className="  grid gap-6 px-16 py-8">
          <h1 className="my-6 text-[40px] font-semibold">
            What is Money Reiki?
          </h1>
          <p className="text-[18px]  ">
            Money Reiki specifically focuses on healing issues surrounding money
            & monetary growth. It works on correcting the energy that keeps you
            away from wealth, abundance, money & prosperity. Like reiki healing,
            it uses the energy to heal money issues and offer holistic healing
            to all financial aspects. It involves the power of manifestation
            alongside clearing the negative energies that sabotage monetary
            growth & financial abundance.
          </p>
          <p className="text-[18px]  ">
            Effective money reiki will offer you a deep understanding of the
            underlying issues with financial growth, blocks in money abundance &
            clears the unprocessed imbalances that keep you away from better
            opportunities. It transforms the energy system and removes the
            low-frequency monetary fears, insecurities, or past life karmic
            issues. It resolves the blockages and negatively affecting
            strategies of the energy field with high-frequency vibrations to
            make it precisely work like a magnet & attract more monetarily
            benefitting opportunities.
          </p>
          <p className="text-[18px]  ">
            Distance money reiki successfully removes past life issues that
            impact monetary growth & keep you away from success. It finds out
            the energy and issues, resolves them & transforms the energy field
            with positive affirmations that manifest & attract prosperity,
            wealth, money manifestation, success or anything concerning the
            expansion of your financial security.
          </p>
        </div>
      </section>
      <CartCounterButton />
      <section className="grid grid-cols-2">
        <div id="learnmore" className="px-16">
          <div className="my-6 text-[40px] font-semibold">
            Who does money reiki benefit?
          </div>
          <div className="ml-6   grid gap-6 text-[20px]  ">
            {list1.map((list) => (
              <li>{list}</li>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center bg-bgBlue p-16">
          <img
            className=" max-w-[600px]"
            src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/img2.jpg"
          />
        </div>
      </section>
      <section className="my-8 text-[#0A2D4D] 2xl:px-52">
        <p className="text-center text-[30px] font-semibold">Benefit</p>
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div className="flex items-center gap-2 rounded-xl bg-bgBlue px-6 py-6 text-[20px] shadow-700 ">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#0A2D4D] text-[#0A2D4D] text-black">
                {index + 1}
              </div>

              <p>{benefit}</p>
            </div>
          ))}
        </div>
        <HealingProcess onClick={buyNowClickHandler} />
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
      <section
        style={{
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Money-Reiki-Healing-Banner-2.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100%',
        }}
        className="  flex   min-h-[410px] items-center justify-center  bg-no-repeat  pb-0"
      >
        <div className="grid gap-8">
          <p className="text-center text-[30px] font-semibold    text-white">
            Don’t let negativity keep you away from your desires & success.
            Attract money & wealth abundance with Money Reiki now!
          </p>
          <div className="flex justify-center">
            <SmoothScrollLink to="buynow">
              <button className="rounded-lg bg-white px-10 py-4 text-[18px] font-semibold text-darkBlue shadow-downfall">
                Get Started
              </button>
            </SmoothScrollLink>
          </div>
        </div>
      </section>
    </section>
  );
}
const benefits = [
  `Removes blockages from wealth abundance & success
  `,
  `Heals past life karmic money wounds
  `,
  `Encourages self-confidence & enhance self-worth
  `,
  `Manifests your goals, dreams & desires
  `,
  `Clears negative thoughts & energies surrounding money
  `,
  `Attracts better opportunities & money prosperity
  `,
];
const list1 = [
  `Anyone who is struggling from financial instability
  `,
  `Anyone who wants to expand their business
  `,
  `Anyone who wants to attract more business opportunities
  `,
  `Anyone who wants to manifest wealth abundance
  `,
  `Anyone who wants to manifest success & prosperity
  `,
  `Anyone who wants to resolve monetary issues
  `,
  `Anyone who wants to heal financial blockages
  `,
];
const faqs = [
  {
    title: `How will Remote/Distance Healing work?
  `,

    content: `Distance Healing can be explained by phenomena of Quantum Entanglement as an alternative healing therapy to overcome physical, mental, and emotional imbalances. Quantum entanglement discovered by Schrödinger is one of the most significant discoveries of modern science. It states that we all are particles in the universe, entangled together with strong force. Thus, even if we are separated by distance, we are connected and affect each other’s actions. Albert Einstein quoted this phenomenon as “spooky action at a distance.”

    \n
    This interconnection is referred to as ‘Oneness,’ the state of being one. The healers & practitioners, with their expertise, access this unified field of energy & activate the connection. They can alter your energy body with positive vibrations to attract abundance, overcome illness, and improve immunity. The various modalities can help in Integral Healing even at a remote distance.


  `,
  },
  {
    title: `What is the source of energy for money reiki?`,
    content: `Unlike other physical energy, Reiki energy comes from within us. The energy comes from the transcendental part of ourselves which is connected to the infinite supply of healing energy.


      `,
  },
  {
    title: `What are trapped emotions?`,
    content: `Trapped emotions are low-frequency energy suppressed in your body and become a part of your daily life. These energies can also be present in your electromagnetic field, affecting your physical body directly or indirectly.



      `,
  },
  {
    title: `Is it available in my Country?`,
    content: `The programs are available to anyone and everyone around the world. Register to know more about the availability of services.


      `,
  },
  {
    title: `What Details Do I Need To Share With You?`,
    content: `We will need your personal details like Name, Photo and Date, Place, and Time of Birth.




      `,
  },
  {
    title: `What are the various modes of payment?`,
    content: `We accept payment by credit cards/debit cards/net banking (for Indian customers) and PayPal (for international customers).




      `,
  },
];
Distancemoneyreiki.getLayout = getLayout;
export default Distancemoneyreiki;
