import { useState } from 'react';
import Input from '@/components/ui/forms/input';
import Button from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import {
  PaymentMethodName,
  couponAtom,
  discountAtom,
  paymentGatewayAtom,
  verifiedResponseAtom,
} from '@/store/checkout';
import { useAtom } from 'jotai';
import classNames from 'classnames';
import { useVerifyCoupon } from '@/framework/settings';
import Api from '@/config/WooCommerce';
import usePrice from '@/lib/use-price';
import {
  calculatePaidTotal,
  calculateTotal,
} from '@/store/quick-cart/cart.utils';
import { useCart } from '@/store/quick-cart/cart.context';
import { caluclateDiscount } from '@/store/calculatediscount';
type FormTypes = {
  code: string;
};

const Coupon = ({ theme }: { theme?: 'dark' }) => {
  const { t } = useTranslation('common');
  const { items, isEmpty: isEmptyCart } = useCart();
  const [discount] = useAtom(discountAtom);

  const [hasCoupon, setHasCoupon] = useState(false);
  const available_items = items?.filter(
    (item) => !verifiedResponse?.unavailable_products?.includes(item.id)
  );

  const [coupon, applyCoupon] = useAtom(couponAtom);
  const [verifiedResponse] = useAtom(verifiedResponseAtom);
  const base_amount = calculateTotal(available_items);
  const [gateway] = useAtom<PaymentMethodName>(paymentGatewayAtom);

  const totalPrice = verifiedResponse
    ? calculatePaidTotal(
        {
          totalAmount: base_amount,
          tax: verifiedResponse?.total_tax,
          shipping_charge: verifiedResponse?.shipping_charge,
        },
        Number(discount)
      )
    : 0;
  const { price: total } = usePrice(
    verifiedResponse && {
      amount: totalPrice <= 0 ? 0 : totalPrice,
    }
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>();
  const {
    mutate: verifyCoupon,
    isLoading: loading,
    formError,
  } = useVerifyCoupon();
  if (!hasCoupon && !coupon) {
    return (
      <p
        role="button"
        className="text-xs font-bold text-body transition duration-200 hover:text-accent"
        onClick={() => setHasCoupon(true)}
      >
        {t('text-have-coupon')}
      </p>
    );
  }
  async function onSubmit(code: FormTypes) {
    const res = await Api.get(`coupons?code=${code?.code}`);
    if (res.data && res.data.length > 0) {
      const c = res.data[0];
      calculateCouponDisc(c);
    }
  }

  function percentage(percent: any, total: any) {
    return parseFloat(((percent / 100) * total).toFixed(2));
  }
  function calculateCouponDisc(coupon: any) {
    const sub_total = total.replace('₹', '').replace(',', '');
    const cartData = {
      subtotal: parseFloat(sub_total),
      discountData: {
        type: coupon.discount_type,
        amount: parseFloat(coupon.amount),
      },
      items: available_items.length,
      prepaymentDiscount:
        gateway === 'RAZORPAY' ? percentage(5, base_amount) : 0,
    };

    const disc = caluclateDiscount(cartData);
    console.log(disc);
    const couponFormat = {
      id: 9,
      description: coupon.code,

      type: coupon.discount_type,
      amount: disc?.Discount,
      active_from: '2021-03-28T05:46:42.000Z',
      expire_at: '2024-06-23T05:46:42.000Z',
      created_at: '2021-03-28T05:48:16.000000Z',
      updated_at: '2021-08-19T03:58:34.000000Z',
      deleted_at: null,
      is_valid: true,
    };
    //@ts-ignore
    applyCoupon(couponFormat);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col sm:flex-row"
    >
      <Input
        {...register('code', { required: 'text-coupon-required' })}
        placeholder={t('text-enter-coupon')}
        variant="outline"
        className="mb-4 flex-1 sm:mb-0 ltr:sm:mr-4 rtl:sm:ml-4"
        dimension="small"
        error={t(formError?.code!)}
      />
      <Button
        loading={loading}
        disabled={loading}
        size="small"
        className={classNames('w-full sm:w-40 lg:w-auto', {
          'bg-gray-800 transition-colors hover:bg-gray-900': theme === 'dark',
        })}
      >
        {t('text-apply')}
      </Button>
    </form>
  );
};

export default Coupon;
