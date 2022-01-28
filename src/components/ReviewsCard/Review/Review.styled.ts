import styled from "styled-components";


export const ReviewContiner = styled.div`
width:92%;
margin:15px auto;
`;

export const GrayText= styled.div`
background:${props => props.theme.palette.secondary.main} ;
box-sizing:border-box;
padding: 22px 35px ;
`;

export const RatingContiner= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-block:16px ;
height:20px;
`;

interface Iprops{
    background?:string   
}

export const Line= styled.div<Iprops>`
height:1px;
`;


