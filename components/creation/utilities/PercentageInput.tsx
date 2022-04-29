import { Box, InputAdornment, TextField } from "@mui/material";
import * as React from "react";
import { percentageToBalance } from "../../../lib/creation/Utilities";

const PercentageInput: React.FC<{
  total: number;
  remaining: number;
  percentage: number;
  value: any;
  set: Function;
  label?: string;
  width?: string;
}> = (props) => {
  return (
    <TextField
      value={props.percentage === 0 ? "" : props.percentage}
      sx={{ width: props.width === undefined ? "23%" : props.width }}
      onChange={(e: any) => {
        let temp = { ...props.value };
        let percentage = parseFloat(e.target.value);
        percentage = isNaN(percentage) ? 0 : percentage;
        let balance = percentageToBalance(props.total, percentage / 100);
        console.log(percentage, balance, 'here.')
        if (balance === 0) {
          return;
        }
        if (
          balance >= props.total
        ) {
          balance = props.total;
        }
        temp.percentage = percentage;
        temp.balance = balance;
        props.set(temp);
      }}
      type="number"
      label={props.label === undefined ? "Percentage" : props.label}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box sx={{ color: "primary.text" }}>%</Box>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PercentageInput;
