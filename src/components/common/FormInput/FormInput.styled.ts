import { Input as MUIinput, Checkbox as ChkBox } from "@mui/material";
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
  color: ${(props) => props.theme.palette.text.primary};
`;

export const ErrorMessage = styled.span`
  color: red;
  text-align: center;
`;

export const Input = styled(MUIinput)`
  border: 1px solid ${(props) => props.theme.palette.text.primary};
  width: 100%;
  padding: 11px;
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
