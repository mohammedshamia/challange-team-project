import * as React from 'react'
import { CounterWrapper, Price, WrapperCart} from "./ShoppingCart.style";
import {Typography} from "@mui/material";

interface IPropsShoppingCart {
    imgSrc?:string;
    title:string;
    counter:React.ReactNode;
    price:string;
    salePrice:string;
}
export default function ShoppingCart(props: IPropsShoppingCart) {
    return (
        <WrapperCart>
            <img src={props.imgSrc} alt={props.title}/>
            <Typography variant='h2' color='text.primary'>{props.title}</Typography>
            <CounterWrapper>{props.counter}</CounterWrapper>
            <Price>
                <span>{props.salePrice}</span>
                <p>{props.price}</p>
            </Price>
        </WrapperCart>
    );
}
