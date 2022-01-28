import { Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useCallback } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { Button } from "../../../../components/Button/Button.style";
import FormInput from "../../../../components/common/FormInput";
import { FormWrapper } from "../../../auth/signIn/SignIn.styled";
const changeformSchema = () =>
  yup.object().shape({
    newPassword: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .required("Password Confirmation is required")
      .oneOf([yup.ref("newPassword")], "Passwords must match"),
  });

const ChangePasswordForm = styled(FormWrapper)`
  margin-right: 0;
  @media (max-width: 1500px) {
    width: 100%;
    margin-right: 3em;
  }
`;
export default function ChangePassword() {
  const handleSubmit = useCallback(() => {}, []);
  return (
    <ChangePasswordForm>
      <Formik
        initialValues={{
          newPassword: "",
          passwordConfirmation: "",
        }}
        validationSchema={changeformSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Typography variant="h4" color={"text.primary"}>
              Change password{" "}
            </Typography>
            <FormInput
              label={"Enter New password"}
              type="password"
              placeholder="******"
              name="newPassword"
            />
            <FormInput
              name="passwordConfirmation"
              type="password"
              placeholder="******"
              label={"Confirm your password"}
            />
            <Button
              width="150px"
              fontSize="20px"
              style={{ marginTop: "10px" }}
              type="submit"
            >
              Confirm
            </Button>
          </Form>
        )}
      </Formik>
    </ChangePasswordForm>
  );
}
