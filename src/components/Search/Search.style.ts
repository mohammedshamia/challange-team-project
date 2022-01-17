import styled from "styled-components";


interface Iprops{
  width?:string;
}

export const Lable = styled.label<Iprops>((props:Iprops) => ({
  backgroundColor: 'white',
  borderRadius: '6px',
  width: props.width || '43%',
  height: '40px',
  display: 'flex',
}));


export const SearchInput = styled.input.attrs({ type: "search" })`
  border: 0;
  outline: 0;
  border-radius: 6px;
  background-color: transparent;
  width: 80%;
  height: 40px;
  padding: 0 26px;
  color: #242424;
  font-size: 13px;

`;
