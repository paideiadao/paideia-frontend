import {
  Subheader,
  Subtitle,
} from "@components/creation/utilities/HeaderComponents";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ThemeContext } from "@lib/ThemeContext";
import { DarkTheme } from "@theme/theme";

export interface IInfoCard {
  title: string;
  value: string;
  last?: boolean;
  ticker?: string;
  dropdown?: boolean;
}

export const InfoCard: React.FC<IInfoCard> = (props) => {
  const [time, setTime] = React.useState("24hrs");

  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string);
  };
  const themeContext = React.useContext(ThemeContext);
  return (
    <Box
      sx={{
        border: "1px solid",
        backgroundColor: "fileInput.outer",
        borderColor: "border.main",
        borderRadius: ".3rem",
        width: "33%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: "1rem",
        mt: "1rem",
        mb: "1rem",
        mr: props.last ? 0 : "1rem",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ fontSize: "1.3rem", color: "primary.text" }}>
          {props.value}{" "}
          <Box
            sx={{
              display: "inline",
              color: "text.light",
              fontSize: ".9rem",
              fontWeight: 500,
            }}
          >
            {props.ticker}
          </Box>
        </Box>
        <Box sx={{ color: "text.light", fontSize: ".9rem" }}>{props.title}</Box>
      </Box>
      {props.dropdown && (
        <Box sx={{ ml: "1rem", color: "backgroundColor.main" }}>
          <Select
            size="small"
            sx={{
              backgroundColor: "primary.main",
              color: "backgroundColor.main",
              fontSize: ".9rem",
              p: "-1rem",
              svg: {
                fill: themeContext.theme === DarkTheme ? "black" : "white",
              },
            }}
            notched
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={time}
            onChange={handleChange}
          >
            <MenuItem value="24hrs">24hrs</MenuItem>
            <MenuItem value="1d">1d</MenuItem>
            <MenuItem value="1w">1w</MenuItem>
            <MenuItem value="1m">1m</MenuItem>
            <MenuItem value="1yr">1yr</MenuItem>
          </Select>
        </Box>
      )}
    </Box>
  );
};

const GeneralInfo: React.FC = () => {
  return (
    <Box sx={{ width: "100%", mt: "1rem" }}>
      <Subheader title="General info" />
      <Subtitle subtitle="Staking your tokens will generate new tokens daily based on the APY percentage below." />
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <InfoCard title="Number of Stakers" value="621" />
        <InfoCard title="DTK tokens staked" value="769,382" />
        <InfoCard title="Current APY" value="447.42" last />
      </Box>
    </Box>
  );
};

export default GeneralInfo;
