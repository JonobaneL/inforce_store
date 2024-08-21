export const generateProductsRequest = (sort: string) => {
  if (sort == "name")
    return `http://localhost:3000/products?_sort=name&_order=asc`;
  return `http://localhost:3000/products?_sort=cout&_order=asc`;
};
