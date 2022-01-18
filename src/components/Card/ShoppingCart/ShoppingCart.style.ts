import styled from "styled-components";

export const WrapperCart = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.palette.secondary.main};
  //background-color: #F2F2F2;
  padding: 17px 35px;
  border-radius: 16px;
  opacity: 1;
  width: 100%;

  height: 242px;
  & img {
    width: 100%;
    max-width: 19%;
    height: 203px;
    background: transparent;
    object-fit: contain;
  }
`;
export const Title = styled.div`
  width: 409px;
`;
export const CounterWrapper = styled.div`
  width: 100%;
  max-width: 204px;
  padding-left: 21px;
  text-align: center;
  //height: 40px;
  margin-top: 100px;
`;
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //width: 120px;
  //height: 38px;
  text-align: right;
  font-family: Mulish, sans-serif;
  letter-spacing: 0.6px;
  font-weight: bold;
  & p {
    font-size: 30px;
    color: #242424;
  }
  & span {
    color: #707070;
  }
`;
