import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const HeaderBox = styled.div`
  position: sticky;
  top: 0;
  height: 85px;
  padding: 0 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #242424;
  color: white;
`;

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
  borderRadius: "7px",
  border: "1px solid #707070",
  color: "#fff",
}));
