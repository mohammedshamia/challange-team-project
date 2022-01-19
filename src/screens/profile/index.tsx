import React from "react";
import VerticalTabs from "../../components/Tabs";
import {Typography} from "@mui/material";
import Profile from "./tabs/profile";
import {Container, WrapperAvatarTab, AvatarTab} from "./Profile.style";


const ProfilePage = () => {
    const Tabs = [
        {
            label:
            <WrapperAvatarTab>
                <AvatarTab src={"/static/avatar.jpg"} alt='avatar'/>
                <Typography variant='h2'>Amy Mayer</Typography>
            </WrapperAvatarTab>
            ,
            content: <Profile/>

        },
        {
            label: <Typography variant='h3'>My Orders</Typography>,
            content:<Typography variant='h3'>My Orders</Typography>
        },
        {
            label: <Typography variant='h3'>Wishlist</Typography>,
            content:<Typography variant='h3'>Wishlist</Typography>
        },
        {
            label: <Typography variant='h3'>Notifications</Typography>,
            content:<Typography variant='h3'>Notifications</Typography>
        },
        {
            label: <Typography variant='h3'>Settings</Typography>,
            content:<Typography variant='h3'>Settings</Typography>
        },
    ];

    return(
        <Container>
            <VerticalTabs  labels={Tabs.map(label=> label.label)}
                           content={Tabs.map(content=>content.content)}
                           button='logout'
            />
        </Container>

    )
};

export default ProfilePage;
