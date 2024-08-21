import { ProductType } from "@/types/productTypes";

export const convertProduct = (product: ProductType | undefined) => {
  if (product) {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      count: product.count,
      imageUrl: product.imageUrl,
      width: product.size.width,
      height: product.size.height,
      weight: parseInt(
        product?.weight.substring(0, product?.weight.length - 2)
      ),
    };
  }
  return {};
};
