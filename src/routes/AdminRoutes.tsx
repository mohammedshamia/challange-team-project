import { lazy } from "react";

const Products = lazy(() => import("./../screens/admin/products/index"));
const Users = lazy(() => import("../screens/admin/users"));

const CreateNewProduct = lazy(
  () => import("./../screens/admin/products/NewProduct")
);

const AdminRoutes = [
  {
    path: "/products",
    component: <Products />,
  },
  {
    path: "/users",
    component: <Users />,
  },
  {
    path: "/products/new",
    component: <CreateNewProduct />,
  },
  {
    //For Update Products
    path: "/products/:id",
    component: <CreateNewProduct />,
  },
];

export default AdminRoutes;
