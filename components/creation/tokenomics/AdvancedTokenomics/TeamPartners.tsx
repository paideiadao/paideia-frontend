import { Box, Button, InputAdornment, TextField } from "@mui/material";
import * as React from "react";
import { ITokenHolder, ITokenomics } from "../../../../lib/creation/Api";
import { IData } from "../../../../lib/utilities";
import DeleteIcon from "@mui/icons-material/Delete";
import { CapsInfo, Header, LearnMore } from "../../utilities/HeaderComponents";
import VestingSchedule, { IVestingSchedule } from "./VestingSchedule";
import BalanceInput from "../../utilities/BalanceInput";
import PercentageInput from "../../utilities/PercentageInput";
import WalletSelector from "../../governance/WalletSelector";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";

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
  const [tokenRemaining, setTokenRemaining] = React.useState<number>(0);

  React.useEffect(() => {
    setTokenRemaining(value.balance - (value.tokenHolders.length === 0
      ? 0
      : value.tokenHolders
          .map((i: any) => i.balance)
          .reduce((sum, current) => sum + current, 0)))
  }, [value.balance, value.tokenHolders])

  React.useEffect(() => {
    /// add data to global context...
    let temp = [...data.distributions];
    temp[props.c] = { ...value };
    props.data.setData({
      ...data,
      distributions: temp,
    });
  }, [value]);

  console.log(tokenRemaining)
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
      <Box sx={{ width: "100%", pl: "1rem", borderBottom: "1px solid",
          borderColor: "divider.main", pb: '1rem'}}>
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
          <BalanceInput
            total={data.tokenAmount}
            remaining={data.tokenRemaining}
            balance={value.balance}
            value={value}
            set={setValue}
          />
          <PercentageInput
            total={data.tokenAmount}
            remaining={data.tokenRemaining}
            percentage={value.percentage}
            value={value}
            set={setValue}
          />
        </Box>
      </Box>
      <Box sx={{width: '100%', pl: '1rem', mt: '1rem', pr: '.5rem'}}>
        <CapsInfo title="Configuration" />
        <LearnMore title='Token Holder Addresses' light/>
        {value.tokenHolders.map((i: ITokenHolder, c: number) => {
          return <Box
          sx={{ display: "flex", alignItems: "flex-start", height: "5rem" }}
        >
          <Box
            sx={{
              width: "57%",
              mr: ".5rem",
              display: "flex",
              alignItem: "flex-start",
            }}
          >
            <WalletSelector
              id="tokenomics"
              key={c + "tokenomics"}
              data={i}
              mt="0"
              number={c}
              set={(j: any) => {
                let temp = [...value.tokenHolders];
                if (j === undefined) {
                  temp.splice(c, 1);
                } else {
                  temp[c] = { ...temp[c], ...j };
                }
                setValue({ ...value, tokenHolders: temp });
              }}
            />
          </Box>
          <BalanceInput
            total={value.balance}
            remaining={tokenRemaining}
            balance={value.tokenHolders[c].balance}
            value={value.tokenHolders[c]}
            set={(newValue: any) => {
              let temp = [...value.tokenHolders];
              temp[c] = { ...newValue };
              setValue({ ...value, tokenHolders: temp });
            }}
          />
          <PercentageInput
            total={value.balance}
            remaining={tokenRemaining}
            percentage={value.tokenHolders[c].percentage}
            value={value.tokenHolders[c]}
            set={(newValue: any) => {
              let temp = [...value.tokenHolders];
              temp[c] = { ...newValue };
              setValue({ ...value, tokenHolders: temp });
            }}              />
        </Box>
        })}
        {data.tokenRemaining > 0 &&
        value.tokenHolders.map((i: any) => i.balance).indexOf(0) === -1 &&
        value.tokenHolders.map((i: any) => i.percentage).indexOf(0) === -1 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: ".8rem",
            }}
          >
            <Button
              variant="text"
              sx={{ mr: 2 }}
              onClick={() => {
                let temp = [...value.tokenHolders];
                setValue({
                  ...value,

                    tokenHolders: temp.concat([
                      {
                        alias: "",
                        address: "",
                        img: "",
                        balance: 0,
                        percentage: 0,
                      },
                    ]),
                });
              }}
            >
              Add Another <AddIcon />
            </Button>
            <Button variant="text">
              Add from file <FileUploadIcon />
            </Button>
          </Box>
        )}
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
