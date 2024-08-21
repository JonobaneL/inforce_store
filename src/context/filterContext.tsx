import { createContext, ReactNode, useContext, useState } from "react";

type FilterContextParams = {
  sort: string;
  setSort: (value: string) => void;
};

const filterContext = createContext<FilterContextParams | null>(null);

export const useFilterContext = () => {
  return useContext(filterContext) as FilterContextParams;
};

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [sort, setSort] = useState("name");

  return (
    <filterContext.Provider value={{ sort, setSort }}>
      {children}
    </filterContext.Provider>
  );
};

export default FilterProvider;
