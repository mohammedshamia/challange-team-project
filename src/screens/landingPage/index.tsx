import React from 'react'
import PaginationButtons from "../../components/common/Pagination";
function LandingPage(){
    return(
        <PaginationButtons count={10}/>
    )
}

export default LandingPage as React.FC;