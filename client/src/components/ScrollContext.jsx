import { createContext, useContext, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom"

// Create the context
const ScrollContext = createContext();

// Create a provider component
export const ScrollProvider = ({ children }) => {
  const layananRef = useRef(null);
  const beasiswaRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.body.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <ScrollContext.Provider value={{ layananRef, beasiswaRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the scroll context
export const useScroll = () => {
  return useContext(ScrollContext);
};
