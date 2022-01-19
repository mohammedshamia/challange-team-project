import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.style";
import { Box, Typography } from "./SubTotalCard.style";

interface IProps {
  numberOfItems: number;
  priceBeforeDiscount: string;
  priceAfterDiscount: string;
}

export default function SubTotalCard(props: IProps) {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography color="text.primary" align="center" weight="800" mb="30px">
        Subtotal ({props.numberOfItems}) items
      </Typography>
      <Typography color="text.secondary" weight="800" fs="24px" mb="10px" dec>
        {props.priceAfterDiscount}
      </Typography>
      <Typography color="text.primary" weight="900" fs="38px" mb="50px">
        {props.priceBeforeDiscount}
      </Typography>
      <Divider sx={{ margin: "30px -30px" }} />
      <Link to="/review-order" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            px: "45px",
            textTransform: "capitalize",
            position: "inherit",
            height: "auto",
            minHeight: "62px",
          }}
        >
          Proceed to checkout
        </Button>
      </Link>
    </Box>
  );
}
