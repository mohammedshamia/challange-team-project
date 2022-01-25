import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Iprpos {
  borderRadius?: number | string;
  background?: "paper";
  boxShadow?: string | undefined;
}

export const CardContainer = styled(Card)<Iprpos>((props) => ({
  borderRadius: props.borderRadius || "16px",
  padding: "25px 0",
  position: "relative",
  width: "100%",
  maxWidth: "520px",
  boxShadow: props.boxShadow,
  margin: "auto",
  backgroundImage: `none !important`,
  backgroundColor:
    props.background === "paper"
      ? props.theme.palette.secondary.light
      : props.theme.palette.background.default,
}));

interface IpropsSittingContainer {
  margin?: string;
  justifyContent?: boolean;
}
export const SittingContainer = styled("div")<IpropsSittingContainer>(
  (props) => ({
    width: "90%",
    margin: "auto",
    display: "flex",
    justifyContent: props.justifyContent ? "flex-end" : "center",
    gap: "16px",
    [props.theme.breakpoints.down("lg")]: {
      justifyContent: props.justifyContent ? "flex-start" : "center",
    },
  })
);

export const PriceContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-block: 16px;
`;
export const ImagContainer = styled("img")`
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

export const SalaryPercentage = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  font-size: 24px;
  height: 87px;
  font-family: "Mulish";
  top: 20px;
  right: 20px;
  border-radius: 50%;
  background-color: #fc4059;
  color: white;
`;
