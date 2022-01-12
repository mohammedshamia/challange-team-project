import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React from "react";

interface Iprops {
  itemName: string;
}

export default function BasicBreadcrumbs(props: Iprops) {
  let navigate = useNavigate();

  async function handleSubmit() {
    navigate(-1);
  }

  return (
    <div>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" onClick={handleSubmit}>
          Back
        </Link>
        <Typography color="text.primary">{props.itemName}</Typography>
      </Breadcrumbs>
    </div>
  );
}
