import { getLayout } from '@/components/layouts/layout';
import { GetStaticProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import FreePostSubmittion from '@/components/settings/free-post-submittion';
import LinkExchangeSubmittionForm from '@/components/settings/link-exchange-post-submittion';
import PaidPostSubmittion from '@/components/settings/paid-post-form';
export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/paid-guest-post-submission`;
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
      <div className="mx-auto w-full max-w-1920 bg-white px-4 lg:px-32 xl:px-64  ">
        <h1 className="my-8 text-center text-4xl font-bold">
          Submit Your Guest Post Now!
        </h1>
        <p className="  my-4 text-center">
          Note: Please read{' '}
          <a href="#guidelines" className=" text-blue-600">
            submission guidelines
          </a>{' '}
          before submitting your guest post.
        </p>
        <section className="mb-12 bg-[#166AB4] p-4 text-white md:px-8 md:py-8">
          <PaidPostSubmittion />
        </section>
        <section className="  font-sans ">
          <section
            id="guidelines"
            className="bg-[#E4E4E4] px-4 lg:py-8 lg:px-16 lg:text-[18px]"
          >
            <h4 className=" py-4 font-semibold lg:text-2xl">
              Our Submission Guidelines
            </h4>
            <p>
              Kindly follow these guidelines if you wish to write for Your
              Spiritual Revolution.
            </p>
            <ul className="py-4 pl-8">
              {guidelines.map((g) => (
                <li className="my-2 list-disc">{g}</li>
              ))}
            </ul>
            <p className="py-4">
              <span className="font-bold text-red-600"> NOTE:</span> Once you
              submit the article, we reserve the right to edit the content for
              grammatical errors. We also reserve the right to reject or modify
              the content without any prior notification.
            </p>
          </section>
          <section className="my-16 bg-[#E4E4E4] px-4 py-4 lg:py-8 lg:px-16 lg:text-[18px]">
            <h5 className="mb-6 lg:text-2xl  ">We Can Write For You</h5>
            <p>
              Want to publish an article but don’t know where to start? We got
              you covered! Get SEO-optimized, 100% unique & high-quality
              articles written by our experienced content writers. We can curate
              customized articles for you to publish on Your Spiritual
              Revolution along with additional backlinks on the post.
            </p>
            <p className="my-4">
              Contact us for more details at{' '}
              <a
                className="text-blue-600"
                href="mailto:amitt@YourSpiritualRevolution.org"
              >
                amitt@YourSpiritualRevolution.org
              </a>
            </p>
          </section>
        </section>

        {/* <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: props?.data?.content.rendered }}
        /> */}
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
