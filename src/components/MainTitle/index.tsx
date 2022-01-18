import { Typography } from '@mui/material';
import React from 'react'


interface IProps{
    title: string;
}
export default function MainTitle({title}:IProps) {
    return (
        <div>
        <Typography>{title}</Typography>
        <div>
            <span></span>
        </div>
    </div>
    )
}
