import { Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useCallback } from "react";
import styled from "styled-components";
import * as yup from "yup";
import FormInput from "../../../../components/common/FormInput";
import { FormWrapper } from "../../../auth/signIn/SignIn.styled";
const changeformSchema = () =>
  yup.object().shape({
    newpassword: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .required("Password Confirmation is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

const ChangePasswordForm = styled(FormWrapper)`
  margin-right: 0;
`;
export default function ChangePassword() {
  const handleSubmit = useCallback(() => {}, []);
  return (
    <ChangePasswordForm>
      <Formik
        initialValues={{
          newpassword: "",
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
          </Form>
        )}
      </Formik>
    </ChangePasswordForm>
  );
}
