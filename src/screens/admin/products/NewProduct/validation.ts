import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Product Name is required"),
  brand: yup.string().required("Product Brand is required"),
  ID: yup.string().required("Product ID is required"),
  category: yup.string().required("Product Category is required"),
  description: yup.string().required("Product Description is required"),
  countInStock: yup
    .number()
    .required("Product Count In Stock is required")
    .typeError("Product Price is as number"),
  price: yup
    .number()
    .required("Product Price is required")
    .typeError("Product Price is as number"),
  images: yup
    .array()
    .of(yup.mixed().oneOf([yup.string(), yup.object()], "Image is required"))
    .nullable()
    .length(1, "At least one Image is required"),
});
