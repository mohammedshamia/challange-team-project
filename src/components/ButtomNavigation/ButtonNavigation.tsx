import {
  Badge,
  BottonNavigation,
  IconBox,
  Typography,
} from "./BottonNavigation.style";
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
          <Badge badgeContent={props.badgeContent}>
            <IconBox>{props.icon}</IconBox>
          </Badge>
          <Typography>{props.label}</Typography>
        </BottonNavigation>
      ) : (
        <BottonNavigation>
          <IconBox>{props.icon}</IconBox>
          <Typography>{props.label}</Typography>
        </BottonNavigation>
      )}
    </>
  );
}
