import  React , { lazy } from "react";

const SignUp = React.lazy(() => import("./../screens/registration/signUp/index"));

const SignIn = lazy(() => import("./../screens/registration/signIn/index"));

const ForgotPassword = lazy(() => import("./../screens/registration/forgetPassword/index"));


const RegistrationRoutes = [
  {
    path: "/register/signup",
    component: SignUp
  },
  {
    path: "/register/signin",
    component: SignIn
  },
  {
    path: "/register/forgot-password",
    component: ForgotPassword
  },
  ];

export default RegistrationRoutes;
