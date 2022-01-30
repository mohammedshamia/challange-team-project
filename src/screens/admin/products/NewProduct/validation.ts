import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Product Name is required"),
  brand: yup.string().required("Product Brand is required"),
  categories: yup
    .array()
    .of(yup.string())
    .min(1, "At least one category is required")
    .required("Product Categories is required"),
  description: yup.string().required("Product Description is required"),
  countInStock: yup
    .number()
    .required("Product Count In Stock is required")
    .typeError("Product Price is as number"),
  price: yup
    .number()
    .required("Product Price is required")
    .typeError("Product Price is as number"),
  discount: yup
    .number()
    .min(0)
    .required("Product discount is required")
    .typeError("Product discount is as number"),
  images: yup.lazy((val) =>
    Array.isArray(val) && typeof val[0] === "string"
      ? yup
          .array()
          .of(yup.string())
          .min(1, "At least one image is required")
          .nullable()
      : yup
          .array()
          .of(yup.object())
          .min(1, "At least one image is required")
          .nullable()
  ),
});
