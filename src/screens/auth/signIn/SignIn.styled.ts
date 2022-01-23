import styled from "styled-components";
import { Button as Btn, Divider as Divider_ } from "@mui/material";
import { Link as Link_ } from "react-router-dom";

export const Container = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
  margin-inline: 7%;
  & img {
    width: 60%;
    height: 800px;
  }

  @media (max-width: 1500px) {
    & img {
      width: 55%;
      height: 700px;
    }
  }
  @media (max-width: 1200px) {
    & img {
      width: 55%;
      height: 550px;
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
  margin-right: 14rem;
  gap: 50px;

  & form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }

  @media (max-width: 1500px) {
    width: 45%;
    margin-right: 3em;
  }

  @media (max-width: 768px) {
    margin: auto;
    width: 80%;
  }
`;

export const Button = styled(Btn)`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
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

export const SignUpButton = styled(Link_)`
  margin-top: 20px;
  background-color: inherit;
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 20px;
  width: fit-content;
  text-transform: capitalize;
  margin-inline: auto;
  padding-inline: 2em;
  text-decoration: none;
`;
