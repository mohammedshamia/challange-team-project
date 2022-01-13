import { BottonNavigation, IconBox } from "./BottonNavigation.style";
import Badge from "@mui/material/Badge";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Iprops {
  badgeContent?: number;
  label: string;
  icon: ReactNode;
  path: string;
}

export default function SimpleBottomNavigation(props: Iprops) {
  return (
    <>
      {props.badgeContent ? (
        <BottonNavigation as={Link} to={props.path}>
          <Badge
            badgeContent={props.badgeContent}
            sx={{
              "&>span": {
                backgroundColor: "#FCDD06",
                fontSize: "10px",
                width: "15px",
                color: "#242424",
              },
            }}
          >
            <IconBox>{props.icon}</IconBox>
          </Badge>
          <p style={{ color: "white", fontSize: "13px", margin: "0" }}>
            {props.label}
          </p>
        </BottonNavigation>
      ) : (
        <BottonNavigation>
          {" "}
          <IconBox>{props.icon}</IconBox>{" "}
          <p style={{ color: "white", fontSize: "13px", margin: "0" }}>
            {props.label}
          </p>
        </BottonNavigation>
      )}
    </>
  );
}
