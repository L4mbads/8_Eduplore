import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full bg-gray">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App
