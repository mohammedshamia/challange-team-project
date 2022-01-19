import React, { lazy } from "react";

const SignUp = React.lazy(() => import("../screens/auth/SignUp"));

const SignIn = lazy(() => import("../screens/auth/signIn"));

const ForgotPassword = lazy(() => import("../screens/auth/ForgetPassword"));

const AuthRoutes = [
  {
    path: "/auth/signup",
    component: <SignUp />,
  },
  {
    path: "/auth/login",
    component: <SignIn />,
  },
  {
    path: "/auth/forgot-password",
    component: <ForgotPassword />,
  },
];

export default AuthRoutes;
