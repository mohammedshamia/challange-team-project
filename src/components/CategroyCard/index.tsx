import { Typography } from "@mui/material";
import { MouseEventHandler } from "react";
import { CardContainer } from "../Card/Card.style";
import { Card } from "../Card/Types";

interface IProps extends Card {
  onClick?: MouseEventHandler;
}

export default function CategroyCard({ img, name, onClick }: IProps) {
  return (
    <CardContainer
      onClick={onClick}
      sx={{
        cursor: "pointer",
        borderRadius: 0,
        paddingTop: "23px",
        boxSizing: "border-box",
        boxShadow: "none",
      }}
    >
      <CardContainer
        background="paper"
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "16px",
          boxShadow: "1px 2px px 1px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src={img}
          alt="img"
          width={"300px"}
          height={"250px"}
          style={{ objectFit: "contain" }}
        />
      </CardContainer>
      <Typography
        variant="h2"
        fontSize="1.5rem"
        sx={{
          marginTop: "16px",
          textAlign: "center",
          letterSpacing: "0.6px",
        }}
      >
        {name}
      </Typography>
    </CardContainer>
  );
}
