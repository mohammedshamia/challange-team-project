import React from "react";
import { Typography } from "@mui/material";
import {
  WrapperAvatar,
  LeftSide,
  RightSide,
  InfoUser,
  ChangePasswordBtn,
  AvatarTab,
} from "./../../Profile.style";
import { Button } from "../../../../components/Button/Button.style";
import { IUser } from "../../../../@types/auth.types";

interface IProps {
  user: IUser;
}

const Profile = ({ user }: IProps) => {
  return (
    <WrapperAvatar>
      <LeftSide>
        <Typography variant="h2">My Profile</Typography>
        <InfoUser>
          <div>
            <label>First Name</label>
            <p>{user?.firstName}</p>
          </div>
          <div>
            <label>Last Name</label>
            <p>{user.lastName}</p>
          </div>
          <div>
            <label>Email</label>
            <p>{user.email}</p>
          </div>
          <div>
            <label>Birthday</label>
            <p>
              {(user.dateOfBirth &&
                new Date(user.dateOfBirth).toLocaleDateString()) ||
                "-"}
            </p>
          </div>
        </InfoUser>
        <ChangePasswordBtn>
          <Button width="153" height="40px" fontSize="13px">
            Change Password
          </Button>
        </ChangePasswordBtn>
      </LeftSide>
      <RightSide>
        <AvatarTab
          src={user?.profileImage || "/static/avatar.jpg"}
          alt="avatar"
          width="198px"
          height="198px"
        />
        <Button width="153" height="40px" fontSize="13px">
          Upload new photo
        </Button>
      </RightSide>
    </WrapperAvatar>
  );
};

export default Profile;
