import styled from 'styled-components'
// background-color: ${props => props.theme.palette.secondary.main};

export const WrapperCart = styled.div`
    display: flex;
    background-color: #F2F2F2;
    border-radius: 16px;
    opacity:1;
    width: 1226px;
    height: 242px;
    & img{
        width: 304px;
        height: 203px;
        background: transparent;
        object-fit: contain;
    }
`;

export const Title = styled.h2`
    width: 409px;
    height: 72px;
    font: normal normal 900 30px/15px Muli;
    text-align: left;
    letter-spacing: 0.48px;
    color: #242424;
    opacity: 1;
`;

export const Counter = styled.div`
    width: 204px;
    height: 40px;
`;
export const Price = styled.div`
    display: flex;
    flex-direction: column;
    width: 120px;
    height: 38px;
    text-align: left;
    font: normal normal 900 30px/15px Muli;
    letter-spacing: 0.6px;
    color: #242424;
`;