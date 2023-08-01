import Image from 'next/image';
import Link from 'next/link';
import { getLayout } from '@/components/layouts/layout';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import HealerCard from '@/components/Healer/healer-card';
export const getStaticProps = async ({ locale }: any) => {
  const healers = await fetch(
    process.env.NEXT_PUBLIC_WP_API + '/wp/v2/healer-profile?per_post=100'
  ).then((r) => r.json());
  const { NEXT_PUBLIC_CMS } = process.env;

  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/our-certified-healers`;
  const seoData = await fetch(seoURL).then((r) => r.json());

  healers.sort((a, b) => {
    const membershipA = a.x_metadata.healing_membership;
    const membershipB = b.x_metadata.healing_membership;

    if (membershipA > membershipB) {
      return -1;
    } else if (membershipA < membershipB) {
      return 1;
    } else {
      return 0;
    }
  });
  return {
    props: {
      healers: healers,
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};

function OurcertifiedHealers(props: any) {
  return (
    <>
      <SeoByRankMath {...props.seoData} />
      <div className="container mx-auto   bg-white px-4 lg:px-36">
        <h1 className="my-8 text-center text-3xl font-bold">
          OUR CERTIFIED HEALERS
        </h1>
        <div className="grid gap-8 lg:grid-cols-3">
          {props.healers.map((healer: any) => (
            <HealerCard healer={healer} />
          ))}
        </div>
        <div className="my-8 flex justify-center ">
          <div className="max-w-fit rounded-md bg-[#166AB4] p-2 text-white">
            Want to Join Us as Healer?
            <Link href={'/healer-registration-form'}>
              <span className="ml-2 cursor-pointer bg-red-600 pb-1 underline">
                REGISTER NOW
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

OurcertifiedHealers.getLayout = getLayout;
export default OurcertifiedHealers;
