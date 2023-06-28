import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Attorneys from "./pages/Attorneys";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/find-attorney", element: <Attorneys /> },
        // { path: "/login", element: <Login /> },
        // { path: "/register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
