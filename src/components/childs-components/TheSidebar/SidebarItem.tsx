import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { IconType } from "react-icons/lib";
import theme from "../../../plugins/theme";

interface props {
  text: string;
  icon: IconType;
  state: boolean;
  children?: React.ReactNode;
}
export default function SidebarItem({ text, icon, state }: props) {
  const ItemIcon = icon;
  return (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: state ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              ml: state ? 3 : "auto",
              justifyContent: "center",
              width: "2.5rem",
              height: "2.5rem",
              color: theme.palette.common.white,

            }}
          >
            <ItemIcon />
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={{
              opacity: state ? 1 : 0,
              textAlign: "right",
              color: theme.palette.common.white,
            }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
}
