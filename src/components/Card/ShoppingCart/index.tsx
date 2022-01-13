import * as React from 'react'
import {Counter, Price, Title, WrapperCart} from "./ShoppingCart.style";


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
            <Title>{props.title}</Title>
            <Counter>{props.counter}</Counter>
            <Price>
                <span>{props.salePrice}</span>
                <p>{props.price}</p>
            </Price>
        </WrapperCart>
    );
}
