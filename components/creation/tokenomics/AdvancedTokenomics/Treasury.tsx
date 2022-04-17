import * as React from "react";
import { ITokenomics } from "../../../../lib/creation/Api";
import { IData } from "../../../../lib/utilities";
import { Box, InputAdornment, TextField } from "@mui/material";
import { Header, Subheader } from "../../utilities/HeaderComponents";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  balanceToPercentage,
  percentageToBalance,
} from "../../../../lib/creation/Utilities";

interface ITreasuryInfo {
  distributionName: string;
  balance: number;
  percentage: number;
}

const Treasury: React.FC<{ data: IData<ITokenomics>; close: Function }> = (
  props
) => {
  const [values, setValues] = React.useState<ITreasuryInfo[]>([
    { distributionName: "", balance: 0, percentage: 0 },
  ]);
  let data = props.data.data;
  console.log(data);
  return (
    <>
      <DeleteIcon
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          cursor: "pointer",
        }}
        color="error"
        onClick={() => props.close()}
      />

      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid",
          borderColor: "divider.main",
          mb: "1rem",
        }}
      >
        <Header
          title="Treasury"
          subtitle="Organize your treasury into categories"
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Subheader title="GENERAL INFORMATION" small bold />
        {values.map((i: ITreasuryInfo, c: number) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              mt: ".5rem",
              mb: ".5rem",
            }}
          >
            <TextField
              value={i.distributionName}
              sx={{ width: "50%", mr: ".5rem" }}
              onChange={(e: any) => {
                let temp = [...values];
                temp[c].distributionName = e.target.value;
                setValues(temp);
              }}
              label="Distribution Name"
            />
            <TextField
              value={i.balance}
              sx={{ width: "35%", mr: ".5rem" }}
              onChange={(e: any) => {
                let temp = [...values];
                let balance = parseFloat(e.target.value);
                let percentage = balanceToPercentage(data.tokenAmount, balance);
                console.log("percentage", percentage);
                temp[c].balance = balance;
                temp[c].percentage = percentage;
                setValues(temp);
              }}
              type="number"
              label="Balance"
            />
            <TextField
              value={i.percentage}
              sx={{ width: "15%", mr: ".5rem" }}
              onChange={(e: any) => {
                let temp = [...values];
                let percentage = parseFloat(e.target.value);
                let balance = percentageToBalance(data.tokenAmount, percentage);
                temp[c].percentage = e.target.value;
                temp[c].balance = balance;
                setValues(temp);
              }}
              type="number"
              label="Percentage"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Treasury;
