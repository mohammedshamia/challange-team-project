import * as yup from "yup";

export const formSchema = () =>
  yup.object().shape({
    email: yup.string().email(),
    password: yup.string().min(8),
  });
