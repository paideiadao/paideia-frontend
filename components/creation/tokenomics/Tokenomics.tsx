import * as React from "react";
import { Box } from "@mui/material";
import { GlobalContext, IGlobalContext } from "../../../lib/creation/Context";
import { Header, Subheader } from "../utilities/HeaderComponents";
import TokenInformation from "./TokenInformation";
import { ITokenHolder, ITokenomics } from "../../../lib/creation/Api";
import TokenSymbol from "./TokenSymbol";
import TokenHolders from "./TokenHolders";
import AdvancedTokenomics from "./AdvancedTokenomics/AdvancedTokenomics";
import TokenDistribution from "./TokenDistribution";
import { ILiquidityInfo } from "./AdvancedTokenomics/Liquidity";
import InfoIcon from "@mui/icons-material/Info";
import { percentage } from "../../../lib/creation/Utilities";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
  let distributions = data.distributions;

  /*
    Discuss with nico
    - All drafts popup / page
    - indicators on top nav bar for which draft you're using
    - Auto save feature for user

  */

  React.useEffect(() => {
    set({
      ...globalContext.api.data.tokenomics,
      tokenRemaining:
        tokenAmount -
        (tokenHolders.length === 0
          ? 0
          : tokenHolders
              .map((i: ITokenHolder) => i.balance)
              .reduce((sum, current) => sum + current, 0)) -
        (distributions.length === 0
          ? 0
          : distributions
              .filter((i: any) => i !== undefined)
              .filter((i: any) => i.hasOwnProperty("contingency"))
              .map((i: ILiquidityInfo) => i.contingency.balance)
              .reduce((sum, current) => sum + current, 0)) -
        (distributions.length === 0
          ? 0
          : distributions
              .filter((i: any) => i !== undefined)
              .map((i: any) => i.balance)
              .reduce((sum, current) => sum + current, 0)),
    });
  }, [tokenHolders, tokenAmount, distributions]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
      {data.distributions.length > 0 && data.tokenAmount > 0 && (
        <Box
          sx={{
            position: "sticky",
            backgroundColor:
              data.tokenRemaining === 0
                ? "primary.lightSuccess"
                : data.tokenRemaining < 0
                ? "tokenAlert.main"
                : "primary.main",
            width: "calc(100vw - 15.4rem)",
            ml: "-21.5%",
            mt: "-2rem",
            top: "-2rem",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "secondary.contrastText",
            pt: ".2rem",
            pb: ".2rem",
          }}
        >
          {data.tokenRemaining === 0 ? (
            <CheckCircleIcon sx={{ mr: ".5rem" }} />
          ) : (
            <InfoIcon sx={{ mr: ".5rem" }} />
          )}
          {data.tokenRemaining === 0
            ? "Tokenomics correctly distributed."
            : data.tokenRemaining > 0
            ? `You have a balance of ${data.tokenRemaining} (
          ${percentage(data.tokenRemaining / data.tokenAmount, 0, true)})
          unassigned tokens.`
            : `You are over your balance of assignable tokens +${-data.tokenRemaining} (+${percentage(
                -data.tokenRemaining / data.tokenAmount,
                0,
                true
              )}) tokens`}
        </Box>
      )}
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
