import { Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import { Formik, Form } from "formik";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { IProductForm } from "../../../../@types/products.types";
import API from "../../../../api";
import { Button } from "../../../../components/Button/Button.style";
import FormInput from "../../../../components/common/FormInput";
import { Row, Column, Section } from "../../../../components/GlobalStyles";
import { createProduct } from "../../../../redux/actions/products.actions";
import { AppState } from "../../../../redux/store";
import ImageUpload from "../ImageUpload";
import { formSchema } from "./validation";

const NewProductForm = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: AppState) => state.products);
  const handleSubmit = useCallback(
    async (values: IProductForm) => {
      dispatch(createProduct(values));
    },
    [dispatch]
  );

  return (
    <Formik
      validationSchema={formSchema}
      onSubmit={handleSubmit}
      initialValues={
        {
          name: "",
          brand: "",
          category: "",
          countInStock: "",
          description: "",
          ID: "",
          price: "",
          images: [],
        } as IProductForm
      }
    >
      {({ values, errors }) => (
        <Form style={{ width: "100%" }}>
          <Section style={{ padding: "30px", marginBlock: "15px" }}>
            <Column justfiyContent="center" width="100%" gap="20px">
              <Row
                justfiyContent="flex-start"
                width="fit-content"
                style={{ marginBlock: "auto" }}
              >
                <ImageUpload values={values} errors={errors} />
              </Row>
              <Row justfiyContent="flex-start" width="100%">
                <Typography variant="h6" color="text.primary">
                  Product Details
                </Typography>
                <Row justfiyContent="flex-start" width="100%" gap="2em">
                  <Column justfiyContent="flex-start" width="100%" gap="20%">
                    <Row justfiyContent="flex-start" width="100%">
                      <FormInput name="name" label="Product name" />
                    </Row>
                    <Row justfiyContent="flex-start" width="100%">
                      <FormInput name="brand" label="Product Brand" />
                    </Row>
                  </Column>
                  <Column justfiyContent="flex-start" width="100%" gap="20%">
                    <Row justfiyContent="flex-start" width="100%">
                      <FormInput name="ID" label="Product ID" />
                    </Row>
                    <Row justfiyContent="flex-start" width="100%">
                      <FormInput name="category" label="Product Category" />
                    </Row>
                  </Column>
                  <Column justfiyContent="flex-start" width="100%" gap="20%">
                    <Row justfiyContent="flex-start" width="100%">
                      <FormInput
                        type="textarea"
                        name="description"
                        label="Product Description"
                      />
                    </Row>
                  </Column>
                  <Column justfiyContent="flex-start" width="100%" gap="20%">
                    <Row justfiyContent="flex-start" width="100%">
                      <FormInput
                        type="number"
                        name="countInStock"
                        label="Count in Stock"
                      />
                    </Row>
                    <Row justfiyContent="flex-start" width="100%">
                      <FormInput type="number" name="price" label="Price" />
                    </Row>
                  </Column>
                </Row>
              </Row>
            </Column>
          </Section>
          <Column justfiyContent="flex-end" width="100%">
            <Button
              type="submit"
              background={theme.palette.success.main}
              sx={{
                width: "fit-content",
                height: "fit-content",
                padding: "10px",
              }}
              disabled={loading}
            >
              <Typography
                variant="body2"
                color="#fff"
                sx={{ paddingInline: "2em", textTransform: "capitalize" }}
              >
                Create New Product
              </Typography>
            </Button>
          </Column>
        </Form>
      )}
    </Formik>
  );
};

export default NewProductForm;
