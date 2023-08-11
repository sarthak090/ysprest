import CartCounterButton from '@/components/cart/cart-counter-button';
import Healers from '@/components/healingServices/Healers';
import Testimonials from '@/components/healingServices/Testimonials';
import DistanceSpritiualBenefits from '@/components/healingServices/distance-spritiual-healing-divine-light/benefits';
import MainBenefits from '@/components/healingServices/distance-spritiual-healing-divine-light/main-benefits';
import PricingOptions from '@/components/healingServices/intergral-healing/PricingOptions';
import { getLayout } from '@/components/layouts/layout';
import SeoByRankMath from '@/components/products/SEO';
import SmoothScrollLink from '@/components/ui/SmoothScrollLink';
import Accordion from '@/components/ui/accordion';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useCart } from '@/store/quick-cart/cart.context';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
function DistaneSpritualHealing(props: any) {
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
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Spiritual-Healing-Main-Banner.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'contain',
          backgroundSize: '100%',
        }}
        className="  min-h-[500px]     bg-no-repeat  pb-0"
      >
        <section className=" flex justify-center py-32 lg:px-32">
          <section className="text-center text-white opacity-100">
            <h1 className="text-[45px] font-semibold ">
              DISTANCE SPIRITUAL HEALING & DIVINE LIGHT GUIDANCE
            </h1>
            <p className="my-5 text-[20px] font-semibold">
              Restore your inner self with the power of spiritual healing &
              divine light guidance.
            </p>
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
      <div className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="post-content"></div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 ">
            <h1 className="text-center text-3xl font-bold underline">
              What is Spiritual Healing & Divine Light Guidance?
            </h1>
            <p className="my-4 text-[18px]">
              Spiritual healing is a form of ancient healing modality that uses
              divine light guidance along with intuitive powers and psychic
              abilities. It is one of the most powerful natural healing
              modalities that guides individuals & connects them with divine
              sources of nature. This psychic healing offers clarity & heals
              with the intuitive powers. It encourages spiritual growth by
              empowering aura and promotes a highly vibrational universal
              energy. Emphasizing the spirit level, spiritual healing takes care
              of the blockages that hinder a spirit from witnessing the
              awakening.
            </p>
            <p className="my-4 text-[18px]">
              This ancient form of healing involves a healer with supreme faith
              in mystic energies and divine light energy. The healer further
              transfers the spiritual energies & frequencies to the seeker &
              encourages the soul for spiritual awakening. Performed
              collectively with psychic & intuitive healing, the spiritual
              healing along with divine light guidance guides the soul towards
              light and offers energy drawn from the cosmic environment for
              auric transformation. Performed at the spirit level, spiritual
              healing is intended towards offering the seeker spiritual
              enlightenment and a right balance in all aspects of life.
            </p>
          </div>
        </div>
        <div className="my-16  ">
          <h4 className="text-center text-2xl font-bold underline  ">
            In this Healing Session, the Healer will help you:
          </h4>
          <div className="my-12 grid grid-cols-2 gap-5">
            <div className="flex items-center justify-center">
              <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Spiritual-Healing-Image-1.jpg" />
            </div>
            <div>
              <p id="learnmore" className="font-semibold md:text-[25px]">
                Signs that say you need a spiritual healing & divine light
                guidance
              </p>
              <DistanceSpritiualBenefits />
            </div>
          </div>
        </div>
      </div>
      <section className="2xl:px-52">
        <p className="text-center text-[30px] font-semibold text-darkBlue">
          Benefits
        </p>
        <p className="my-6 text-center">
          Spiritual Healing is non-invasive healing performed with the sole
          intention of finding the right balance in all aspects of life.
          Emanating at the spirit level, the divine light guidance offers with a
          piece of clarity, emotional & mental stability, good health & courage
          to look at life with the right approach.
        </p>
        <div className="grid gap-5">
          <MainBenefits />
        </div>
      </section>

      <div className="mx-auto   w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="text-center text-[30px] font-semibold text-darkBlue ">
          How will Distance Spiritual Healing and Divine Light Guidance take
          place?
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

      <section className="my-8">
        <div className="my-6 py-6 text-center text-[25px] font-semibold">
          <p className="text-[34px]">
            Find the right energy & balance for your life with <br />{' '}
            spiritually enlightening vibrational frequencies
          </p>
        </div>
        <div id="buynow" className="grid px-32 lg:grid-cols-12">
          <div className="col-span-6 flex justify-center">
            <img
              src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Spiritual-Healing-Pricing-Card.jpg"
              className="rounded-lg shadow-downfall-lg"
              width={500}
            />
          </div>
          <div className="col-span-6">
            <p className="mb-6 text-[25px] font-semibold">
              Distance Spiritual Healing & Divine Light Guidance
            </p>
            <p className="my-4 text-[20px]">
              Embrace life with a guided approach by divine light guidance &
              spiritual healing.
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
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Spiritual-Healing-Banner-2.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'contain',
          backgroundSize: '100%',
        }}
        className="  flex   min-h-[300px] items-center justify-center  bg-no-repeat  pb-0"
      >
        <div className="grid gap-8">
          <p className="text-[30px] font-bold text-white">
            Restore, Connect, And Protect Your Soul With <br /> Spiritual
            Healing & Divine Light Guidance
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
      <CartCounterButton />
    </section>
  );
}
const faqs = [
  {
    title: `How will Remote/Distance Healing work?`,
    content: `Distance Healing can be explained by phenomena of Quantum Entanglement as an alternative healing therapy to overcome physical, mental, and emotional imbalances. Quantum entanglement discovered by Schrödinger is one of the most significant discoveries of modern science. It states that we all are particles in the universe, entangled together with strong force. Thus, even if we are separated by distance, we are connected and affect each other’s actions. Albert Einstein quoted this phenomenon as “spooky action at a distance.”

  This interconnection is referred to as ‘Oneness,’ the state of being one. The healers & practitioners, with their expertise, access this unified field of energy & activate the connection. They can alter your energy body with positive vibrations to attract abundance, overcome illness, and improve immunity. The various modalities can help in Integral Healing even at a remote distance.`,
  },
  {
    title: `What details do i need to share with you?`,
    content: `We will need your personal details like Name, Photo and Date, Place, and Time of Birth.

    `,
  },
  {
    title: `What is the source of spiritual healing?`,
    content: `The source of spiritual healing & divine light guidance is the energy drawn from the universe and put in force with mystic & healing ability.


    `,
  },
  {
    title: `What are the various modes of payment available?`,
    content: `We accept payment by credit cards/debit cards/net banking (for Indian customers) and PayPal (for international customers).


    `,
  },
  {
    title: `Is it available in my country?`,
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
  const url = `https://yourspiritualrevolution.org/wp-json/wp/v2/pages/26796`;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/distance-spiritual-healing-divine-light-guidance`;
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/distance-spiritual-healing-and-divine-light-guidance/`;
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
DistaneSpritualHealing.getLayout = getLayout;
export default DistaneSpritualHealing;
