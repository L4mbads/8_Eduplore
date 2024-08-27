import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ScrollProvider } from "../src/components/ScrollContext";

const App = () => {
  return (

    <ScrollProvider>
      <div className="w-full bg-gray">
        <Navbar />
        <Outlet />
      </div>
    </ScrollProvider>

  );
};
export default App
