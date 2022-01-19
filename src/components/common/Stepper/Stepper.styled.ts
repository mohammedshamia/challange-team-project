import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  & .finished {
    & .MuiStepLabel-iconContainer > span {
      opacity: 0.5;
    }
    & .MuiStepLabel-labelContainer > span {
      opacity: 0.5;
    }
  }

  & .not-reached {
    & .MuiStepLabel-iconContainer > span {
      background-color: ${(props) =>
        props.theme.palette.text.secondary} !important;
      color: ${(props) => props.theme.palette.background.default} !important;
    }
    & .MuiStepLabel-labelContainer > span {
      color: ${(props) => props.theme.palette.text.secondary} !important;
    }
  }
`;

export const StepIcon = styled.span`
  background-color: #fcdd06;
  color: #000;
  padding: 5px 10px;
`;
