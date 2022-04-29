import { TextField } from "@mui/material";
import * as React from "react";
import { balanceToPercentage } from "../../../lib/creation/Utilities";

const BalanceInput: React.FC<{
  total: number;
  remaining: number;
  balance: number;
  value: any;
  set: Function;
}> = (props) => {
  return (
    <TextField
      value={props.balance === 0 ? "" : props.balance}
      sx={{ width: "27%", mr: ".5rem" }}
      onChange={(e: any) => {
        let temp = { ...props.value };
        let balance = parseFloat(e.target.value);
        balance = isNaN(balance) ? 0 : balance;
        let percentage = balanceToPercentage(props.total, balance);
        if (balance === 0) {
          return;
        }
        if (
          balance >= props.total
        ) {
          balance = props.total;
        }
        temp.balance = balance;
        temp.percentage = percentage;
        props.set(temp);
      }}
      type="number"
      label="Balance"
    />
  );
};

export default BalanceInput;
