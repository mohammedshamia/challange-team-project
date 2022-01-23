import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useCallback } from "react";

interface Iprops {
  itemName: string;
}

export default function BasicBreadcrumbs(props: Iprops) {
  let navigate = useNavigate();

  const Back = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <Breadcrumbs sx={{ fontSize: "24px" }}>
        <Link
          style={{ cursor: "pointer" }}
          underline="hover"
          color="text.secondary"
          onClick={Back}
        >
          Back
        </Link>
        <Typography color="text.primary" sx={{ fontSize: "24px" }}>
          {props.itemName}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
