import React, { useState } from "react";
import { styled, Typography } from "@mui/material";
import {
  WrapperAvatar,
  LeftSide,
  RightSide,
  InfoUser,
  ChangePasswordBtn,
  AvatarTab,
} from "./../../Profile.style";
import { BootstrapDialog } from "../../../../components/ReviewsCard/ReviewForm";
import { Button } from "../../../../components/Button/Button.style";
import { IUser } from "../../../../@types/auth.types";
import ChangePassword from "./ChangePassword";

interface IProps {
  user: IUser;
  handleChange: Function;
  file: string;
}
const Input = styled("input")({
  display: "none",
});
const Profile = ({ user, handleChange, file }: IProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
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
            onClick={() => setOpen(true)}
            style={{ fontWeight: "500" }}
          >
            Change Password
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="product-delete-dialog"
            open={open}
          >
            <ChangePassword handleClose={handleClose} />
          </BootstrapDialog>
        </ChangePasswordBtn>
      </LeftSide>
      <RightSide>
        <AvatarTab
          fontSize="3rem"
          src={user.profileImage as string}
          width="198px"
          height="198px"
        >
          {!file && user.firstName[0]}
        </AvatarTab>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <Button
            component="span"
            width="153px"
            height="40px"
            fontSize="13px"
            style={{ fontWeight: "500" }}
          >
            Upload new photo
          </Button>
        </label>
      </RightSide>
    </WrapperAvatar>
  );
};

export default Profile;
