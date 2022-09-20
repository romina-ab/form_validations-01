import React from "react";
import TextField from "@mui/material/TextField";
import AdapterJalali from "@date-io/date-fns-jalali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import az from 'date-fns/locale/az';

export default function JalaliDatePicker() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <DatePicker
        label="Date"
        mask="____/__/__"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
}
