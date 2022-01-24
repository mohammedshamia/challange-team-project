import { lazy } from "react";
import { Navigate } from "react-router-dom";
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
    component: <Navigate to="/404" />,
  },
];

const HomePage = lazy(() => import("../screens/home"));
const ReviewOrder = lazy(() => import("../screens/payment"));
const PaymentSuccess = lazy(() => import("../screens/payment/PaymentSuccess"));
const ShoppingCart = lazy(() => import("../screens/ShoppingCart/ShoppingCart"));
const SearchPage = lazy(() => import("../screens/landingPage/SearchPage"));
const ProductDetails = lazy(() => import("../screens/ProdectPage"));
const Profile = lazy(() => import("../screens/profile"));
const PageNotFound = lazy(() => import("../components/common/PageNotFound"));

const CategoryPage = lazy(() => import("../screens/CategoryPage/CategoryPage"));

const Orders = lazy(() => import("../screens/OrderPage"));


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
      path: "/payment-success",
      component: <PaymentSuccess />,
    },
    {
      path: "/search/:keyword",
      component: <SearchPage />,
    },
    {
      path: "/product/:id",
      component: <ProductDetails />,
    },
    {
      path: "/category/:keyword",
      component: <CategoryPage />,
    },
    {
      path: "/404",
      component: <PageNotFound />,
    },
    {
      path: "/profile",
      component: <Profile />,
    },
    {
      path: "/orders",
      component: <Orders />,
    },
    ...AdminRoutes,
    ...RedirectRoute,
    ...ErrorRoute,
  ],
};

export default RootRoutes;
