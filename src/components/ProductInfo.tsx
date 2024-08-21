import { ProductType } from "@/types/productTypes";

type ProductInfoType = {
  product: ProductType | undefined;
};

const ProductInfo = ({ product }: ProductInfoType) => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-text mb-4">{product?.name}</h2>
      <p>Amount: {product?.count}</p>
      <p className="font-semibold mt-3">{product?.price}$</p>
      <div>
        <p className="font-medium mt-3">Size:</p>
        <div className="flex gap-4 pl-2">
          <p>Height: {product?.size.height}</p>
          <p>Width: {product?.size.width}</p>
        </div>
      </div>
      <p className="mt-3">Maximum load: {product?.weight}</p>
    </>
  );
};

export default ProductInfo;
