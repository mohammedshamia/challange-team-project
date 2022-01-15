import * as React from 'react';
import Pagination from '@mui/material/Pagination';

interface IProps {
    count:number;
    /**
     * The active color.
     * @default 'standard'
     */
    color?:'primary' | 'secondary' | 'standard'
}
export default function PaginationButtons({count,color}:IProps) {
    return (
        <Pagination count={count} color={color} />
    );
}
