import styled from "styled-components";
interface Iprops {
  jsutfiyContent: string;
  width: string;
}
export const Row = styled("div")<Iprops>((props) => ({
  display: "flex",
  justifyContent: props.jsutfiyContent || "flex-start",
  flexDirection: "column",
  width: props.width || "100%",
}));
