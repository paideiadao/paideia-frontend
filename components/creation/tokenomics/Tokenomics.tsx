import * as React from "react";
import { AlertTitle, Box, Divider, Button, ButtonGroup } from "@mui/material";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { GlobalContext } from "../../../lib/creation/Context";
import { Header, Subheader } from "../utilities/HeaderComponents";
import TokenInformation from "./TokenInformation";

const Tokenomics: React.FC = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: '70%'}}>
      <Header
        title="Token creation and distribution"
        subtitle="Decide your token name, ticker, and distribution, or bring in an existing token."
      />
      <TokenInformation />
    </Box>
  );
};

export default Tokenomics;
