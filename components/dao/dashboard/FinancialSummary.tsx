import { Box, Paper, Button } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { percentage } from "../../../lib/creation/Utilities";

export const PerformanceWidget: React.FC<{ value: number, invert?: boolean, places?: number, large?: boolean }> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: props.invert ? 'transparent' : props.value <= 0 ? "error.main" : "primary.lightSuccess",
        borderRadius: ".3rem",
        fontSize: props.large ? '1rem' : ".9rem",
        color: props.invert ? props.value <= 0 ? "error.main" : "primary.lightSuccess" : "backgroundColor.main",
        p: ".2rem",
      }}
    >
      {props.value > 0 ? (
        <ArrowUpwardIcon style={{ fontSize: "1rem", marginRight: ".1rem" }} />
      ) : (
        <ArrowDownwardIcon style={{ fontSize: "1rem", marginRight: ".1rem" }} />
      )}
      {percentage(props.value, props.places === undefined ? 0 : props.places)}
    </Box>
  );
};

export const TimeWidget: React.FC<{ amount: number; unit: string, small?: boolean }> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "fileInput.main",
        borderRadius: ".3rem",
        fontSize: props.small ? '.8rem' : ".9rem",
        color: "text.light",
        p: ".2rem",
        pt: '.1rem',
        pb: '.1rem',
        ml: ".5rem",
        border: "1px solid",
        borderColor: "divider.main",
      }}
    >
      {props.amount}
      {props.unit}
    </Box>
  );
};

export interface IAssetCard {
  amount: number | string;
  ticker: string;
  percentage: number;
  total: string;
  c: number;
}

const AssetCard: React.FC<IAssetCard> = (props) => {
  return (
    <Box
      sx={{
        borderRadius: ".3rem",
        backgroundColor: "fileInput.outer",
        p: ".5rem",
        width: "25%",
        border: "1px solid",
        borderColor: "divider.main",
        ml: props.c === 0 ? 0 : ".5rem",
        fontSize: ".9rem",
      }}
    >
      <Box>
        {props.amount} {props.ticker}
      </Box>
      <Box sx={{ fontSize: ".7rem", color: "text.light" }}>
        {percentage(props.percentage, 0)} ({props.total})
      </Box>
    </Box>
  );
};

const assets = [
  { amount: 5482, ticker: "SigUSD", percentage: 0.54, total: "$5482 USD" },
  { amount: 22116, ticker: "PTK", percentage: 0.27, total: "$2,698 USD" },
  { amount: 398.75, ticker: "ERG", percentage: 0.11, total: "$1,107 USD" },
  { amount: "$713", ticker: "Other (5)", percentage: 0.07, total: "$713 USD" },
];

const FinancialSummary: React.FC = () => {
  return (
    <Box sx={{ width: "100%", mt: ".5rem" }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Subheader title="Financial summary" small bold />
        <Button sx={{ ml: "auto", fontSize: ".8rem" }}>View More</Button>
      </Box>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          backgroundColor: "fileInput.outer",
          border: "1px solid",
          borderColor: "divider.main",
          mt: ".5rem",
          mb: ".5rem",
          p: ".5rem",
          display: "flex",
          alignItems: "center",
          fontSize: "1.1rem",
        }}
      >
        $10,045{" "}
        <Box
          sx={{
            display: "inline",
            ml: ".3rem",
            fontSize: ".8rem",
            color: "text.light",
          }}
        >
          (In 8 currencies)
        </Box>
        <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
          <PerformanceWidget value={-0.07} />
          <TimeWidget amount={24} unit={"h"} />
        </Box>
      </Paper>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        {assets.map((i: any, c: number) => {
          return <AssetCard {...i} c={c} key={"asset-card-key-" + c} />;
        })}
      </Box>
    </Box>
  );
};

export default FinancialSummary;
