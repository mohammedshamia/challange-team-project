import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Iprpos {
  borderRadius?: number;
}

export const CardContainer = styled(Card)<Iprpos>((props) => ({
  borderRadius: props.borderRadius || "16px",
  padding: "35px 0",
  position: "relative",
  width: "100%",
  maxWidth: "520px",
  margin: "auto",
  backgroundColor: props.theme.palette.background.default,
}));

export const SittingContainer = styled("div")`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: "16px";
`;

export const SalaryContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-block: 16px;
`;

export const ImagContainer = styled("img")`
  height: 100%;
  width: 100%;
`;

interface IdiscountValue{
  discountValue?:number
}
export const DiscountValue = styled.span<IdiscountValue>`
   text-decoration: ${props => props.discountValue ? "solid line-through black 4px" : "none"};
`;
