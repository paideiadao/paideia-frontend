import { Box, InputAdornment, TextField } from "@mui/material";
import * as React from "react";
import { percentageToBalance } from "../../../lib/creation/Utilities";

const PercentageInput: React.FC<{
  total: number;
  remaining: number;
  percentage: number;
  value: any;
  set: Function;
}> = (props) => {
  return (
    <TextField
      value={props.percentage === 0 ? "" : props.percentage}
      sx={{ width: "23%", mr: ".5rem" }}
      onChange={(e: any) => {
        let temp = { ...props.value };
        let percentage = parseFloat(e.target.value);
        percentage = isNaN(percentage) ? 0 : percentage;
        let balance = percentageToBalance(props.total, percentage / 100);
        console.log(balance);
        if (props.remaining === 0 && props.value.balance === 0) {
          return;
        }
        if (
          balance >= props.total &&
          balance <= props.remaining + props.value.balance
        ) {
          balance = props.total;
        } else if (balance > props.remaining + props.value.balance) {
          return;
        }
        temp.percentage = percentage;
        temp.balance = balance;
        props.set(temp);
      }}
      type="number"
      label="Percentage"
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
