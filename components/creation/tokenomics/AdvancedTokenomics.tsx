import { Box } from "@mui/material";
import * as React from "react";
import { ITokenomics } from "../../../lib/creation/Api";
import { GlobalContext } from "../../../lib/creation/Context";
import { IData } from "../../../lib/utilities";
import { LearnMore, Subtitle } from "../utilities/HeaderComponents";
import LabeledSwitch from "../utilities/LabeledSwitch";

const AdvancedTokenomics: React.FC<IData<ITokenomics>> = (props) => {
  let globalContext = React.useContext(GlobalContext);
  let data = props.data;
  return (
    <Box sx={{ mt: ".5rem" }}>
      <LearnMore title="Set advanced tokenomics" />
      <Subtitle subtitle="Here you can create public & private sales, airdrops, stacking pools, provide liquidity, distribute and divide your treasury into different pockets, and set aside tokens for team & partners." />
      <LabeledSwitch
        title="Activate tokenomics"
        value={data.activateTokenomics}
        onChange={(value) =>
          globalContext.api.setData({
            ...globalContext.api.data,
            tokenomics: {
              ...globalContext.api.data.tokenomics,
              activateTokenomics: value,
            },
          })
        }
      />
    </Box>
  );
};

export default AdvancedTokenomics;
