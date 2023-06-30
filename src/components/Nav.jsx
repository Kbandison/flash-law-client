import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BoltIcon from "@mui/icons-material/Bolt";
import { logout } from "../features/auth/authSlice";

//////////////////////////////LOOK INTO RESPONSIVENESS OF NAVBAR////////////////////////////////////

const pages = [
  { text: "Home", href: "/" },
  { text: "Find An Attorney", href: "/find-attorney" },
  { text: "Contact Us" },
  { text: "About Us" },
];
const settings = [
  // { text: "Profile" },
  { text: "Account", href: "/account" },
  // { text: "Dashboard" },
  { text: "Logout" },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const user = useSelector((state) => state.auth.user);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="relative"
      sx={{
        // border: 1,
        boxShadow: "none",
        background: 0,
        py: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            // border: 1,
            justifyContent: "space-between",
            alignItems: "space-between",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              // border: 1,
              flexGrow: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BoltIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                width: "10%",
                height: "10%",
                color: "rgb(255, 255, 255)",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                fontWeight: 700,
                // letterSpacing: ".3rem",
                textDecoration: "none",
                color: "text.primary",
              }}
            >
              Flash-Law
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="text.primary"
              // color="#0F0B06"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => navigate(page.href)}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <BoltIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              width: "5%",
              height: "5%",
              color: "rgba(255,255,255)",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            Flash-Law
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              // border: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(page.href)}
                sx={{ my: 2, display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          {user ? (
            <Box
              sx={{
                flexGrow: { xs: 0, md: 1 },
                // border: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={`${user.user.firstName} ${user.user.lastName}`}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={
                      setting.text === "Logout"
                        ? () => dispatch(logout())
                        : handleCloseUserMenu
                    }
                  >
                    <Typography textAlign="center">{setting.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: { xs: 0, md: 1 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="contained" href="login">
                Log In
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
