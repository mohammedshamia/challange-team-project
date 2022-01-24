import React, { lazy } from "react";
import { RequireAuth } from "../components/common/PrivateRouter";

const SignUp = React.lazy(() => import("../screens/auth/SignUp"));

const SignIn = lazy(() => import("../screens/auth/signIn"));

const ForgotPassword = lazy(() => import("../screens/auth/ForgetPassword"));

const AuthRoutes = [
  {
    path: "/auth/signup",
    component: (
      <RequireAuth>
        <SignUp />
      </RequireAuth>
    ),
  },
  {
    path: "/auth/login",
    component: (
      <RequireAuth>
        <SignIn />
      </RequireAuth>
    ),
  },
  {
    path: "/auth/forgot-password",
    component: (
      <RequireAuth>
        <ForgotPassword />
      </RequireAuth>
    ),
  },
];

export default AuthRoutes;
