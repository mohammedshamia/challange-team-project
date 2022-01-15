import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 175px;
  margin-inline: 140px;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5em;
  & form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
`;
