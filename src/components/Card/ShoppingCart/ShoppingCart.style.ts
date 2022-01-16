import styled from 'styled-components'
import {Typography} from "@mui/material";

export const WrapperCart = styled.div`
    display: flex;
    background-color: ${props => props.theme.palette.secondary.main} ;
    //background-color: #F2F2F2;
    padding: 17px 35px;
    border-radius: 16px;
    opacity:1;
    width: 100%;
    max-width: 76.25%;
    height: 242px;
    & img{
        width: 100%;
        max-width: 19%;
        height: 203px;
        background: transparent;
        object-fit: contain;
    }
`;

export const CounterWrapper = styled.div`
    width: 100%;
    max-width: 12.75%;
    height: 40px;
`;
export const Price = styled.div`
    display: flex;
    flex-direction: column;
    //width: 120px;
    //height: 38px;
    text-align: left;
    font: normal normal 900 30px/15px Muli;
    letter-spacing: 0.6px;
    color: #242424;
`;