import { Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { IProduct, IProductForm } from "../../../../@types/products.types";
import { Button } from "../../../../components/Button/Button.style";
import FormInput from "../../../../components/common/FormInput";
import { Row, Column, Section } from "../../../../components/GlobalStyles";
import { createProduct } from "../../../../redux/actions/products.actions";
import { AppState } from "../../../../redux/store";
import ImageUpload from "../ImageUpload";
import { formSchema } from "./validation";

interface IProps {
  product?: IProduct;
}

const NewProductForm = ({ product }: IProps) => {
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
      enableReinitialize
      validationSchema={formSchema}
      onSubmit={handleSubmit}
      initialValues={
        {
          name: product?.name || "",
          brand: product?.brand || "",
          category: product?.categories?.[0] || "",
          countInStock: product?.countInStock || "",
          description: product?.description || "",
          ID: product?._id || "",
          price: product?.price || "",
          images: product?.images || [],
        } as IProductForm
      }
    >
      {({ values, errors }) => (
        <Form style={{ width: "100%" }}>
          <Section style={{ padding: "30px", marginBlock: "15px" }}>
            <Row justfiyContent="center" width="100%" gap="20px" wrap reverse>
              <Column
                justfiyContent="flex-start"
                width="fit-content"
                style={{ marginBlock: "auto" }}
              >
                <ImageUpload values={values} errors={errors} />
              </Column>
              <Column justfiyContent="flex-start" width="100%">
                <Typography variant="h6" color="text.primary">
                  Product Details
                </Typography>
                <Column justfiyContent="flex-start" width="100%" gap="2em">
                  <Row justfiyContent="flex-start" width="100%" gap="20%" wrap>
                    <Column justfiyContent="flex-start" width="100%">
                      <FormInput name="name" label="Product name" />
                    </Column>
                    <Column justfiyContent="flex-start" width="100%">
                      <FormInput name="brand" label="Product Brand" />
                    </Column>
                  </Row>
                  <Row justfiyContent="flex-start" width="100%" gap="20%" wrap>
                    <Column justfiyContent="flex-start" width="100%">
                      <FormInput name="ID" label="Product ID" />
                    </Column>
                    <Column justfiyContent="flex-start" width="100%">
                      <FormInput name="category" label="Product Category" />
                    </Column>
                  </Row>
                  <Row justfiyContent="flex-start" width="100%" gap="20%">
                    <Column justfiyContent="flex-start" width="100%">
                      <FormInput
                        type="textarea"
                        name="description"
                        label="Product Description"
                      />
                    </Column>
                  </Row>
                  <Row justfiyContent="flex-start" width="100%" gap="20%" wrap>
                    <Column justfiyContent="flex-start" width="100%">
                      <FormInput
                        type="number"
                        name="countInStock"
                        label="Count in Stock"
                      />
                    </Column>
                    <Column justfiyContent="flex-start" width="100%">
                      <FormInput type="number" name="price" label="Price" />
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
                {Boolean(product) ? "Update Product" : "Create New Product"}
              </Typography>
            </Button>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default NewProductForm;
