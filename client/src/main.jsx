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

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {

        path: "/signup",
        element: <Signup />,

      },
      {

        path: "/beasiswa",
        element: <BeasiswaPage />,

      },

    ],
  },
  {
    path: "/user/:id",
    element: <App />,
    children: [
      {
        path: "/user/:id",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Record />,
      },
    ],
  },
  {
    path: "/about",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);