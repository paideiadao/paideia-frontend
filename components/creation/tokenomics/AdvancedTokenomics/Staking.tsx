import {
  Box,
  Button,
  InputAdornment,
  TextField,
  AlertTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import * as React from "react";
import { ITokenomics } from "../../../../lib/creation/Api";
import { IData } from "../../../../lib/utilities";
import DeleteIcon from "@mui/icons-material/Delete";
import { CapsInfo, Header } from "../../utilities/HeaderComponents";
import BalanceInput from "../../utilities/BalanceInput";
import PercentageInput from "../../utilities/PercentageInput";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Alert from "@mui/material/Alert";
import LabeledSwitch from "../../utilities/LabeledSwitch";

export interface IStakingInfo {
  distributionName: string;
  balance: number;
  percentage: number;
  emissionType: string;
  startDate: Date;
  endDate: Date;
  stakingFee: boolean;
  witholdPercentage: number;
}

const Staking: React.FC<{
  data: IData<ITokenomics>;
  close: Function;
  c: number;
}> = (props) => {
  let data = props.data.data;
  let start = new Date();
  let end = new Date();
  end.setDate(end.getDate() + 30);
  const [value, setValue] = React.useState<IStakingInfo>({
    distributionName: "",
    balance: 0,
    percentage: 0,
    emissionType: "weekly",
    startDate: start,
    endDate: end,
    stakingFee: false,
    witholdPercentage: 0,
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
          title="Staking"
          subtitle="Create a staking contract which distributes tokens over a fixed time-frame."
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          pl: "1rem",
          pr: "1rem",
          borderBottom: "1px solid",
          borderColor: "divider.main",
          mb: "1rem",
          pb: "1rem",
        }}
      >
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
      <Box sx={{ width: "100%", pl: "1rem", pr: "1rem", pb: "1rem" }}>
        <CapsInfo title="Configuration" />
        <FormControl sx={{ width: "32.5%", mr: ".5rem" }}>
          <InputLabel htmlFor={`vesting-frequency-label-${props.c}`} shrink>
            Emission type
          </InputLabel>
          <Select
            labelId={`emission-type-staking-${props.c}`}
            id={`emission-type-staking-${props.c}`}
            variant="outlined"
            label="Emission type"
            value={value.emissionType}
            sx={{ height: "100%", color: "primary.text" }}
            onChange={(e: any) =>
              setValue({
                ...value,
                emissionType: e.target.value,
              })
            }
          >
            <MenuItem value="hourly">Hourly</MenuItem>
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={["day"]}
            label="Start date"
            value={value.startDate}
            InputAdornmentProps={{ position: "start", variant: "standard" }}
            onChange={(newValue) => {
              setValue({ ...value, startDate: newValue });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={null}
                sx={{
                  width: "32.5%",
                  mr: ".5rem",
                  svg: { color: "primary.main" },
                }}
              />
            )}
          />
          <DatePicker
            views={["day"]}
            label="End date"
            value={value.endDate}
            InputAdornmentProps={{ position: "start", variant: "standard" }}
            onChange={(newValue) => {
              setValue({ ...value, endDate: newValue });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={null}
                sx={{
                  width: "32.5%",
                  svg: { color: "primary.main" },
                }}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ width: "100%", pl: "1rem", pb: "1rem", pr: ".6rem" }}>
        <LabeledSwitch
          small
          title="DAOs staking fee"
          subtitle="You can activate this option in order to withold some fo the staking rewards for the DAO's treasury."
          value={value.stakingFee}
          onChange={() => setValue({ ...value, stakingFee: !value.stakingFee })}
        />
        {value.stakingFee && (
          <TextField
            value={value.witholdPercentage === 0 ? "" : value.witholdPercentage}
            sx={{ width: "20%" }}
            onChange={(e: any) =>
              setValue({ ...value, witholdPercentage: e.target.value })
            }
            type="number"
            label="Withold percentage"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box sx={{ color: "primary.text" }}>%</Box>
                </InputAdornment>
              ),
            }}
          />
        )}
      </Box>
    </>
  );
};

export default Staking;
