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
        <Typography
          color="text.secondary"
          fontSize="32px"
          fontWeight="800"
          variant="h2"
        >
          My Profile
        </Typography>
        <InfoUser>
          <div>
            <Typography color="text.secondary" fontSize="24px" fontWeight="500">
              First Name
            </Typography>
            <Typography color="text.primary" fontWeight="500" fontSize="24px">
              {user?.firstName}
            </Typography>
          </div>
          <div>
            <Typography color="text.secondary" fontSize="24px" fontWeight="500">
              Last Name
            </Typography>
            <Typography color="text.primary" fontWeight="500" fontSize="24px">
              {user.lastName}
            </Typography>
          </div>
          <div>
            <Typography color="text.secondary" fontSize="24px" fontWeight="500">
              Email
            </Typography>
            <Typography color="text.primary" fontWeight="500" fontSize="24px">
              {user.email}
            </Typography>
          </div>
          <div>
            <Typography color="text.secondary" fontSize="24px" fontWeight="500">
              Birthday
            </Typography>
            <Typography color="text.primary" fontWeight="500" fontSize="24px">
              {(user.dateOfBirth &&
                new Date(user.dateOfBirth).toLocaleDateString()) ||
                "-"}
            </Typography>
          </div>
        </InfoUser>
        <ChangePasswordBtn>
          <Button
            fontSize="13px"
            width="198px"
            height="40px"
            style={{ fontWeight: "500" }}
          >
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
        <Button
          width="153"
          height="40px"
          fontSize="13px"
          style={{ fontWeight: "500" }}
        >
          Upload new photo
        </Button>
      </RightSide>
    </WrapperAvatar>
  );
};

export default Profile;
