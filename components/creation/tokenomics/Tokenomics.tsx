import * as React from "react";
import { AlertTitle, Box, Divider, Button, ButtonGroup } from "@mui/material";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { GlobalContext, IGlobalContext } from "../../../lib/creation/Context";
import { Header, Subheader } from "../utilities/HeaderComponents";
import TokenInformation from "./TokenInformation";
import { ITokenomics } from "../../../lib/creation/Api";
import TokenSymbol from "./TokenSymbol";
import TokenHolders from "./TokenHolders";

const Tokenomics: React.FC = () => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  let data = globalContext.api.data.tokenomics;
  const set = (tokenomicsData: ITokenomics) => {
    globalContext.api.setData({
      ...globalContext.api.data,
      tokenomics: {
        ...tokenomicsData,
      },
    });
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
      <Header
        title="Token creation and distribution"
        subtitle="Decide your token name, ticker, and distribution, or bring in an existing token."
      />
      <Box
        sx={{
          borderBottom: "1px solid",
          borderBottomColor: "divider.main",
          pb: "1rem",
        }}
      >
        <TokenInformation
          data={data}
          setData={(tokenomicsData: ITokenomics) => set(tokenomicsData)}
        />
        <TokenSymbol
          data={data}
          setData={(tokenomicsData: ITokenomics) => set(tokenomicsData)}
        />
      </Box>
      <TokenHolders
        data={data}
        setData={(tokenomicsData: ITokenomics) => set(tokenomicsData)}
      />
    </Box>
  );
};

export default Tokenomics;
