import styled from "styled-components";
import { Button as B } from "@mui/material";

export const Container = styled.div`
  max-width: 60%;
  margin-inline: auto;
  margin-top: 2em;
  display: flex;
  flex-direction: column;

  /* & .ag-center-cols-container {
    width: 100% !important;
  }
  & .ag-header-container {
    width: 100% !important;
  } */

  & .ag-header-cell-label {
    justify-content: center;
    text-align: center;
  }
  & .ag-cell-value {
    justify-content: center;
    text-align: center;
  }
`;

export const Button = styled(B)((props) => ({
  background: props.theme.palette.success.main,
  borderRadius: "10px",
  fontSize: "24px",
  border: "none",
  padding: "10px",
  textDecoration: "none",
  height: "fit-content",
  width: "fit-content",
  "&:hover": {
    opacity: "0.8",
    background: props.theme.palette.success.main,
  },
}));

export const ImageContainer = styled.div`
  border: 1px dashed ${(props) => props.theme.palette.text.secondary};
  opacity: 1;
  background-color: transparent;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  & svg {
    width: 200px;
    height: 200px;
    fill: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const IconWrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  & svg {
    width: 50px;
    height: 50px;
    fill: ${({ theme }) => theme.palette.text.primary};
  }
`;
