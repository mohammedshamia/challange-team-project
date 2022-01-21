import styled from "styled-components";

export const ProductPageContier = styled.div`
  width: 1920px;
  height: 3950px;
`;

export const DetailesProductContainer = styled.div`
  width: 86%;
  height: 713px;
  display: flex;
  gap: 16px;
  margin: auto;
`;

export const ReviewesContainer = styled.div`
  width: 82.7%;
  height: 887px;
  margin: auto;
  margin-top: 63px;
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
  background: ${(props) => props.theme.palette.primary.main}; //#FCDD06;
  margin: auto; ;
`;
export const ImagesContiner = styled.div`
  width: 30%;
  height: 713px;
  margin-top: 40px; ;
`;
export const DetailesContiner = styled.div`
  width: 69%;
  height: 702px;
  padding-left: 2%; ;
`;
export const SizesOFimgContiner = styled.div`
  width: 99%;
  height: 142px;
  display: flex;
  gap: 30px;
  margin-top: 70px; ;
`;
export const DiscraptinsContiner = styled.div`
  width: 100%;
  height: 309px;
  margin-top: 169px;
  font-size: 22px;
  color: ${(props) => props.theme.palette.text.primary};
  letter-spacing: 0.32px; ;
`;
export const InformationsContiner = styled.div`
  width: 100%;
  height: 226px; ;
`;
export const TitleInformationsContiner = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-block: 40px; ;
`;

export const SizesOfProductContiner = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 30px; ;
`;

export const SpicficationContiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; ;
`;
export const FeaturedProductsContiner = styled.div`
  padding: 62px 0;
  background: ${(props) => props.theme.palette.secondary.light};
`;
