import React from "react";
import {Typography} from "@mui/material";
import {WrapperAvatar} from "./../../Profile.style";


const Avatar = () => {
    return(
        <WrapperAvatar>
            <Typography variant='h1'>My Profile</Typography>
            <div>
                <div>
                    {/*<p>First Name</p>*/}
                </div>
            </div>
        </WrapperAvatar>
    )
};

export default Avatar;
