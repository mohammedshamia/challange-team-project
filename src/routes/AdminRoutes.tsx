import { lazy } from "react";
import { RequireAdmin } from "../components/common/PrivateRouter";

const Products = lazy(() => import("./../screens/admin/products/index"));
const Users = lazy(() => import("../screens/admin/users"));
const UserDetails = lazy(() => import( "../screens/admin/users/UserDetails"));

const CreateNewProduct = lazy(
  () => import("./../screens/admin/products/NewProduct")
);

const Orders = lazy(() => import("../screens/admin/orders"));

const AdminRoutes = [
  {
    path: "/products",
    component: (
      <RequireAdmin>
        <Products />
      </RequireAdmin>
    ),
  },
  {
    path: "/users",
    component: (
      <RequireAdmin>
        <Users />
      </RequireAdmin>
    ),
  },
  {
    path: "/user/:id",
    component: (
        <RequireAdmin>
          <UserDetails />
        </RequireAdmin>
    ),
  },
  {
    path: "/orders",
    component: (
      <RequireAdmin>
        <Orders />
      </RequireAdmin>
    ),
  },
  {
    path: "/products/new",
    component: (
      <RequireAdmin>
        <CreateNewProduct />
      </RequireAdmin>
    ),
  },
  {
    //For Update Products
    path: "/products/:id",
    component: (
      <RequireAdmin>
        <CreateNewProduct />
      </RequireAdmin>
    ),
  },
];

export default AdminRoutes;
