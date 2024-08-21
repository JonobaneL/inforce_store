import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.tsx";
import RevalidateProvider from "./context/revalidateContext.tsx";
import StoreRoutes from "./routes/index.tsx";
import FilterProvider from "./context/filterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-full min-h-dvh flex flex-col bg-back">
      <BrowserRouter>
        <RevalidateProvider>
          <FilterProvider>
            <>
              <Header />
              <div className="w-full h-full px-20">
                <div className="w-full max-w-[1280px] mx-auto py-10">
                  <StoreRoutes />
                </div>
              </div>
            </>
          </FilterProvider>
        </RevalidateProvider>
      </BrowserRouter>
    </div>
  </StrictMode>
);
