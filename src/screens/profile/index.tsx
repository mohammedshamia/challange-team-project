import { useCallback, useEffect, useState } from "react";
import VerticalTabs from "../../components/Tabs";
import { Typography } from "@mui/material";
import Profile from "./tabs/profile";
import { Container, WrapperAvatarTab, AvatarTab } from "./Profile.style";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/auth.actions";
import { AppState } from "../../redux/store";
import OrdersProduct from "./tabs/orders/index";
import { useTheme } from "styled-components";
// import { editProfile } from "../../redux/actions/user.actions";
// import { notify } from "../../utils/helpers";
// import { IUserForm } from "../../@types/users.types";

const ProfilePage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    auth:{user},
   
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
  const [file, setFile] = useState("");
  const handleChange = (event: any) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    // dispatch(
    //   editProfile({ ...user, profileImage: file }:IUserForm, () => {
    //     notify("success", "User Updated successfully");
    //   })
    // );
  };

  const Tabs = [
    {
      label: (
        <WrapperAvatarTab>
          <AvatarTab
            width="80px"
            height="80px"
            src={file ? file : user.profileImage}
          >
            {!file && user.firstName[0]}
          </AvatarTab>
          <Typography
            sx={{ fontSize: "1.2rem" }}
            variant="h2"
          >{`${user.firstName} ${user.lastName}`}</Typography>
        </WrapperAvatarTab>
      ),
      content: <Profile file={file} handleChange={handleChange} user={user} />,
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
            Create Products
          </Typography>
        </Link>
      ),
      content: (
        <Typography sx={{ textAlign: "left" }} variant="h4">
          Create Products
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
