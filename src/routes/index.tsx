import App from "@/App";
import ProductPage from "@/pages/ProductPage";
import { Route, Routes } from "react-router-dom";

const StoreRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="products/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default StoreRoutes;
