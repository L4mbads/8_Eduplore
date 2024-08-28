import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";

import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserPage from "./components/UserPage";
import BeasiswaPage from "./components/BeasiswaPage";
import Home from "./components/Home";
import SuperExclusive from "./components/SuperExclusive";
import SuperCamp from "./components/SuperCamp";
import SuperBoost from "./components/SuperBoost";
import PaymentSuccess from "./components/PaymentSuccess";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/beasiswa",
        element: <BeasiswaPage />,
      },
      {
        path: "/superexclusive",
        element: <SuperExclusive />,
      },
      {
        path: "/supercamp",
        element: <SuperCamp />,
      },
      {
        path: "/superboost",
        element: <SuperBoost />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user/:id",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/payment",
    element: <PaymentSuccess />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);