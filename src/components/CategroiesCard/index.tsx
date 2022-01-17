import React from 'react'
import MainTitle from '../MainTitle';
import { ContinerCategroiesCard } from './CategroiesCard.styled';
import CategroyCard from '../CategroyCard';

export interface categroyCard{
    img:string;
    name:string;
}

interface IProps{
    categroiesCard:categroyCard[]
}
export default function CategroiesCard({categroiesCard}:IProps) {
    return (
        <div >
           <MainTitle title={'Categroies Card'}/>
        <ContinerCategroiesCard>
            {categroiesCard.map((category,index)=>(<CategroyCard key={index} img={category.img} name={category.name} />) )}
        </ContinerCategroiesCard>
        </div>
    )
}
