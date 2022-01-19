import { Typography } from "@mui/material";
import React from "react";
import { Row, Divder } from "./index";

interface Iprops {
  title: string;
  widthDivider: string;
  width?: string;
  alignItems?: "center" | "flex-start" | "flex-end";
}

export default function RowComponent({
  title,
  widthDivider,
  width,
  alignItems,
}: Iprops) {
  return (
    <Row alignItems={alignItems} width={width}>
      <Typography
        fontWeight={700}
        sx={{ letterSpacing: "1.28px", textTransform: "uppercase" }}
        variant="h2"
        color="text.primary"
      >
        {title}
      </Typography>
      <Divder widthDivider={widthDivider} />
    </Row>
  );
}
