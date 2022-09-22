import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { cloneElement, FunctionComponent } from "react";
import { IconType } from "react-icons/lib";

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
              minWidth: 0,
              ml: state ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <ItemIcon />
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: state ? 1 : 0,textAlign:'right' }} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
