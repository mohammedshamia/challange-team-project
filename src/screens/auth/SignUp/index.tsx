import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Button,
  Container,
  Divider,
  FormWrapper,
  Link,
} from "../signIn/SignIn.styled";
import { Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { formSchema } from "./signUp.validation";
import FormInput from "../../../components/common/FormInput";
import { createUser } from "../../../redux/actions/auth.actions";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = useCallback(
    (values, FormikHelpers) => {
      dispatch(
        createUser(values, () => {
          navigate("/auth/login");
        })
      );
    },
    [navigate, dispatch]
  );
  return (
    <Container>
      <FormWrapper>
        <Typography variant="h1" color="text.primary" fontWeight="900">
          Sign Up.
        </Typography>
        <Typography
          variant="h3"
          color="text.secondary"
          my={"50px"}
          fontSize="32px"
          fontWeight="500"
        >
          Sign up and get exclusive offers from us
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={formSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <FormInput
                name="firstName"
                placeholder="Your First name"
                label={"First Name"}
              />
              <FormInput
                name="lastName"
                placeholder="Your Last name"
                label={"Last Name"}
              />
              <FormInput
                name="email"
                placeholder="name@example.com"
                label={"Enter your email address"}
              />
              <FormInput
                name="password"
                type="password"
                placeholder="******"
                label={"Enter your password"}
              />
              <FormInput
                name="passwordConfirmation"
                type="password"
                placeholder="******"
                label={"Confirm your password"}
              />
              <Button type="submit">
                <Typography
                  variant="h6"
                  color="#000"
                  fontSize="22px"
                  fontWeight="500"
                >
                  Sign up
                </Typography>
              </Button>
              <Divider />
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Have an account ?{" "}
                <Link to={"/auth/login"} color="text.primary">
                  Login
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <img src={"/static/SignUp.png"} alt="SignUp pic" />
    </Container>
  );
};

export default SignUp;
