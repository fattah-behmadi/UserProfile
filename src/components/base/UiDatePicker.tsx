import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterJalali from "@date-io/date-fns-jalali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface props {
  handlerChange: (dateTime: Date | null) => void;
  value: Date | null;
}
export default function UiDatePicker({ value, handlerChange }: props) {
  return (
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <DatePicker
        mask="____/__/__"
        value={value}
        onChange={handlerChange}
        renderInput={(params) => <TextField {...params}/>}
      />
    </LocalizationProvider>
  );
}
