import { Formik, Form } from "formik";
import { Container } from "./SignIn.styled";
import { Typography } from "@mui/material";

const SignIn = () => {
  return (
    <Container>
      <div>
        <Typography variant="h1">Login.</Typography>
        <Typography variant="h4">
          Login with your data that you entered during registration
        </Typography>
      </div>
      <img src={"/static/SignIn.png"} alt={"login pic"} />
    </Container>
  );
};

export default SignIn;
