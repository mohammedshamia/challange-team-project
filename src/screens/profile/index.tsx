import { ChangeEvent, useCallback } from "react";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import VerticalTabs from "../../components/Tabs";
import Profile from "./tabs/profile";
import { Container, WrapperAvatarTab, AvatarTab } from "./Profile.style";
import { editProfile, logout } from "../../redux/actions/auth.actions";
import { AppState } from "../../redux/store";
import OrdersProduct from "./tabs/orders/index";
import { notify } from "../../utils/helpers";
import { IUser } from "../../@types/auth.types";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    auth: { user, loading },
  } = useSelector((state: AppState) => state);

  const handleLogout = useCallback(() => {
    dispatch(
      logout(() => {
        navigate("/auth/login");
      })
    );
  }, [dispatch, navigate]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      dispatch(
        editProfile(
          {
            ...(user as IUser),
            profileImage: event.target.files?.[0] as File,
          } as IUser,
          () => {
            notify("success", "User Updated successfully");
          }
        )
      );
      return;
    }
    notify("error", "Please select an image");
  };

  const Tabs = [
    {
      label: (
        <WrapperAvatarTab>
          <AvatarTab
            width="80px"
            height="80px"
            src={user.profileImage as string}
          >
            {!user.profileImage && user.firstName[0]}
          </AvatarTab>
          <Typography
            sx={{ fontSize: "1.2rem" }}
            variant="h2"
          >{`${user.firstName} ${user.lastName}`}</Typography>
        </WrapperAvatarTab>
      ),
      content: (
        <Profile
          file={user.profileImage as string}
          handleChange={handleChange}
          user={user}
        />
      ),
    },
    {
      label: (
        <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
          My Orders
        </Typography>
      ),
      content: <OrdersProduct />,
    },
  ];

  return (
    <Container>
      <VerticalTabs
        labels={[...Tabs].map((label) => label?.label)}
        content={[...Tabs].map((content) => content?.content)}
        button="Log out"
        buttonClick={() => handleLogout()}
      />
      <Backdrop
        sx={{ color: "#fcdd06", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default ProfilePage;
