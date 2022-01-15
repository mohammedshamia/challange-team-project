import styled from "styled-components";
import {Badge as Badg , Typography as Typograph } from "@mui/material";



export const Badge = styled(Badg)
(() => ({
  "& > span": {
    backgroundColor: "#FCDD06",
    fontSize: "10px",
    width: "15px",
    color: "#242424"
  }
  }));
  

export const Typography = styled(Typograph)(() => ({
color:'white',
fontSize:'13px'

}));

export const BottonNavigation = styled.div`
  margin: 0 16px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`;

export const IconBox = styled.div`
  color: white;
  padding-bottom: 5px;
  & > svg {
    height: 25px;
    width: 25px;
  }
`;
