import {
  CapsInfo,
  Header,
} from "@components/creation/utilities/HeaderComponents";
import LabeledSwitch from "@components/creation/utilities/LabeledSwitch";
import MultiWalletSelector from "@components/creation/utilities/MultiWalletSelector";
import { IWallet } from "@lib/creation/CreationApi";
import ProposalContext, { IProposalContext } from "@lib/dao/proposal/ProposalContext";
import { Box, TextField } from "@mui/material";
import { IProposalAction } from "@pages/dao/[id]/proposal/create";
import * as React from "react";
import Layout from "./Layout";

export interface IOptimisticGovernance {
  actionName: string;
  actionDescription: string;
  activated: boolean;
  wallets: IWallet[]
}

const OptimisticGovernance: React.FC<IProposalAction> = (props) => {
  const context = React.useContext<IProposalContext>(ProposalContext);
  const [value, setValue] = React.useState<IOptimisticGovernance>({
    actionName: "Optimistic governance",
    actionDescription: "Turn on or off optimistic governance and or edit the whitelisted members",
    activated: true,
    wallets: [{ alias: "", address: "", img: "" }]
  });

  React.useEffect(() => {
    const temp = [...context.api.value.actions]
    temp[props.c].data = value
    context.api.setValue({
      ...context.api.value,
      actions: temp
    })
  }, [value])
  return (
    <Layout>
      <Header
        title="Optimistic governance"
        large
        mb="0"
        subtitle="Turn on or off optimistic governance and or edit the whitelisted members."
      />
      <Box
        sx={{
          width: "calc(100% + 1rem)",
          ml: '-.5rem',
          borderBottom: 1,
          borderColor: "border.main",
          mt: "rem",
          mb: "1rem",
        }}
      />
      <CapsInfo title="Information" mb="0rem" />
      <TextField
        sx={{ width: "100%", mt: "1rem" }}
        label="Action name"
        value={value.actionName}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        sx={{ width: "100%", mt: "1rem" }}
        label="Action descriptions"
        value={value.actionName}
        InputProps={{
          readOnly: true,
        }}
      />
      <Box
        sx={{
          width: "calc(100% + 1rem)",
          ml: '-.5rem',
          borderBottom: 1,
          borderColor: "border.main",
          mt: ".5rem",
          mb: "1rem",
        }}
      />
      <CapsInfo title="Configuration" mb="-1rem" />
      <LabeledSwitch
        title="Optimistic governance"
        subtitle="All proposals are passed by default, unless challenged."
        value={value.activated}
        onChange={() => setValue({ ...value, activated: !value.activated })}
      />
      {value.activated && <MultiWalletSelector
        wallets={value.wallets}
        set={(wallets: IWallet[]) => setValue({
          ...value,
          wallets: wallets
        })}
      />}
      <Box sx={{mb: '.5rem'}}/>
    </Layout>
  );
};

export default OptimisticGovernance;
