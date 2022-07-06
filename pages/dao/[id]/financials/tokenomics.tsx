import { Header } from "@components/creation/utilities/HeaderComponents";
import TokenomicsHeader from "@components/dao/financials/tokenomics/Header";
import TokenomicsChart from "@components/dao/financials/tokenomics/TokenomicsChart";
import Layout from "@components/dao/Layout";
import { Box, Button } from "@mui/material";
import * as React from "react";
import { TreasuryInfo } from "./treasury";

const Tokenomics: React.FC = () => {
  return (
    <Layout width="95%">
      <Box sx={{ width: "100%", display: "flex", alignItems: "flex-start" }}>
        <Box sx={{ width: "72%" }}>
          <TokenomicsHeader />
          <TokenomicsChart />
        </Box>
        <Box sx={{ width: "28%", position: "sticky", top: "1.6rem" }}>
          <TreasuryInfo />
        </Box>
      </Box>
    </Layout>
  );
};

export default Tokenomics;
