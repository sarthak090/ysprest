import isEmpty from 'lodash/isEmpty';
interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: {
    thumbnail: string;
    [key: string]: unknown;
  };
  price: number;
  sale_price?: number;
  quantity?: number;
  [key: string]: unknown;
  language: string;
}
interface Variation {
  id: string | number;
  title: string;
  price: number;
  sale_price?: number;
  quantity: number;
  [key: string]: unknown;
}
export function generateCartItem(item: Item, variation: Variation) {
  const {
    id,
    name,
    slug,
    image,
    price,
    sale_price,
    quantity,
    unit,
    is_digital,
    language,
  } = item;

  if (!isEmpty(variation)) {
    // @ts-ignore
    const variationSingle = variation[0];

    return {
      id: `${id}.${variationSingle.id}`,
      productId: id,
      name: `${name} - ${variationSingle.title}`,
      slug,
      unit,
      is_digital: variationSingle?.is_digital,
      stock: variationSingle.quantity,
      price: Number(
        variationSingle.display_price
          ? variationSingle.display_price
          : variationSingle.display_price
      ),
      image: image?.thumbnail,
      variationId: variationSingle.variation_id,
      language,
    };
  }
  return {
    id,
    name,
    slug,
    unit,
    is_digital,
    image: image?.thumbnail,
    stock: quantity,
    price: Number(sale_price ? sale_price : price),
    language,
  };
}
