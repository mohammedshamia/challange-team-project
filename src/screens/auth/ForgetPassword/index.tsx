import { Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useCallback } from "react";
import FormInput from "../../../components/common/FormInput";
import { Divider, Link } from "../signIn/SignIn.styled";
import { Button, Container, FormWrapper } from "./ForgetPassword.styled";
import { formSchema } from "./ForgetPassword.validation";

const ForgetPassword = () => {
  const handleSubmit = useCallback((values) => {}, []);

  return (
    <Container>
      <FormWrapper>
        <Typography variant="h2" color="text.primary">
          Forgot Your Password?
        </Typography>
        <Typography variant="h6" color="text.primary">
          Enter your registered email below to receive password reset
          instruction
        </Typography>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={formSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form style={{ minWidth: "20vw" }}>
              <FormInput
                name="email"
                placeholder="name@example.com"
                label={"Enter your email address"}
              />
              <Button type="submit" onClick={() => {}}>
                <Typography variant="h6" color="#000">
                  Send
                </Typography>
              </Button>
              <Divider />
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Remembered Your Password ?{" "}
                <Link to={"/auth/login"} color="text.primary">
                  Login
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <img src="/static/ForgetPassword.png" alt="ForgetPassword pic" />
    </Container>
  );
};

export default ForgetPassword;
