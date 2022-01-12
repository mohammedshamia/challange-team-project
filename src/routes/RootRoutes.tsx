import React, {lazy} from "react";
import { Navigate } from 'react-router-dom';
// import { roles } from "../utils/role";
import  RegistrationRoutes from './RegistrationRoutes'
import AdminRoutes from './AdminRoutes'
import App from "../App";

const RedirectRoute = [
    {
        path: "/",
        component: () => <Navigate to="/" />
    }
];
const ErrorRoute = [
    {
        path:"*",
        component: () => <Navigate to="/404" />
    }
];

const HomePage = lazy(() => import("/"));
const ShoppingCart = lazy(() => import("/"));
const ReviewOrder = lazy(() => import("/"));
const SearchPage = lazy(() => import("/"));
const ProductDetails = lazy(() => import("/"));
const Profile = lazy(() => import("/"));


const Routes = [
    ...RegistrationRoutes,
    {
        component: App,

        routes: [
            {
                path: "/",
                exact: true,
                component: HomePage,
            },
            {
                path: "/shopping-cart",
                component: ShoppingCart,
            },
            {
                path: "/review-order",
                component: ReviewOrder,
            },
            {
                path: "/search",
                component: SearchPage,
            },
            {
                path: "/productDetails/:id",
                component: ProductDetails,
            },
            {
                path: "/profile",
                component: Profile,
            },

            ...AdminRoutes,
            ...RedirectRoute,
            ...ErrorRoute,

        ]
    },

];
export default Routes;
