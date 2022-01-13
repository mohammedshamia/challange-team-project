import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

// import { roles } from "../utils/role";
import RegistrationRoutes from "./RegistrationRoutes";
import AdminRoutes from "./AdminRoutes";

const RedirectRoute = [
  {
    path: "/",
    component: () => <Navigate to="/" />,
  },
];
const ErrorRoute = [
  {
    path: "*",
    component: () => <Navigate to="/404" />,
  },
];

const HomePage = lazy(() => import("../screens/home"));
const ShoppingCart = lazy(() => import("../screens/home"));
const ReviewOrder = lazy(() => import("../screens/home"));
const SearchPage = lazy(() => import("../screens/home"));
const ProductDetails = lazy(() => import("../screens/home"));
const Profile = lazy(() => import("../screens/home"));

const RootRoutes = {
  routes: [
    ...RegistrationRoutes,
    {
      path: "/",
      exact: true,
      component: <HomePage />,
    },
    {
      path: "/shopping-cart",
      component: <ShoppingCart />,
    },
    {
      path: "/review-order",
      component: <ReviewOrder />,
    },
    {
      path: "/search",
      component: <SearchPage />,
    },
    {
      path: "/productDetails/:id",
      component: <ProductDetails />,
    },
    {
      path: "/profile",
      component: <Profile />,
    },
    ...AdminRoutes,
    ...RedirectRoute,
    ...ErrorRoute,
  ],
};

export default RootRoutes;
