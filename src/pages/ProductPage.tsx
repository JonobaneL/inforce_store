import EditProductDialog from "@/components/EditProductDialog";
import ProductInfo from "@/components/ProductInfo";
import Loader from "@/components/ui/Loader";
import { useRevalidateContext } from "@/context/revalidateContext";
import { useAsync } from "@/hooks/useAsync";
import { ProductType } from "@/types/productTypes";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const { revalidateTriger } = useRevalidateContext();
  const [isLoading, _, product] = useAsync<ProductType>(
    () => fetch(`http://localhost:3000/products/${id}`),
    [revalidateTriger]
  );
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="flex gap-40">
        <div className="w-1/2 aspect-square p-10 rounded-lg bg-white">
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className="w-full object-contain aspect-square"
          />
        </div>
        <div className="w-1/2 py-4 text-lg">
          <ProductInfo product={product} />

          <EditProductDialog product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
