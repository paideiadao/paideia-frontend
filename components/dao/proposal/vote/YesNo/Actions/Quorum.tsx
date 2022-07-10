import {
  CapsInfo,
  Header,
} from "@components/creation/utilities/HeaderComponents";
import LabeledSwitch from "@components/creation/utilities/LabeledSwitch";
import MultiWalletSelector from "@components/utilities/MultiWalletSelector";
import { IWallet } from "@lib/creation/CreationApi";
import ProposalContext, {
  IProposalContext,
} from "@lib/dao/proposal/ProposalContext";
import { Box, Slider, TextField } from "@mui/material";
import { IProposalAction } from "@pages/dao/[id]/proposal/create";
import * as React from "react";
import Layout from "./Layout";

export interface IQuorum {
  actionName: string;
  actionDescription: string;
  quorum: number;
}

const Quorum: React.FC<IProposalAction> = (props) => {
  const context = React.useContext<IProposalContext>(ProposalContext);
  const [value, setValue] = React.useState<IQuorum>({
    actionName: "Optimistic governance",
    actionDescription:
      "Turn on or off optimistic governance and or edit the whitelisted members",
    quorum: 4,
  });

  React.useEffect(() => {
    const temp = [...context.api.value.actions];
    temp[props.c].data = value;
    context.api.setValue({
      ...context.api.value,
      actions: temp,
    });
  }, [value]);
  return (
    <Layout>
      <Header
        title="Quorum"
        large
        mb="0"
        subtitle="Change the minimum quorum needed for a proposal to pass."
      />
      <Box
        sx={{
          width: "calc(100% + 1rem)",
          ml: "-.5rem",
          borderBottom: 1,
          borderColor: "border.main",
          mt: "1rem",
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
          ml: "-.5rem",
          borderBottom: 1,
          borderColor: "border.main",
          mt: ".5rem",
          mb: "1rem",
        }}
      />
      <CapsInfo title="Configuration" mb="-1rem" />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          mt: "1rem",
        }}
      >
        <Slider
          value={value.quorum}
          min={1}
          max={100}
          onChange={(event: Event, newValue: number) =>
            setValue({
              ...value,
              quorum: newValue,
            })
          }
        />
        <TextField
          label="Value"
          type="number"
          value={value.quorum}
          onChange={(e) =>
            setValue({
              ...value,
              quorum: parseFloat(e.target.value),
            })
          }
          sx={{ width: "15%", ml: "1rem" }}
          InputProps={{
            inputProps: { min: 51, max: 100 },
            endAdornment: <Box>%</Box>,
          }}
        />
      </Box>

      <Box sx={{ mb: ".5rem" }} />
    </Layout>
  );
};

export default Quorum;
