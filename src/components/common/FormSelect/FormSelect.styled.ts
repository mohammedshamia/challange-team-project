import { Select as MUISelect } from "@mui/material";
import styled from "styled-components";

export const Select = styled(MUISelect)`
  border: 1px solid ${(props) => props.theme.palette.text.primary};
  width: 90%;
  padding-inline: 11px;
  height: 40px;
  border-radius: 6px;
  color: ${(props) => props.theme.palette.text.secondary};
`;

export const ErrorMessage = styled.span`
  color: red;
  text-align: center;
  font-family: "Mulish";
`;

export const Label = styled("label")`
  font-size: 22px;
  font-family: "Mulish";
  color: ${(props) => props.theme.palette.text.primary};
  margin-block: 5px;
`;
