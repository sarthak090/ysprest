import type { NextPageWithLayout } from '@/types';
import type { InferGetStaticPropsType } from 'next';
import { getLayout } from '@/components/layouts/layout';
import { AttributesProvider } from '@/components/products/details/attributes.context';

import { useWindowSize } from '@/lib/use-window-size';
import AverageRatings from '@/components/reviews/average-ratings';

import dynamic from 'next/dynamic';

import { getStaticPaths, getStaticProps } from '@/framework/product.ssr';
import ProductReviewsSlider from '@/components/reviews/product-review-slider';
import ProductQuestionsSlider from '@/components/questions/product-questions-slider';
import Tab from '@/components/ui/tab';

import SeoByRankMath from '@/components/products/SEO';
import CallbackForm from '@/components/products/call-back-form';
import LatestBlogs from '@/components/products/latest-blog';
export { getStaticPaths, getStaticProps };
//FIXME: typescript and layout
const Details = dynamic(() => import('@/components/products/details/details'));
const BookDetails = dynamic(
  () => import('@/components/products/details/book-details')
);
const RelatedProducts = dynamic(
  () => import('@/components/products/details/related-products')
);
const CartCounterButton = dynamic(
  () => import('@/components/cart/cart-counter-button'),
  { ssr: false }
);

const ProductPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ product, seoData, posts }: any) => {
  const { width } = useWindowSize();
  return (
    <>
      <SeoByRankMath {...seoData} />

      <AttributesProvider>
        <div className="min-h-screen bg-light">
          {product.type?.slug === 'books' ? (
            <BookDetails product={product} />
          ) : (
            <>
              <Details product={product} />

              <AverageRatings
                data={product}
                title={product?.name}
                ratingCount={product?.rating_count}
                totalReviews={product?.total_reviews}
                ratings={product?.ratings}
              />
            </>
          )}

          <ProductReviewsSlider
            productId={product?.id}
            productType={product?.type?.slug}
          />
          <ProductQuestionsSlider
            productId={product?.id}
            shopId={product?.shop?.id}
            productType={product?.type?.slug}
          />

          {product.type?.slug !== 'books' &&
            product?.related_products?.length > 1 && (
              <div className="border-b border-t p-5 lg:p-14 xl:p-16">
                <RelatedProducts
                  products={product.related_products.slice(0, 5)}
                  currentProductId={product.id}
                  gridClassName="lg:grid-cols-4 2xl:grid-cols-5 !gap-3"
                  heading="Related Products"
                />
              </div>
            )}

          {product.type?.slug !== 'books' &&
            product?.related_products?.length > 1 && (
              <div className="border-b border-t p-5 lg:p-14 xl:p-16">
                <RelatedProducts
                  products={product.related_products.slice(5, 10)}
                  currentProductId={product.id}
                  gridClassName="lg:grid-cols-4 2xl:grid-cols-5 !gap-3"
                  heading="You May Also Like"
                />
              </div>
            )}

          <div className="bg-white lg:px-52">
            <LatestBlogs posts={posts} />
            <CallbackForm />
          </div>
        </div>
        {width > 1023 && <CartCounterButton />}
      </AttributesProvider>
    </>
  );
};
ProductPage.getLayout = getLayout;
export default ProductPage;
