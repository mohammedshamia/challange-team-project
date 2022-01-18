import React from "react";
import VerticalTabs from "../../components/Tabs";
import {Typography} from "@mui/material";
import Avatar from "./tabs/avatar";
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
            content: <Avatar/>

        },
        {
            label: <Typography variant='h3'>My Orders</Typography>,
            content:<Avatar/>
        },
        {
            label: <Typography variant='h3'>Wishlist</Typography>,
            content:<Avatar/>
        },
        {
            label: <Typography variant='h3'>Notifications</Typography>,
            content:<Avatar/>
        },
        {
            label: <Typography variant='h3'>Settings</Typography>,
            content:<Avatar/>
        },
    ];

    return(
        <Container>
            <VerticalTabs  labels={Tabs.map(label=> label.label)}
                           content={Tabs.map(content=>content.content)}
            />
        </Container>

    )
};

export default ProfilePage;
