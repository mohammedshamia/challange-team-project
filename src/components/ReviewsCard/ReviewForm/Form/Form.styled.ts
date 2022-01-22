import styled from "styled-components";
import { Form } from "formik";
import { TextareaAutosize } from "@mui/material";

export const FormContiner = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${(props) => props.theme.palette.text.disabled};
  width: 100%;
  padding: 10px 20px;
  font-family: "Mulish";
`;

export const AddReviewButton = styled.button`
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  background: ${(props) => props.theme.palette.primary.main};
  padding: 16px;
  font-size: 24px;
  color: #242424; 
  width: 60%;
  align-self: flex-end;
  margin-bottom: "20px";
  cursor: pointer;
`;

export const TextArea = styled(TextareaAutosize)((props) => ({
  height: " 123px",
  padding: "16px",
  resize: "vertical",
  fontSize: "1rem",
  fontFamily: "Mulish",
  outline: "none",
  background: "none",
  color: props.theme.palette.text.primary,
}));
