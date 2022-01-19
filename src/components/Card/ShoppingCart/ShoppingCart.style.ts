import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

export const WrapperCart = styled(Grid)`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.palette.secondary.main};
  padding: 17px 35px;
  border-radius: 16px;
`;

export const ImgContainer = styled(Grid)`
  max-width: 210px !important;
  height: 210px;
  width: 300px;
  margin: auto;
`;

export const Close = styled(CloseIcon)`
  color: ${(props) => props.theme.palette.text.primary};
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;
