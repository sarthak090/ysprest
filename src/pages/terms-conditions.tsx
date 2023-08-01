import { privacyPolicy } from '@/framework/static/privacy';
import { Link, Element } from 'react-scroll';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import SeoByRankMath from '@/components/products/SEO';

export default function PrivacyPage({ pageData, seoData }: any) {
  return (
    <>
      <SeoByRankMath {...seoData} />

      <Seo title={pageData.title.rendered} url="about-us" />
      <section className=" medit mx-auto w-full max-w-1920 bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div className="post-content ">
          <div
            dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}
          />
        </div>
      </section>
    </>
  );
}

PrivacyPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/terms-conditions`;
  const url = `${NEXT_PUBLIC_CMS}/wp-json/wp/v2/pages/12807`;
  const pageData = await fetch(url).then((r) => r.json());
  const seoData = await fetch(seoURL).then((r) => r.json());

  return {
    props: {
      pageData,
      seoData,
      ...(await serverSideTranslations(locale!, ['common', 'policy'])),
    },
  };
};
