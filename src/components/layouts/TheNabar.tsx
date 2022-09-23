import * as React from "react";
import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FiMenu } from "react-icons/fi";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { AiFillApple } from "react-icons/ai";
import { ListItemIcon } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const pages = [
  {
    title: "داشبورد",
    to: "",
  },
  {
    title: "پروفایل",
    to: "",
  },
  {
    title: "اطلاعات",
    to: "",
  },
  {
    title: "گزارش",
    to: "",
  },
];

const settings = ["پروفایل", "حساب کاربری", "داشبورد", "خروج"];

interface props {
  isOpenSidebar: boolean;
  handlerOpenSidebar: () => void;
}
export default function TheNavbar({
  isOpenSidebar,
  handlerOpenSidebar,
}: props) {
  const [userAvatar, setUserAvatar] = useState<string>();
  
  useEffect(() => {
    import("../../assets/img/user.jpg").then((image) =>
      setUserAvatar(image.default)
    );
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        boxShadow: "0px 4px 160px rgba(0, 0, 0, 0.13)",
      }}
    >
      <ToolBar
        sx={{
          width: "inherit",
          maxHeight: "4.25rem",
          px: "1rem",
        }}
      >
        <IconButton
          color="primary"
          sx={{
            display: { xs: "none", md: "flex" },
            mr: 1,
            ...(isOpenSidebar && { display: "none" }),
          }}
          onClick={handlerOpenSidebar}
          size="large"
        >
          <AiFillApple />
        </IconButton>

        {/* Nav Items */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <FiMenu />
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
              <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <ListItemIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
          <AiFillApple />
        </ListItemIcon>

        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Apple
        </Typography>

        {/* Nav Items sm */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.title}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              {page.title}
            </Button>
          ))}
        </Box>

        {/* Show Setting popup */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={userAvatar} />
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
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </ToolBar>
    </Box>
  );
}
