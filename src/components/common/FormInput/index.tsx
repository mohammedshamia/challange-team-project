import { Field, FieldProps } from "formik";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import {
  Checkbox,
  ErrorMessage,
  Label,
  Input,
  TextArea,
  Radio,
} from "./FormInput.styled";
import { CSSProperties, default as React } from "react";
import { formatDate } from "../../../utils/helpers";
import { useTheme } from "styled-components";
export interface IFormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  style?: CSSProperties;
  firstValue?: string | boolean;
  secondValue?: string | boolean;
  firstLabel?: number | string;
  secondLabel?: number | string;
}

const FormInput = ({
  name,
  type,
  placeholder,
  label,
  style,
  firstValue,
  secondValue,
  firstLabel,
  secondLabel,
}: IFormInputProps) => {
  const theme = useTheme();

  return (
    <Field name={name} style={{ ...style }}>
      {({
        field /* { name, value, onChange, onBlur } */,
        form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }: FieldProps) => (
        <>
          {label && type !== "checkbox" && (
            <Label htmlFor={name}>{label}</Label>
          )}
          <div style={{ width: "100%", textAlign: "center" }}>
            {type === "textarea" ? (
              <TextArea
                style={{ width: "100%" }}
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
                minRows={5}
              ></TextArea>
            ) : type === "checkbox" ? (
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
            ) : type === "radio" ? (
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={field.value}
                  onChange={(e) => {
                    form.setFieldValue(name, e.target.value);
                  }}
                >
                  <FormControlLabel
                    value={firstValue}
                    control={<Radio />}
                    label="Admin"
                    style={{ color: theme.palette.text.primary }}
                  />
                  <FormControlLabel
                    value={secondValue}
                    control={<Radio />}
                    label="Not Admin"
                    style={{ color: theme.palette.text.primary }}
                  />
                </RadioGroup>
              </FormControl>
            ) : (
              <>
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
                  value={
                    type === "date" ? formatDate(field.value) : field.value
                  }
                  placeholder={placeholder}
                />
              </>
            )}
          </div>
          {meta.touched && meta.error && (
            <ErrorMessage>{meta.error}</ErrorMessage>
          )}
        </>
      )}
    </Field>
  );
};

export default FormInput;
