import * as yup from "yup";

export const formSchema = () =>
  yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email address is required"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .required("Password Confirmation is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });
