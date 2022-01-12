import * as React from 'react'
import {Spinner} from "./Loading.style";

const Loading: React.FC = () => (
    <Spinner>
        <div className="cube1" />
        <div className="cube2" />
    </Spinner>
);


export default Loading;