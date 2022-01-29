import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import CategoryIcon from "@mui/icons-material/Category";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import GroupIcon from "@mui/icons-material/Group";
import { CustomLink } from "../../GlobalStyles";
import { IAuth } from "../../../@types/auth.types";
import PersonIcon from "@mui/icons-material/Person";
import { ButtonIcon } from "./Header.style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/auth.actions";
interface Iprops {
  auth: IAuth;
}
export default function AccountMenu({ auth }: Iprops) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (auth.isAuthenticated) {
      setAnchorEl(event.currentTarget);
    } else {
      navigate("/auth/login");
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = React.useCallback(() => {
    dispatch(
      logout(() => {
        navigate("/auth/login");
      })
    );
  }, [dispatch, navigate]);

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip
          title={auth.isAuthenticated ? "Account settings" : "Login / Sign up"}
        >
          <ButtonIcon
            border="none"
            onClick={handleClick}
            size="small"
            sx={{
              display: "flex",
              flexDirection: "column",
              textTransform: "capitalize",
            }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {auth.isAuthenticated ? (
              <>
                <Avatar
                  src={auth.user.profileImage as string}
                  sx={{ width: 32, height: 32, textTransform: "uppercase" }}
                >
                  {!auth.user.profileImage && auth.user.firstName[0]}
                </Avatar>
                <Typography>{`${auth.user.firstName} ${auth.user.lastName}`}</Typography>
              </>
            ) : (
              <>
                <PersonIcon />
                <Typography>{"Login / Sign up"}</Typography>
              </>
            )}
          </ButtonIcon>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: "34%",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <CustomLink to={auth.isAuthenticated ? "/profile" : "/auth/login"}>
          <MenuItem>
            <Avatar src={auth.user.profileImage as string} />
            {`${auth.user.firstName} ${auth.user.lastName}`}
          </MenuItem>
        </CustomLink>
        <Divider />
        {auth.user.isAdmin && (
          <div>
            <CustomLink to={"/orders"}>
              <MenuItem>
                <ListItemIcon>
                  <FactCheckIcon fontSize="small" />
                </ListItemIcon>
                Orders
              </MenuItem>
            </CustomLink>
            <CustomLink to={"/products"}>
              <MenuItem>
                <ListItemIcon>
                  <CategoryIcon fontSize="small" />
                </ListItemIcon>
                Products
              </MenuItem>
            </CustomLink>
            <CustomLink to={"/users"}>
              <MenuItem>
                <ListItemIcon>
                  <GroupIcon fontSize="small" />
                </ListItemIcon>
                Users
              </MenuItem>
            </CustomLink>
          </div>
        )}
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
