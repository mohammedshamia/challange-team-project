import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Column as Row_, Divder } from "./index";

interface Iprops {
  title: string;
  widthDivider: string;
  width?: string;
  alignItems?: "center" | "flex-start" | "flex-end";
}

const Row = styled(Row_)`
  border-bottom: 0.5px solid ${(props) => props.theme.palette.divider};
  margin-bottom: 40px;
  margin-inline: auto;
`;

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
      <Divder widthDivider={"200px"} />
    </Row>
  );
}
