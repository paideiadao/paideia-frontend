import { Box, Paper, Button } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { percentage } from "../../../lib/creation/Utilities";

const PerformanceWidget: React.FC<{ value: number }> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.lightSuccess",
        borderRadius: ".3rem",
        fontSize: ".7rem",
        color: "backgroundColor.main",
        p: ".2rem",
      }}
    >
      {props.value > 0 ? (
        <ArrowUpwardIcon style={{ fontSize: "1rem", marginRight: '.1rem' }} />
      ) : (
        <ArrowDownwardIcon style={{ fontSize: "1rem", marginRight: '.1rem' }} />
      )}
      {percentage(props.value, 0)}
    </Box>
  );
};

const TimeWidget: React.FC<{amount: number, unit: string}> = (props) => {
    return <Box
    sx={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "fileInput.main",
      borderRadius: ".3rem",
      fontSize: ".7rem",
      color: "primary.lightText",
      p: ".2rem", ml: '.5rem'
    }}
  >
      {props.amount}{props.unit}
  </Box>
}

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
            color: "primary.lightText",
          }}
        >
          (In 8 currencies)
        </Box>
        <Box sx={{ ml: "auto", display: 'flex', alignItems: 'center' }}>
          <PerformanceWidget value={0.78} />
          <TimeWidget amount={24} unit={'h'} />

        </Box>
      </Paper>
    </Box>
  );
};

export default FinancialSummary;
