import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FiMenu } from "react-icons/fi";


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: '240px',
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface props {
  isOpenSidebar: boolean;
  handlerOpenSidebar: () => void;
}
export default function TheNavbar({
  isOpenSidebar,
  handlerOpenSidebar,
}: props) {
  return (
    <>
      <AppBar position="fixed" open={isOpenSidebar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handlerOpenSidebar}
            edge="start"
            sx={{
              ...(isOpenSidebar && { display: "none" }),
            }}
          >
            <FiMenu />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div" sx={{
            mr:'auto'
          }}>
            Navbar
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
