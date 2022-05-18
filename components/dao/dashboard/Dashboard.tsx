import { Box, Paper } from "@mui/material";
import * as React from "react";
import PaideiaBanner from "../../../public/dao/banner/paideia-banner.png";
import { Header } from "../../creation/utilities/HeaderComponents";
import FinancialSummary from "./FinancialSummary";
import About from "./widgets/About";
import TokenStats from "./widgets/TokenStats";
import ActiveProposals from "./ActiveProposals";

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          mb: ".5rem",
          borderBottom: "1px solid",
          borderBottomColor: "divider.main",
        }}
      >
        <img src={PaideiaBanner.src} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ width: "70%", p: "1rem", pt: 0 }}>
          <Header title="Welcome to Paideia" />
          <FinancialSummary />
          <ActiveProposals />
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "sticky",
            top: "5rem",
          }}
        >
          <About />
          <TokenStats />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
