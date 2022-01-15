import { Field, FieldProps } from "formik";
import { Input as MUIinput, TextField } from "@mui/material";
import styled from "styled-components";

export interface IFormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export const Label = styled("label")`
  color: #242424; //${(props) => props.theme.palette.text.primary};
`;

export const Input = styled(MUIinput)`
  border: 1px solid #242424;
  width: 100%;
  padding: 11px;
  border-radius: 6px;
  color: ${(props) => props.theme.palette.grey.A700};
  /**
    border: 1px solid ${(props) => props.theme.palette.text.primary};
    width: 100%;
    padding: 11px;
    border-radius: 6px;
    color: ${(props) => props.theme.palette.text.secondary};
  */
  &::before,
  &::after {
    border-bottom: none;
  }
`;

const FormInput = ({ name, type, placeholder, label }: IFormInputProps) => (
  <Field name={name}>
    {({
      field /* { name, value, onChange, onBlur } */,
      form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      meta,
    }: FieldProps) => (
      <>
        <Label htmlFor={name}>{label}</Label>
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
          {meta.touched && meta.error && (
            <div style={{ color: "red" }}>{meta.error}</div>
          )}
        </div>
      </>
    )}
  </Field>
);

export default FormInput;
