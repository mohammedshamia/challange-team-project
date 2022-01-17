import { Field, FieldProps } from "formik";
import { TextField, FormControlLabel } from "@mui/material";
import { Checkbox, ErrorMessage, Label, Input } from "./FormInput.styled";
import { CSSProperties } from "react";

export interface IFormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  style?: CSSProperties;
}

const FormInput = ({
  name,
  type,
  placeholder,
  label,
  style,
}: IFormInputProps) => (
  <Field name={name} style={{ ...style }}>
    {({
      field /* { name, value, onChange, onBlur } */,
      form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      meta,
    }: FieldProps) => (
      <>
        {label && type !== "checkbox" && <Label htmlFor={name}>{label}</Label>}
        <div style={{ width: "100%", textAlign: "center" }}>
          {type === "textarea" ? (
            <TextField
              name={name}
              onFocus={() => {
                form.getFieldHelpers(name).setTouched(true);
              }}
              onChange={(e) => {
                form.setFieldValue(name, e.target.value);
              }}
              onBlur={(e) => {
                field.onBlur(e);
              }}
              value={field.value}
              placeholder={placeholder}
            ></TextField>
          ) : type === "checkbox" ? (
            <>
              {console.log(field)}
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={field.value}
                    checked={field.value}
                    onChange={(e) => {
                      form.setFieldValue(name, e.target.checked);
                    }}
                  />
                }
                color="text.primary"
                label={<Label>{label}</Label>}
              />
            </>
          ) : (
            <Input
              name={name}
              type={type}
              onFocus={() => {
                form.getFieldHelpers(name).setTouched(true);
              }}
              onChange={(e) => {
                form.setFieldValue(name, e.target.value);
              }}
              onBlur={(e) => {
                field.onBlur(e);
              }}
              value={field.value}
              placeholder={placeholder}
            />
          )}
        </div>
        {meta.touched && meta.error && (
          <ErrorMessage>{meta.error}</ErrorMessage>
        )}
      </>
    )}
  </Field>
);

export default FormInput;
