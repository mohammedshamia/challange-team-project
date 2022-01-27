import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { Container } from "../../products/Products.styled";
import { Column, Row, Section } from "../../../../components/GlobalStyles";
import { Button } from "../../../../components/Button/Button.style";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../redux/store";
import { Form, Formik } from "formik";
import { IUserForm } from "../../../../@types/users.types";
import { updateUserSchema } from "./validation";
import FormInput from "../../../../components/common/FormInput";

import { useTheme } from "styled-components";
import { useParams } from "react-router";
import { editUser, getUserByID } from "../../../../redux/actions/user.actions";
import { notify } from "../../../../utils/helpers";

export default function UserDetails() {
  const theme = useTheme();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(getUserByID(params.id as string));
    }
  }, []);

  const { loading, user } = useSelector((state: AppState) => state.users);

  const handleSubmit = (values: IUserForm) => {
    dispatch(
      editUser((user as IUserForm)._id as string, values, () => {
        notify("success", "User Updated successfully");
      })
    );
  };

  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Update User
      </Typography>
      <Formik
        enableReinitialize
        validationSchema={updateUserSchema}
        onSubmit={handleSubmit}
        initialValues={{
          firstName: (user as IUserForm)?.firstName || "",
          lastName: (user as IUserForm)?.lastName || "",
          email: (user as IUserForm)?.email || "",
          isAdmin: (user as IUserForm)?.isAdmin || false,
          profileImage: (user as IUserForm)?.profileImage || "",
          dateOfBirth: (user as IUserForm)?.dateOfBirth || "",
        }}
      >
        {({ values, errors }) => (
          <Form style={{ width: "100%" }}>
            {console.log(errors, "errors")}
            <Section style={{ padding: "30px", marginBlock: "15px" }}>
              <Row justfiyContent="center" width="100%" gap="20px" wrap reverse>
                <Column justfiyContent="flex-start" width="100%">
                  <Column justfiyContent="flex-start" width="100%" gap="2em">
                    <Row
                      justfiyContent="flex-start"
                      width="100%"
                      gap="20%"
                      wrap
                    >
                      <Column justfiyContent="flex-start" width="100%">
                        <FormInput name="firstName" label="First name" />
                      </Column>
                      <Column justfiyContent="flex-start" width="100%">
                        <FormInput name="lastName" label="Last name" />
                      </Column>
                    </Row>
                    <Row
                      justfiyContent="flex-start"
                      width="100%"
                      gap="20%"
                      wrap
                    >
                      <Column justfiyContent="flex-start" width="100%">
                        <FormInput name="email" label="Email" />
                      </Column>
                      <Column justfiyContent="flex-start" width="100%">
                        <FormInput
                          name="password"
                          label="Password"
                          type="password"
                        />
                      </Column>
                    </Row>
                    <Row
                      justfiyContent="flex-start"
                      width="100%"
                      gap="20%"
                      wrap
                    >
                      <Column justfiyContent="flex-start" width="100%">
                        <FormInput
                          name="dateOfBirth"
                          label="Date Of Birth"
                          type="date"
                        />
                      </Column>
                      <Column justfiyContent="flex-start" width="100%">
                        <FormInput
                          name="isAdmin"
                          label="Is Admin?"
                          type="radio"
                          firstValue={true}
                          secondValue={false}
                        />
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Section>
            <Row justfiyContent="flex-end" width="100%">
              <Button
                type="submit"
                background={theme.palette.success.main}
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  padding: "10px",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                  },
                }}
                disabled={loading}
              >
                <Typography
                  variant="body2"
                  color="#fff"
                  sx={{ paddingInline: "2em", textTransform: "capitalize" }}
                >
                  Updates
                </Typography>
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
