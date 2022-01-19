import * as yup from "yup";

export const formSchema = () =>
  yup.object().shape({
    email: yup.string().email().required("Email address is required"),
    password: yup.string().required("Password is required"),
    remember_me: yup.bool(),
  });
