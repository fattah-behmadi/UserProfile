import { Box } from "@mui/material";
import React from "react";

export default function ItemSlider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        height: "20rem",
      }}
    >
      {children}
    </Box>
  );
}
