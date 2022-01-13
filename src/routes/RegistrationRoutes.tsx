import React, { lazy } from "react";

const SignUp = React.lazy(() => import("../screens/auth/SignUp"));

const Login = lazy(() => import("../screens/auth/Login"));

const ForgotPassword = lazy(() => import("../screens/auth/ForgetPassword"));

const AuthRoutes = [
  {
    path: "/auth/signup",
    component: <SignUp />,
  },
  {
    path: "/auth/login",
    component: <Login />,
  },
  {
    path: "/auth/forgot-password",
    component: <ForgotPassword />,
  },
];

export default AuthRoutes;
