import React from 'react'
import MainTitle from '../MainTitle';
import ProdectCard from './ProdectsCard';
import { ContinerCategroiesCard } from './ProdectsCard.styled';

export interface Card{
    img:string;
    name:string;
    salary?:number;
    valueRating?:number;
    
}

interface IProps{
    prodectsCard:Card[]
}
export default function ProdectsCard({prodectsCard}:IProps) {
    return (
        <div >
           <MainTitle title={'Categroies Card'}/>
        <ContinerCategroiesCard>
            {prodectsCard.map((prodect,index)=>(<ProdectCard key={index} img={prodect.img} name={prodect.name}  valueRating={prodect.valueRating} salary={prodect.salary}/>) )}
        </ContinerCategroiesCard>
        </div>
    )
}
