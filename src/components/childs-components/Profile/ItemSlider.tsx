import { Box } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import React from "react";

export default function ItemSlider(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={{
        height: "20rem",
        ...props.sx
      }}
    >
      {props.children}
    </Box>
  );
}
