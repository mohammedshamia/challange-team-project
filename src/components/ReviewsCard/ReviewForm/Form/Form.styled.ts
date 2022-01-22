import styled from "styled-components";
import { Form } from "formik";

export const FormContiner = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(props) => props.theme.palette.text.disabled};
  width: 100%;
  padding: 10px 20px;
  font-family: "Mulish";
`;

export const AddReviewButton = styled.button`
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  background: ${(props) => props.theme.palette.primary.main};
  height: 62px;
  font-size: 24px;
  color: "#000";
  width: 324px;
  margin-left: 32%;
  margin-bottom: "20px";
  cursor: pointer;
`;
