import styled from "styled-components";


export const ReviewContiner = styled.div`
width:1484px;
height:224px;
margin:auto;
`;

export const GrayText= styled.div`
width:1483px;
background:#F2F2F2;
box-sizing:border-box;
padding: 22px 35px ;
`;

export const RatingContiner= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:1483px;
margin-block:16px ;
height:20px;


`;

interface Iprops{
    background?:string   
}
export const Line= styled.div<Iprops>`
height:1px;

background:  ${(props)=>props.background ?  props.background  : "#F9F9F9"};

`;


