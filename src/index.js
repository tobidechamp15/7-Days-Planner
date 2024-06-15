import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import NewPlan from "./Components/NewPlan";
import Plans from "./Components/Plans";
import Profile from "./Components/Profile";

// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/home",
        element: <Home />,
      },
      {
        path: "/dashboard/new-plan",
        element: <NewPlan />,
      },
      {
        path: "/dashboard/plans",
        element: <Plans />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
