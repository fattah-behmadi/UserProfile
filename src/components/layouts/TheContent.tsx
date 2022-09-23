import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Profile from "components/pages/Profile";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function TheContent() {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Profile />
      </Box>
    </>
  );
}
