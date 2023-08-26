import type { Product } from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import client from './client';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import { QueryClient } from 'react-query';
import { SettingsQueryOptions } from '@/types';
import {
  extractMetaTags,
  extractScriptTags,
} from '../../../utils/extractMetaTags';
// This function gets called at build time
type ParsedQueryParams = {
  slug: string;
};
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  invariant(locales, 'locales is not defined');
  const { data } = await client.products.all({ limit: 10 });
  const paths = data?.flatMap((product) =>
    locales?.map((locale) => ({ params: { slug: product.slug } }))
  );
  return {
    paths,
    fallback: 'blocking',
  };
};
type PageProps = {
  product: Product;
};
export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ params, locale }) => {
  const { slug } = params!; //* we know it's required because of getStaticPaths
  const { NEXT_PUBLIC_WP_API, NEXT_PUBLIC_CMS } = process.env;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.SETTINGS, { language: locale }],
    ({ queryKey }) => client.settings.all(queryKey[1] as SettingsQueryOptions)
  );

  try {
    const postUrl = NEXT_PUBLIC_WP_API + `/wpr/v1/posts`;
    const productsUrl = NEXT_PUBLIC_WP_API + `/api/products`;
    const posts = await fetch(postUrl).then((r) => r.json());
    const related_products = await fetch(productsUrl).then((r) => r.json());
    const product = await client.products.get({ slug, language: locale });
    const rankMathUrl =
      NEXT_PUBLIC_WP_API +
      '/rankmath/v1/getHead?url=' +
      NEXT_PUBLIC_CMS +
      `/shop/${product.categories[0].slug}/${slug}/`;
    const seoData = await fetch(rankMathUrl).then((r) => r.json());
    return {
      props: {
        product: {
          ...product,
          related_products: related_products.data,
        },
        posts,
        seoData: {
          meta_tags: extractMetaTags(seoData.head),
          jsonLtdScheam: extractScriptTags(seoData.head),
        },
        ...(await serverSideTranslations(locale!, ['common'])),
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
