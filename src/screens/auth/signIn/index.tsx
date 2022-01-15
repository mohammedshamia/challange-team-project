import { Formik, Form } from "formik";
import { Container, LoginForm } from "./SignIn.styled";
import { Typography, Button } from "@mui/material";
import { formSchema } from "./signIn.validation";
import FormInput from "../../../components/common/FormInput";

const SignIn = () => {
  return (
    <Container>
      <LoginForm>
        <Typography variant="h1">Login.</Typography>
        <Typography variant="h3" color="#707070" sx={{ marginBottom: "50px" }}>
          Login with your data that you <br />
          entered during registration
        </Typography>
        <Formik
          initialValues={{ email: "", passowrd: "" }}
          validationSchema={formSchema}
          onSubmit={() => alert("submit")}
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
                <Typography variant="button">Login</Typography>
              </Button>
            </Form>
          )}
        </Formik>
      </LoginForm>
      <img src={"/static/SignIn.png"} alt={"login pic"} />
    </Container>
  );
};

export default SignIn;
