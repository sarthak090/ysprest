export const caluclateDiscount = (cartData) => {
  const { items, discountData, subtotal, prepaymentDiscount } = cartData;

  if (discountData == undefined) {
    return getDiscountData(subtotal, 0);
  }

  if (discountData.type == 'fixed_product') {
    const discountAmount = items * discountData.amount;
    return getDiscountData(subtotal, discountAmount, prepaymentDiscount);
  }
  if (discountData.type == 'fixed_cart') {
    const discountAmount = discountData.amount;
    return getDiscountData(subtotal, discountAmount, prepaymentDiscount);
  }
  if (discountData.type == 'percent') {
    const discountAmount = percentage(subtotal, discountData.amount);

    return getDiscountData(subtotal, discountAmount, prepaymentDiscount);
  }
};
const percentage = (num, per) => (num / 100) * per;

const getDiscountData = (subtotal, discount, prepaymentDiscount) => {
  return {
    Discount: discount + prepaymentDiscount,
    SubTotal: subtotal,
    Total: subtotal - discount - prepaymentDiscount,
  };
};

const totalQuantity = (items) =>
  getSumOfArr(items.map((item) => item.quantity));

export const getSubTotal = (cartData) =>
  getSumOfArr(cartData.items.map((product) => product.total));
export const getStripeTotal = (cartData) =>
  caluclateDiscount(cartData).Total * 100;
const getSumOfArr = (arr) => arr.reduce((acc, sum) => acc + sum);
