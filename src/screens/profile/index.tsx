import { ChangeEvent, useCallback, useEffect } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import VerticalTabs from "../../components/Tabs";
import Profile from "./tabs/profile";
import { Container, WrapperAvatarTab, AvatarTab } from "./Profile.style";
import {
  editProfile,
  getProfile,
  logout,
} from "../../redux/actions/auth.actions";
import { AppState } from "../../redux/store";
import OrdersProduct from "./tabs/orders/index";
import { notify } from "../../utils/helpers";
import { IUser } from "../../@types/auth.types";

const ProfilePage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    auth: { user },
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
            dispatch(getProfile());
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

  const AdminTabs = [
    {
      label: (
        <Link
          to={"/products"}
          style={{
            textDecoration: "none",
            color: theme.palette.text.primary,
          }}
        >
          <Typography
            // as={Link}
            variant="h4"
            sx={{ fontSize: "1.5rem" }}
          >
            Products
          </Typography>
        </Link>
      ),
      content: (
        <Typography sx={{ textAlign: "left" }} variant="h4">
          Products
        </Typography>
      ),
    },
  ];

  return (
    <Container>
      <VerticalTabs
        labels={[...Tabs, ...((user.isAdmin && AdminTabs) || [])].map(
          (label) => label?.label
        )}
        content={[...Tabs, ...((user.isAdmin && AdminTabs) || [])].map(
          (content) => content?.content
        )}
        button="Log out"
        buttonClick={() => handleLogout()}
      />
    </Container>
  );
};

export default ProfilePage;
