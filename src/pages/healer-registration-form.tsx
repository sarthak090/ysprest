import { getLayout } from '@/components/layouts/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import PaidPostSubmittion from '@/components/settings/paid-post-form';
import HealerRegistrationForm from '@/components/settings/healer-registration-form';
import Logo from '@/components/ui/logo';
import Image from 'next/image';
export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/healer-registration-form`;
  const seoData = await fetch(seoURL).then((r) => r.json());
  return {
    props: {
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};

function Submitguestpost(props: any) {
  return (
    <>
      <SeoByRankMath {...props.seoData} />
      <div className="">
        <div
          style={{
            backgroundColor: 'transparent',
            backgroundImage: `linear-gradient(90deg, #053560 0%, #3f83be 100%);`,
          }}
          className=" p-3 lg:p-8"
        >
          <div className="mx-auto my-8 w-full max-w-1920  px-4 lg:px-32 xl:px-64  ">
            <div className="rounded bg-white px-2 lg:p-8">
              <div className=" flex justify-center">
                <Image
                  src={`https://yourspiritualrevolution.org/wp-content/uploads/2022/11/YSR-Logo-Featured-Image.png`}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h1 className="my-4 text-center text-4xl font-bold">
                HEALER REGISTRATION
              </h1>

              <HealerRegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const guidelines = [
  `For free guest-post: the article should be between 500-600 words only.
  `,
  `For link exchange- the article can be up to 1000 words.
  `,
  `For paid guest posts: the article can be up to 1000-2000 words.
  `,
  `Your article should be well written in English language only. It should be free from grammatical errors.
  `,
  `The content should be 100% original and unique. Your article should not be published anywhere else. We don’t publish any kind of plagiarized content.
  `,
  `Ensure that the articles are relevant to the topics given above.
  `,
  `Ensure to give a suitable and attractive title and add relevant keywords to the post. Also, structure the article with proper headings and sub-headings.
  `,
  `The articles need to be submitted in MS Word, Doc or. Docx format only.
  `,
  `You can add an author bio underneath the article and links to your website and social media pages.
  `,
  `You can also share your contribution on your website, social media pages, in your newsletter, or in an email and tag @yourspiritualrevolution.
  `,
];

const w = [
  {
    title: 'FREE GUEST-POST',
    subTitle: 'WHAT WILL YOU GET',
    benefits: [
      'Article Submission (up to 600 words only).',
      'Access to worldwide readers.',
      'Free promotion on the website and social media.',
    ],
  },
  {
    title: 'LINK EXCHANGE',
    subTitle: 'WHAT WILL YOU GET',
    benefits: [
      'Article Submission (up to 600 words only).',
      'Access to worldwide readers.',
      'Free promotion on the website and social media.',
      'Link exchange on your website/ social media platform.',
    ],
  },
  {
    title: 'PAID GUEST-POST',
    subTitle: 'WHAT WILL YOU GET',
    benefits: [
      'Article Submission (up to 600 words only).',
      'Access to worldwide readers.',
      'Free promotion on the website and social media.',
      'Link exchange on your website/ social media platform.',
      'Two Backlinks.',
      'Permanent do-follow link.',
    ],
  },
];
const benefits = [
  'Article Submission (up to 600 words only).',
  'Access to worldwide readers.',
  'Free promotion on the website and social media.',
  'Link exchange on your website/ social media platform.',
  'Two Backlinks.',
  'Permanent do-follow link.',
];
const c1 = [
  `
Spirituality
`,
  `Health & Wellness
`,
  `Holistic Lifestyle
`,
  `Energy Healing
`,
  `Alternative Therapies
`,
  `Crystals & Gemstones
`,
];

const c2 = [
  `
  Science and Spirituality
  `,
  `Meditation and Yoga

`,
  `Self-Help & Self Development

`,
  `Human Psychology

`,
  `Beauty & Jewelry

`,
  `Home Decor

`,
];
const c3 = [
  `Spiritual Arts

  `,
  `Spiritual Books & Magazines


`,
  `Mysticism

`,
  `Spiritual Enlightenment


`,
  `Mind-Body Dualism


`,
];
Submitguestpost.getLayout = getLayout;
export default Submitguestpost;
