import styled from "styled-components";
import { Container as Container_, Button } from "@mui/material";
import { Link as Link_ } from "react-router-dom";

export const Container = styled(Container_)`
  width: 100%;
  padding: 0;
`;

export const ReviewOrderButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
`;

export const Link = styled(Link_)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;
