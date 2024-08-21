import { useAsync } from "@/hooks/useAsync";
import DeleteDialog from "./DeleteDialog";
import Loader from "./ui/Loader";
import { ProductType } from "@/types/productTypes";
import { useRevalidateContext } from "@/context/revalidateContext";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "@/context/filterContext";
import { generateProductsRequest } from "@/utils/generateProductRequest";

const ProductsList = () => {
  const { revalidateTriger } = useRevalidateContext();
  const { sort } = useFilterContext();
  const productEndpoint = generateProductsRequest(sort);
  const [isLoading, _, products] = useAsync<ProductType[]>(
    () => fetch(productEndpoint),
    [revalidateTriger, sort]
  );
  const navigate = useNavigate();
  if (isLoading) return <Loader />;
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,_1fr))] gap-3 justify-items-center">
      {products?.map((item) => (
        <div
          onClick={() => navigate(`products/${item.id}`)}
          key={item.id}
          className="bg-white p-3 rounded hover:shadow-md transition-all duration-150 cursor-pointer"
        >
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full object-contain aspect-square mb-2"
          />
          <h2>{item.name}</h2>
          <div className="flex items-center justify-between">
            <p className="text-right mt-2">{item.price}$</p>

            <DeleteDialog product_id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
