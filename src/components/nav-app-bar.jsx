import { memo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { Avatar } from "@mui/joy";
import { SettingsSuggest, Menu as MenuIcon } from "@mui/icons-material";

import { nameProject } from "../utils/names";
import SwitchThumbChild from "./switch";

const pages = [{ id: "categories", name: "categorías" }];
const moreActions = ["Agregar nuevo video"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
      component="nav"
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "#eee",
        zIndex: 1000,
        position: "sticky",
        top: 0,
        animationTimeline: "scroll(root y)",
        animationName: "opacitySticky",
        animationRange: "0vh 50vh",
        animationFillMode: "both",
        "@keyframes opacitySticky": {
          from: {
            boxShadow: `0px 1px 5px #eee`,
            backdropFilter: "blur(3px) brightness(90%)",
            height: "5rem",
          },
          to: {
            boxShadow: `0px 5px 5px #eee`,
            backdropFilter: "blur(7px) brightness(0%)",
            height: "3.5rem",
          },
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
            <Avatar
              alt="logo"
              src="/icon.svg"
              size="lg"
              sx={{ backgroundColor: "transparent" }}
            />
          </IconButton>
          <Link to="/">
            <NameProjectComponent xs="none" md="flex">
              {nameProject}
            </NameProjectComponent>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="visit more pages"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map(({ id, name }) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Link to={`pages/${id}`}>
                    <Typography
                      component="span"
                      textAlign="center"
                      sx={{ fontSize: "1.2rem", textTransform: "capitalize" }}
                    >
                      {name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Avatar
              alt="logo"
              src="/icon.svg"
              size="sm"
              sx={{ backgroundColor: "transparent" }}
            />
          </IconButton>
          <NameProjectComponent xs="flex" md="none">
            <Link to="/">{nameProject}</Link>
          </NameProjectComponent>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontSize: "1.2rem",
              gap: "5rem",
              textTransform: "capitalize",
            }}
          >
            {pages.map(({ id, name }) => (
              <Link
                key={id}
                to={`pages/${id}`}
                style={{
                  display: "block",
                  fontWeight: 700,
                }}
              >
                {name}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{ mr: 3, p: 0, display: { xs: "none", md: "inline-block" } }}
              aria-label="switch light"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <SwitchThumbChild />
            </IconButton>
            <Tooltip title="Más acciones">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                aria-label="add more video"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <SettingsSuggest
                  sx={{
                    fontSize: "2.5rem",
                    display: { xs: "block", md: "none" },
                  }}
                />
                <SettingsSuggest
                  sx={{
                    fontSize: "3rem",
                    display: { xs: "none", md: "block" },
                  }}
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
              {moreActions.map((moreAction) => (
                <Link to="newvideo" key={moreAction}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" component="span">
                      {moreAction}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              <IconButton
                sx={{
                  paddingLeft: 7,
                  display: { xs: "block", md: "none" },
                }}
                aria-label="add more video"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <SwitchThumbChild />
              </IconButton>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

const NameProjectComponent = memo(function NameProjectComponent({
  children,
  xs,
  md,
  color,
}) {
  return (
    <Typography
      variant="h5"
      noWrap
      component="h1"
      sx={{
        mr: 5,
        display: { xs, md },
        flexGrow: 1,
        fontWeight: 700,
        color,
        letterSpacing: 2,
        textShadow: "2px 2px 2px #3333",
      }}
    >
      {children}
    </Typography>
  );
});
