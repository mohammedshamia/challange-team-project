import * as yup from "yup";

export const formSchema = () =>
  yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email address is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Password Confirmation is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });
