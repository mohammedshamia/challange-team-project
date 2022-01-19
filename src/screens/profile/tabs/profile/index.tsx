import React from "react";
import {Typography} from "@mui/material";
import {
    WrapperAvatar,
    LeftSide,
    RightSide,
    InfoUser,
    ChangePasswordBtn,
    AvatarTab,
    WrapperAvatarTab
} from "./../../Profile.style";
import {Button} from "../../../../components/Button/Button.style";


const Profile = () => {
    return(
        <WrapperAvatar>
            <LeftSide>
                <Typography variant='h2'>My Profile</Typography>
                <InfoUser>
                    <div>
                        <label>First Name</label>
                        <p>Amy</p>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <p>Mayer</p>
                    </div>
                    <div>
                        <label>Email</label>
                        <p>amymay@gmail.com</p>
                    </div>
                    <div>
                        <label>Birthday</label>
                        <p>12/04/1990</p>
                    </div>
                </InfoUser>
                <ChangePasswordBtn>
                 <Button width='153' height='40px' fontSize='13px'>Change Password</Button>
                </ChangePasswordBtn>
            </LeftSide>
            <RightSide>
                <AvatarTab src={"/static/avatar.jpg"} alt='avatar' width='198px' height='198px'/>
                <Button width='153' height='40px'>Upload new photo</Button>
            </RightSide>
        </WrapperAvatar>
    )
};

export default Profile;
