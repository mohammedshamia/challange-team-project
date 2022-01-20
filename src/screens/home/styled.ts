import { styled } from "@mui/material/styles";

export const Banner = styled("section")((props) => ({
  background: props.theme.palette.secondary.main,
  padding: "60px 16px 16px",
  marginBottom: "44px",
}));
export const Categroy = styled("section")((props) => ({
  position: "relative",
  marginBottom: "60px",
}));
export const FeaturedProducts = styled("section")((props) => ({
  padding: "62px 0",
  background: props.theme.palette.background.paper,
}));
export const TopRateProducts = styled(FeaturedProducts)`
  background: ${(props) => props.theme.palette.background.default};
`;
