import { Box, IconButton, Toolbar as T } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderBox = styled("div")`
  position: sticky;
  top: 0;
  height: 85px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #242424;
  color: white;
  z-index: 999;
`;

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
  borderRadius: "7px",
  border: "1px solid #707070",
  color: "#fff",
  marginLeft: "10px",
}));

export const Toolbar = styled(T)(() => ({
  flexGrow: "99",
}));

export const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));
