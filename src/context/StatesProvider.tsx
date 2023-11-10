import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Props = {
  children: ReactNode;
};

type States = {
  isDesktop: boolean;
  setIsDesktop: React.Dispatch<React.SetStateAction<boolean>>;
  animateNavbar: boolean;
  setAnimateNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  showMessage: boolean;
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultStates: States = {
  isDesktop: false,
  setIsDesktop: () => {},
  animateNavbar: false,
  setAnimateNavbar: () => {},
  language: "en",
  setLanguage: () => {},
  showMessage: false,
  setShowMessage: () => {},
};

const StatesContext = createContext<States>(defaultStates);

const StatesProvider = ({ children }: Props) => {
  const [animateNavbar, setAnimateNavbar] = useState(false);
  const desktopSize = 1024;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= desktopSize);
  const [language, setLanguage] = useState("en");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth >= desktopSize);
    };

    // Add event listener for resizing
    window.addEventListener("resize", checkScreenWidth);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <StatesContext.Provider
      value={{
        isDesktop,
        setIsDesktop,
        animateNavbar,
        setAnimateNavbar,
        language,
        setLanguage,
        showMessage,
        setShowMessage,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useStatesContext = () => useContext(StatesContext);

export default StatesProvider;
