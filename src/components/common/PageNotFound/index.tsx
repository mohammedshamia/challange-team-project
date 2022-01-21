import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../Button/Button.style";
const DivPageNotFound = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 50%;
  }
`;
export default function PageNotFound() {
  return (
    <DivPageNotFound>
      <img src="/static/pageNotFound.png" alt="404" />
      <Button
        as={Link}
        to="/"
        sx={{
          width: "13%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize:"1.8rem"
        }}
      >
        Back to Home
      </Button>
    </DivPageNotFound>
  );
}
