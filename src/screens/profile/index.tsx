import { useCallback, useEffect } from "react";
import VerticalTabs from "../../components/Tabs";
import { Typography } from "@mui/material";
import Profile from "./tabs/profile";
import { Container, WrapperAvatarTab, AvatarTab } from "./Profile.style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/auth.actions";
import { AppState } from "../../redux/store";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    auth: { user },
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    if (!user.token) {
      navigate("/auth/login");
    }
  }, [user, navigate]);

  const handleLogout = useCallback(() => {
    dispatch(
      logout(() => {
        navigate("/auth/login");
      })
    );
  }, [dispatch, navigate]);

  const Tabs = [
    {
      label: (
        <WrapperAvatarTab>
          <AvatarTab
            width="80px"
            height="80px"
            src={user.profileImage || "/static/avatar.jpg"}
            alt="avatar"
          />
          <Typography sx={{fontSize:"1.2rem"}} variant="h2">{`${user.firstName} ${user.lastName}`}</Typography>
        </WrapperAvatarTab>
      ),
      content: <Profile user={user} />,
    },
    {
      label: (
        <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
          My Orders
        </Typography>
      ),
      content: <Typography variant="h4">My Orders</Typography>,
    },
  ];

  return (
    <Container>
      <VerticalTabs
        labels={Tabs.map((label) => label.label)}
        content={Tabs.map((content) => content.content)}
        button="Log out"
        buttonClick={() => handleLogout()}
      />
    </Container>
  );
};

export default ProfilePage;
