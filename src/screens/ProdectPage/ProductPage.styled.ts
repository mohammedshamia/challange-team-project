import { Typography } from "@mui/material";
import styled from "styled-components";

export const ProductPageContier = styled.div`
  width: 1920px;
  height: 3950px;
`;

export const DetailesProductContainer = styled.div`
  display: flex;
  gap: 32px;
  margin: auto;
  @media (max-width: 900px) {
    display: block;
    text-align: center;
  }
`;

export const ReviewesContainer = styled.div`
  width: 100%;
  margin: auto;
  margin: 63px 0;
`;

export const ProductesContainer = styled.div`
  width: 85.5%;
  height: 824px;
  background: ${(props) => props.theme.palette.background.paper} 0% 0% no-repeat
    padding-box;
  margin: auto; ;
`;

export const TitleContiner = styled.div`
  height: 84px;
  border-bottom: 1px solid ${(props) => props.theme.palette.text.secondary}; ;
`;
export const BoldLine = styled.div`
  width: 200px;
  height: 7px;
  background: ${(props) => props.theme.palette.primary.main};
  margin: auto; ;
`;
export const ImagesContiner = styled.div`
  margin-top: 40px;
  width: 650px;
  @media (max-width: 900px) {
    width: 100%;
   
  }
`;
export const DetailesContiner = styled.div`
  width: 70%;
  @media (max-width: 900px) {
    width: 100%;
    & * {
      text-align: center !important;
      margin: 10px auto;
      justify-content: center !important;
    }
  }
`;
export const SizesOFimgContiner = styled.div`
  width: 90%;
  height: 142px;
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
  @media (max-width: 900px) {
    margin: 40px auto;
  }
`;
export const DiscraptinsContiner = styled(Typography)`
  width: 100%;
  margin-top: 60px;
  font-size: 16px;
  font-weight: 500px;
  color: ${(props) => props.theme.palette.text.primary};
  letter-spacing: 0.32px; ;
`;
export const InformationsContiner = styled.div`
  width: 100%;
`;
export const TitleInformationsContiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-block: 40px;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const SizesOfProductContiner = styled.div`
  width: 100%;
  margin-top: 30px;
`;
export const BoxSammary = styled("div")((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  [props.theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    gap: "16px",
    alignItems: "flex-start",
  },
}));
export const SpicficationContiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; ;
`;
export const FeaturedProductsContiner = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: ${(props) =>
    props.theme.palette.background.paper}; // #F7F8FC;
`;

export const ProductNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 62px 0;
  background: ${(props) => props.theme.palette.secondary.light};
`;
