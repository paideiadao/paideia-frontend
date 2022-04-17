import * as React from "react";
import { ITokenomics } from "../../../../lib/creation/Api";
import { IData } from "../../../../lib/utilities";
import { Box, InputAdornment, TextField } from "@mui/material";
import { CapsInfo, Header, Subheader } from "../../utilities/HeaderComponents";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  balanceToPercentage,
  percentageToBalance,
} from "../../../../lib/creation/Utilities";
import VestingSchedule, { IVestingSchedule } from "./VestingSchedule";

export interface ITreasuryInfo {
  distributionName: string;
  balance: number;
  percentage: number;
  vesting: boolean;
  initialDistribution: number;
  emissionStartDate: number;
  emissionStartDateUnits: string;
  frequency: string;
  emissionLength: number;
  emissionLengthUnits: string;
}

const Treasury: React.FC<{
  data: IData<ITokenomics>;
  close: Function;
  c: number;
}> = (props) => {
  let data = props.data.data;
  const [value, setValue] = React.useState<ITreasuryInfo>({
    distributionName: "",
    balance: 0,
    percentage: 0,
    vesting: false,
    initialDistribution: 0,
    emissionStartDate: 0,
    emissionStartDateUnits: "weeks",
    frequency: "weekly",
    emissionLength: 0,
    emissionLengthUnits: "weeks",
  });

  React.useEffect(() => {
    /// add data to global context...
    let temp = [...data.distributions];
    temp[props.c] = { ...value };
    props.data.setData({
      ...data,
      distributions: temp,
    });
  }, [value]);

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
          pl: "1rem",
        }}
      >
        <Header
          title="Treasury"
          subtitle="Organize your treasury into categories"
        />
      </Box>
      <Box sx={{ width: "100%", pl: "1rem" }}>
        <CapsInfo title="General Information" />
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
            value={value.distributionName}
            sx={{ width: "50%", mr: ".5rem" }}
            onChange={(e: any) => {
              setValue({ ...value, distributionName: e.target.value });
            }}
            label="Distribution Name"
          />
          <TextField
            value={value.balance === 0 ? "" : value.balance}
            sx={{ width: "27%", mr: ".5rem" }}
            onChange={(e: any) => {
              let temp = { ...value };
              let balance = parseFloat(e.target.value);
              balance = isNaN(balance) ? 0 : balance;
              let percentage = balanceToPercentage(data.tokenAmount, balance);
              if (data.tokenRemaining === 0 && value.balance === 0) {
                return;
              }
              if (
                balance >= data.tokenAmount &&
                balance <= data.tokenRemaining + value.balance
              ) {
                balance = data.tokenAmount;
              } else if (balance > data.tokenRemaining + value.balance) {
                return;
              }
              temp.balance = balance;
              temp.percentage = percentage;
              setValue(temp);
            }}
            type="number"
            label="Balance"
          />
          <TextField
            value={value.percentage === 0 ? "" : value.percentage}
            sx={{ width: "23%", mr: ".5rem" }}
            onChange={(e: any) => {
              let temp = { ...value };
              let percentage = parseFloat(e.target.value);
              percentage = isNaN(percentage) ? 0 : percentage;
              let balance = percentageToBalance(data.tokenAmount, percentage);
              if (data.tokenRemaining === 0 && value.balance === 0) {
                return;
              }
              if (
                balance >= data.tokenAmount &&
                balance <= data.tokenRemaining + value.balance
              ) {
                balance = data.tokenAmount;
              } else if (balance > data.tokenRemaining + value.balance) {
                return;
              }
              temp.percentage = e.target.value;
              temp.balance = balance;
              setValue(temp);
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
        </Box>
      </Box>
      <VestingSchedule
        set={(data: IVestingSchedule) => setValue({ ...value, ...data })}
        value={value.vesting}
        id="treasury"
      />
    </>
  );
};

export default Treasury;
