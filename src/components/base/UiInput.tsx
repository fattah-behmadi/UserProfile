import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  ".MuiFormControl-root": {
    display: "flex",
    flexDirection: "column",
  },
  "label + &": {
    // marginTop: theme.spacing(2),
    position: "relative",
  },
  "& .MuiInputBase-input": {
    height: "34px",
    borderRadius: 12,
    border: "1px solid #ced4da",
    position: "relative",
    fontSize: 12,
    width: 180,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [].join(","),
    "&:focus": {
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

interface Props {
  label?: string;
  value: string;
  placeholder?: string;
  handlerChange: (value: string) => void;
}
const UiInput: React.FC<Props> = ({
  label,
  value,
  placeholder,
  handlerChange,
}) => {
  const handleChange = (event: any) => {
    handlerChange(event.target.value);
  };

  return (
    <FormControl variant="standard">
      <InputLabel
        shrink
        htmlFor="bootstrap-input"
        style={{
          fontWeight: 400,
          color: "black",
          fontSize: 16,
          position: "relative",
          transform: "unset",

        }}
      >
        {label}
      </InputLabel>
      <BootstrapInput
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </FormControl>
  );
};

export default UiInput;
