import * as React from "react";
import { Box } from "@mui/material";
import { GlobalContext, IGlobalContext } from "../../../lib/creation/Context";
import { Header, Subheader } from "../utilities/HeaderComponents";
import TokenInformation from "./TokenInformation";
import { ITokenHolder, ITokenomics } from "../../../lib/creation/Api";
import TokenSymbol from "./TokenSymbol";
import TokenHolders from "./TokenHolders";
import AdvancedTokenomics from "./AdvancedTokenomics";
import TokenDistribution from "./TokenDistribution";

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

  let tokenAmount = data.tokenAmount;
  let tokenHolders = data.tokenHolders;

  React.useEffect(() => {
    set({
      ...globalContext.api.data.tokenomics,
      tokenRemaining:
        tokenAmount -
        tokenHolders
          .map((i: ITokenHolder) => i.balance)
          .reduce((sum, current) => sum + current, 0),
    });
  }, [tokenHolders, tokenAmount]);

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
      <AdvancedTokenomics
        data={data}
        setData={(tokenomicsData: ITokenomics) => set(tokenomicsData)}
      />
      <TokenDistribution
        data={data}
        setData={(tokenomicsData: ITokenomics) => set(tokenomicsData)}
      />
    </Box>
  );
};

export default Tokenomics;
