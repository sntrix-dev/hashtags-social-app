import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";

interface GlobalContextProps {
  isLoading?: boolean;
  isLoggedIn?: boolean;
  setIsLoggedIn?: (value: boolean) => void;
  user?: any;
  setUser?: (value: any) => void;
}

const GlobalContext = createContext<GlobalContextProps>({
  isLoading: true,
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GlobalContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, isLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
