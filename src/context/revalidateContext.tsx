import { createContext, ReactNode, useContext, useState } from "react";

type RevalidateContextParams = {
  revalidateTriger: boolean;
  revalidateRoute: () => void;
};

const revalidateContext = createContext<RevalidateContextParams | null>(null);

export const useRevalidateContext = () => {
  return useContext(revalidateContext) as RevalidateContextParams;
};

const RevalidateProvider = ({ children }: { children: ReactNode }) => {
  const [revalidateTriger, setTriger] = useState(false);
  const revalidateRoute = () => {
    setTriger((p) => !p);
  };
  return (
    <revalidateContext.Provider value={{ revalidateTriger, revalidateRoute }}>
      {children}
    </revalidateContext.Provider>
  );
};

export default RevalidateProvider;
