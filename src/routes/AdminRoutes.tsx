import  React , { lazy } from "react";

const Products = React.lazy(() => import("./../screens/admin/products/index"));

const CreateNewProduct = lazy(() => import("./../screens/admin/products/createNewProduct"));



const AdminRoutes = [
    {
        path: "/products",
        component: Products
    },
    {
        path: "/create-new-product",
        component: CreateNewProduct
    },

];

export default AdminRoutes;
