import CartItem from '@/components/cart/cart-item';
import RightSideView from '@/components/checkout/right-side-view';
import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import { useCart } from '@/store/quick-cart/cart.context';
import { useTranslation } from 'next-i18next';
export { getStaticProps } from '@/framework/general.ssr';
import EmptyCartIcon from '@/components/icons/empty-cart';
import CartItemPage from '@/components/cart/cart-item-page';

function cart() {
  const { t } = useTranslation();
  const { items, totalUniqueItems, total, language } = useCart();

  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="bg-white px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div className="m-auto flex w-full max-w-5xl flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
          <div className="w-full space-y-6 lg:max-w-2xl">
            {/* //cart items`` */}
            <div className="flex-grow pt-16 pb-20">
              {items.length > 0 ? (
                items?.map((item) => <CartItemPage item={item} key={item.id} />)
              ) : (
                <div>
                  {/* <EmptyCartIcon width={140} height={176} />
                  <h4 className="mt-6 text-base font-semibold">
                    {t('text-no-products')}
                  </h4> */}
                </div>
              )}
            </div>
          </div>
          <div className="mt-10 mb-10 w-full sm:mb-12 lg:mb-0 lg:w-96">
            <RightSideView />
          </div>
        </div>
      </div>
    </>
  );
}

cart.getLayout = getLayout;
export default cart;
