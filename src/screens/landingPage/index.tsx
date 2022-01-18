import React from 'react'
import VerticalTabs from "../../components/Tabs";
function LandingPage(){
    return (
        <VerticalTabs  labels={['Avatar', ' My Orders', 'Wishlist', 'Notifications', 'Settings']}
                       content={[<div>1 </div>, <p>2</p>]} />

    );
}

export default LandingPage as React.FC;
