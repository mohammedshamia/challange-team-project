import { useCallback, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import {
  Container,
  FormWrapper,
  Button,
  Link,
  Divider,
  SignUpButton,
} from "./SignIn.styled";
import { Typography } from "@mui/material";
import { formSchema } from "./signIn.validation";
import FormInput from "../../../components/common/FormInput";
import { useNavigate } from "react-router-dom";
import { IUserLogin } from "../../../@types/types";

const SignIn = () => {
  const [state, setState] = useState<IUserLogin>({
    email: "",
    remember_me: false,
  });

  const navigate = useNavigate();

  const handleSubmit = useCallback((values) => {
    if (values.remember_me) {
      const { password, ...rest } = values;
      localStorage.setItem("RememberMe", JSON.stringify(rest));
    } else {
      localStorage.removeItem("RememberMe");
    }
  }, []);

  const handleRedirect = useCallback(
    () => navigate("/auth/signup"),
    [navigate]
  );

  useEffect(() => {
    let data = localStorage.getItem("RememberMe");
    const user: IUserLogin = data && JSON.parse(data);
    if (user) {
      setState(user);
    }
  }, []);

  return (
    <Container>
      <FormWrapper>
        <Typography variant="h1" color="text.primary">
          Login.
        </Typography>
        <Typography variant="h4" color="text.secondary">
          Login with your data that you entered during registration
        </Typography>
        <Formik
          enableReinitialize
          initialValues={{
            email: state.email || "",
            password: "",
            remember_me: state.remember_me || false,
          }}
          validationSchema={formSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
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
              <Button type="submit">
                <Typography variant="h6" color="#000">
                  Login
                </Typography>
              </Button>
              <FormInput
                name="remember_me"
                type="checkbox"
                label={"Remember me"}
              />
              <Link to={"/auth/forgot-password"}>Forgot your password?</Link>
              <Divider />
              <SignUpButton type="button" onClick={handleRedirect}>
                <Typography variant="h6" color="text.primary">
                  Sign up now
                </Typography>
              </SignUpButton>
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <img src={"/static/SignIn.png"} alt={"login pic"} />
    </Container>
  );
};

export default SignIn;
