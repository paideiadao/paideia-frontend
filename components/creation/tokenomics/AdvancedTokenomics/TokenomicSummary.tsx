import { Box, Button, InputAdornment, TextField } from "@mui/material";
import * as React from "react";
import { ITokenHolder, ITokenomics } from "../../../../lib/creation/Api";
import { IData } from "../../../../lib/utilities";
import { Subheader } from "../../utilities/HeaderComponents";
import InfoIcon from "@mui/icons-material/Info";
import { percentage } from "../../../../lib/creation/Utilities";
import AddIcon from "@mui/icons-material/Add";
import AddDistribution from "./AddDistribution";

const TokenomicsRow: React.FC<{
  title: string;
  balance: number;
  percentage: number;
}> = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: "1rem", mb: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "10%",
        }}
      >
        <InfoIcon color="primary" />
      </Box>
      <TextField
        value={props.title}
        sx={{ width: "47%", mr: ".5rem" }}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        value={props.balance}
        sx={{ width: "25%", mr: ".5rem" }}
        label="Balance"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        label="Percentage"
        value={props.percentage}
        sx={{ width: "18%" }}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <Box sx={{ color: "primary.text" }}>%</Box>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

const TokenomicSummary: React.FC<IData<ITokenomics>> = (props) => {
  const [distributions, setDistributions] = React.useState<number[]>([]);

  let data = props.data;
  let tokenHolderBalance = data.tokenHolders
    .map((i: ITokenHolder) => i.balance)
    .reduce((sum, current) => sum + current, 0);
  let tokenomics = [
    {
      title: "Token holders",
      balance: tokenHolderBalance,
      percentage: percentage(tokenHolderBalance / data.tokenAmount, 2, false),
    },
    {
      title: "Unassigned tokens (Treasury)",
      balance: data.tokenRemaining,
      percentage: percentage(data.tokenRemaining / data.tokenAmount, 2, false),
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      {tokenomics.map((i: any, c: number) => {
        return <TokenomicsRow {...i} />;
      })}
      {distributions.map((i: any, c: number) => (
        <AddDistribution
          data={{ ...props }}
          close={() => {
            let temp = [...distributions];
            temp.splice(c, 1);
            setDistributions(temp);
            let tempGlobalDistributions = [...data.distributions];
            tempGlobalDistributions.splice(c, 1);
            props.setData({
              ...data,
              distributions: tempGlobalDistributions,
            });
          }}
          c={c}
        />
      ))}
      {data.tokenRemaining > 0 && (
        <Button
          variant="text"
          onClick={() => {
            let temp = [...distributions];
            temp.push(temp.length);
            setDistributions(temp);
          }}
        >
          <AddIcon sx={{ mr: ".3rem" }} />
          Add Distribution
        </Button>
      )}
    </Box>
  );
};

export default TokenomicSummary;
