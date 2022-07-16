import {
  Header,
  LearnMore,
  Subtitle,
} from "@components/creation/utilities/HeaderComponents";
import LabeledSwitch from "@components/creation/utilities/LabeledSwitch";
import Divider from "@components/utilities/Divider";
import MultiWalletSelector from "@components/utilities/MultiWalletSelector";
import { deviceStruct } from "@components/utilities/Style";
import Warning from "@components/utilities/Warning";
import { IWallet } from "@lib/creation/CreationApi";
import {
  ConfigContext,
  IConfigContext,
} from "@lib/dao/dao-config/ConfigContext";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import * as React from "react";
import OptimisticGovernance from "./governance/OptimisticGovernance";
import QuadraticVoting from "./governance/QuadraticVoting";
import Quorum from "./governance/Quorum";
import Support from "./governance/Support";

const Governance: React.FC = () => {
  const context = React.useContext<IConfigContext>(ConfigContext);
  const data = context.api.data.governance;
  return (
    <>
      <Header
        title="Governance and voting configuration"
        subtitle="You can use the default settings, or dive more in depth and configure your voting system as you wish. You can enable and configure features such as 'Optimistic governance' or 'Quadratic voting' and edit the support, quorum, and voting times."
        mb=".25rem"
      />
      <OptimisticGovernance />
      <Divider m=".5rem" />
      <QuadraticVoting />
      <Divider m=".5rem" />
      <Header
        title="Configure voting system"
      />
    <Support/>
    <Warning title={"Only for single-choice voting"} subtitle={"Support will only apply to single-choice voting. It determines the percentage of users that need to agree for a proposal to be approved. Cant be set to less than 51%."}/>
      <Quorum/>
      <Divider m=".5rem" />
    </>
  );
};

export default Governance;
