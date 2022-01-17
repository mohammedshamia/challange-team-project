import styled from "styled-components";
import { Button as Btn, Divider as Divider_ } from "@mui/material";
import { Link as Link_ } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 175px;
  margin-inline: 140px;
  & img {
    margin-block: auto;
    width: 1000px;
  }

  @media (min-width: 1500px) {
    & img {
      width: 800px;
    }
  }

  @media (max-width: 768px) {
    & {
      justify-content: center;
    }
    & img {
      display: none;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 5em;
  gap: 50px;
  margin-block: 2em;
  & form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const Button = styled(Btn)`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  text-transform: capitalize;
`;

export const Link = styled(Link_)`
  color: ${(props) => props.theme.palette.text.primary};
  text-decoration: none;
  text-align: center;
  font-size: 22px;
`;

export const Divider = styled(Divider_)`
  color: #707070;
  text-align: center;
  font-size: 22px;
  margin-top: 1em;
`;

export const SignUpButton = styled(Btn)`
  margin-top: 20px;
  background-color: inherit;
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 20px;
  width: fit-content;
  text-transform: capitalize;
  margin-inline: auto;
  padding-inline: 2em;
`;
