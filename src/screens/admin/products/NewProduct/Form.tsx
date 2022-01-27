import { Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  ICategory,
  IProduct,
  IProductForm,
} from "../../../../@types/products.types";
import { Button } from "../../../../components/Button/Button.style";
import FormInput from "../../../../components/common/FormInput";
import FormSelect from "../../../../components/common/FormSelect";
import { Row, Column, Section } from "../../../../components/GlobalStyles";
import {
  createProduct,
  updateProduct,
} from "../../../../redux/actions/products.actions";
import { AppState } from "../../../../redux/store";
import { notify } from "../../../../utils/helpers";
import ImageUpload from "../ImageUpload";
import { formSchema } from "./validation";

interface IProps {
  product?: IProduct;
  categories?: ICategory[];
}

const colors = [
  {
    label: "White",
    value: "White",
  },
  {
    label: "Red",
    value: "Red",
  },
  {
    label: "Blue",
    value: "Blue",
  },
  {
    label: "Purple",
    value: "Purple",
  },
  {
    label: "Yellow",
    value: "Yellow",
  },
  {
    label: "Green",
    value: "Green",
  },
  {
    label: "Cyan",
    value: "Cyan",
  },
  {
    label: "Black",
    value: "Black",
  },
];

const NewProductForm = ({ product, categories }: IProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    products: { loading },
  } = useSelector((state: AppState) => state);

  const handleSubmit = useCallback(
    async (values: IProductForm) => {
      if (product) {
        // Update Product
        dispatch(
          updateProduct(product._id as string, values, () => {
            notify("success", "Product Updated successfully");
            navigate("/products");
          })
        );
      } else {
        // Create Product
        dispatch(
          createProduct(values, () => {
            notify("success", "Product Created successfully");
            navigate("/products");
          })
        );
      }
    },
    [dispatch, navigate, product]
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
          categories: product?.categories || [],
          countInStock: product?.countInStock || "",
          description: product?.description || "",
          price: product?.price.toFixed(2) || "",
          discount: product?.discount.toFixed(2) || "",
          images: product?.images || [],
          colors: product?.colors || [],
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
                <Typography
                  variant="h4"
                  color="text.primary"
                  fontWeight={"500"}
                >
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
                      <FormSelect
                        name="colors"
                        label="Product Colors"
                        data={colors}
                        multiple
                      />
                    </Column>
                  </Row>
                  <Row justfiyContent="flex-start" width="100%" gap="20%" wrap>
                    <Column justfiyContent="flex-start" width="100%">
                      <FormSelect
                        name="categories"
                        label="Product Categories"
                        data={(categories as ICategory[])?.map(
                          (category: ICategory) => ({
                            label: category.name,
                            value: category.name,
                          })
                        )}
                        multiple
                      />
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
                  <Row justfiyContent="flex-start" width="100%" gap="5%" wrap>
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
                    <Column justfiyContent="flex-start" width="100%">
                      <FormInput
                        type="number"
                        name="discount"
                        label="discount"
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
