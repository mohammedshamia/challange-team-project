import styled from "styled-components";

interface Iprops{
  padding?: string;
}
export const RatingContiner = styled.div<Iprops>`
padding:${props=>props.padding};
`;