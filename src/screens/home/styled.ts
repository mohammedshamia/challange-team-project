import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Banner = styled("section")((props) => ({
  background: props.theme.palette.background.paper,
  padding: "60px 16px 16px",
  marginBottom: "44px",
  boxShadow: "0px 0px 15px -5px ",
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

export const GridTopRateProducts = styled(Grid)((props) => ({
  border: "1px solid #fcdd06",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "auto",
  padding: "6px",
  [props.theme.breakpoints.down("xl")]: {
    flexWrap: "wrap",
  },
  "& .MuiGrid-item": {
    borderRight: `1px solid ${props.theme.palette.divider}`,
    [props.theme.breakpoints.down("md")]: {
      borderRight: "none",
      borderTop: `1px solid ${props.theme.palette.divider}`,
    },
    "&:last-child": { borderRight: "none" },
  },
}));
