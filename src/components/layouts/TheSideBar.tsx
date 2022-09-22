import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import SidebarListItems from "../childs-components/TheSidebar/SidebarListItems";
import { Container } from "@mui/system";

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  "& .MuiPaper-root": {
    position:'relative'
  },

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface props {
  handlerCloseSidebar: () => void;
  isOpen: boolean;
}
export default function TheSidebar({ handlerCloseSidebar, isOpen }: props) {
  return (
    <Box sx={{ display: "flex" }}>
      {/* The sidebar */}

      <Drawer variant="permanent" open={isOpen} anchor="right">
        {/* Header Sidebar */}
        <DrawerHeader>
          <IconButton onClick={handlerCloseSidebar}>
            {isOpen ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
          </IconButton>
        </DrawerHeader>

        {/* ItemsSidebar */}
        <SidebarListItems state={isOpen} />
      </Drawer>
    </Box>
  );
}
