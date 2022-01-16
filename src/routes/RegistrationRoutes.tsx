import React, { lazy } from "react";

const SignUp = React.lazy(() => import("./../screens/registration/signUp"));

const SignIn = lazy(() => import("./../screens/registration/signIn"));

const ForgotPassword = lazy(
  () => import("./../screens/registration/forgetPassword")
);

const RegistrationRoutes = [
  {
    path: "/register/signup",
    component: <SignUp />,
  },
  {
    path: "/register/signin",
    component: <SignIn />,
  },
  {
    path: "/register/forgot-password",
    component: <ForgotPassword />,
  },
];

export default RegistrationRoutes;
