import { Button } from "@mui/material";
import React from "react";

type colorButton =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "customColor";
interface props {
  children?: React.ReactNode;
  type?: "text" | "outlined" | "contained";
  color?: colorButton;
  disabled?: boolean;
  handleClick: () => void;
  width?: string | number;
}

const UiButton: React.FC<props> = ({
  children,
  type,
  color,
  disabled,
  handleClick,
  width,
}) => {
  return (
    <Button
      onClick={handleClick}
      variant={type}
      disabled={disabled}
      color={color}
      sx={{
        borderRadius: ".625rem",
        minHeight: "3rem",
        fontSize: "1rem",
        width: width,
      }}
    >
      {children}
    </Button>
  );
};

export default UiButton;
