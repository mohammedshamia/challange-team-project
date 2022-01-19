import styled from "styled-components";

interface Iprops {
  padding?: string;
}

export const CounterRating = styled.div<Iprops>`
  padding: ${(props) => props.padding};
  & .MuiRating-icon {
    color: #fcdd06;
  }
`;
