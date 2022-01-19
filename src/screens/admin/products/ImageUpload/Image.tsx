import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Field, FieldProps } from "formik";
import { Icon, Typography } from "@mui/material";
import { ImageWrapper } from "../Products.styled";

const Image = () => {
  return (
    <ImageWrapper htmlFor="images">
      <Field name="images">
        {({ field, form }: FieldProps) => (
          <>
            <input
              id="images"
              type={"file"}
              multiple
              style={{ display: "none" }}
              accept="image/*"
              onChange={(e) => {
                form.setFieldValue("images", e.target.files);
              }}
            />
            {field.value && field.value?.[0] ? (
              <img
                src={
                  field.value?.[0] ? URL.createObjectURL(field.value?.[0]) : ""
                }
                alt="images"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <>
                <Icon component={CloudUploadIcon} />
                <Typography variant="caption" color="text.secondary">
                  Product Images (4 images allowed)
                </Typography>
              </>
            )}
          </>
        )}
      </Field>
    </ImageWrapper>
  );
};

export default Image;
