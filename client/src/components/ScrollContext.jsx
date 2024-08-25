import { createContext, useContext, useRef } from "react";

// Create the context
const ScrollContext = createContext();

// Create a provider component
export const ScrollProvider = ({ children }) => {
  const layananRef = useRef(null);
  const beasiswaRef = useRef(null);

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
