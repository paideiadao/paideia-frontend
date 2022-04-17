import { Box, InputAdornment, TextField } from "@mui/material";
import * as React from "react";
import { ITokenHolder, ITokenomics } from "../../../../lib/creation/Api";
import { IData } from "../../../../lib/utilities";
import DeleteIcon from "@mui/icons-material/Delete";
import { CapsInfo, Header } from "../../utilities/HeaderComponents";
import {
  balanceToPercentage,
  percentageToBalance,
} from "../../../../lib/creation/Utilities";
import VestingSchedule, { IVestingSchedule } from "./VestingSchedule";
import BalanceInput from "../../utilities/BalanceInput";
import PercentageInput from "../../utilities/PercentageInput";

export interface ITeamPartnersInfo {
  distributionName: string;
  balance: number;
  percentage: number;
  tokenHolders: ITokenHolder[];
  vesting: boolean;
  initialDistribution: number;
  emissionStartDate: number;
  emissionStartDateUnits: string;
  frequency: string;
  emissionLength: number;
  emissionLengthUnits: string;
}

const TeamPartners: React.FC<{
  data: IData<ITokenomics>;
  close: Function;
  c: number;
}> = (props) => {
  let data = props.data.data;
  const [value, setValue] = React.useState<ITeamPartnersInfo>({
    distributionName: "Team & Partners",
    balance: 0,
    percentage: 0,
    tokenHolders: [],
    vesting: false,
    initialDistribution: 0,
    emissionStartDate: 0,
    emissionStartDateUnits: "weeks",
    frequency: "weekly",
    emissionLength: 0,
    emissionLengthUnits: "weeks",
  });
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
          title="Team & Partners"
          subtitle="Distribute tokens between your team members or advisors."
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
            InputProps={{ readOnly: true }}
          />
          <BalanceInput total={data.tokenAmount} remaining={data.tokenRemaining} balance={value.balance} value={value} set={setValue}/>
          <PercentageInput
            total={data.tokenAmount} remaining={data.tokenRemaining} percentage={value.percentage} value={value} set={setValue}
          />
        </Box>
      </Box>
      <VestingSchedule
        set={(data: IVestingSchedule) => setValue({ ...value, ...data })}
        value={value.vesting}
        id={"team-and-partners"}
      />
    </>
  );
};

export default TeamPartners;
