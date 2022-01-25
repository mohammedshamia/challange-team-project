import {
  Input as MUIinput,
  Checkbox as ChkBox,
  TextareaAutosize,
} from "@mui/material";
import styled from "styled-components";

export const Checkbox = styled(ChkBox)`
  color: ${(props) => props.theme.palette.text.primary};
  background-color: inherit;
  &.MuiFormControlLabel-label {
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  font-weight: 500;
  font-family: "Mulish";
  color: ${(props) => props.theme.palette.text.primary};
  margin-block: 5px;
`;

export const ErrorMessage = styled.span`
  color: red;
  text-align: center;
  font-family: "Mulish";
`;

export const Input = styled(MUIinput)`
  border: 1px solid ${(props) => props.theme.palette.text.primary};
  width: 100%;
  padding-inline: 11px;
  height: 40px;
  border-radius: 6px;
  color: ${(props) => props.theme.palette.text.secondary};

  &:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }

  &::before,
  &::after {
    border-bottom: none;
  }
`;

export const TextArea = styled(TextareaAutosize)`
  border: 1px solid ${(props) => props.theme.palette.text.primary};
  padding: 11px;
  border-radius: 6px;
  color: ${(props) => props.theme.palette.text.secondary};
  background-color: transparent;
  outline: none;
`;
