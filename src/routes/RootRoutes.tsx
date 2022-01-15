import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

// import { roles } from "../utils/role";
import AuthRoutes from "./AuthRoutes";
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

const HomePage = lazy(() => import("./../screens/landingPage/index"));
const ShoppingCart = lazy(() => import("./../screens/landingPage/index"));
const ReviewOrder = lazy(() => import("./../screens/landingPage/index"));
const SearchPage = lazy(() => import("./../screens/landingPage/index"));
const ProductDetails = lazy(() => import("./../screens/landingPage/index"));
const Profile = lazy(() => import("./../screens/landingPage/index"));

const RootRoutes = {
  routes: [
    ...AuthRoutes,
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
