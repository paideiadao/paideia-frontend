import { Box } from "@mui/material";
import * as React from "react";
import { VoteChoice } from "../ProposalVote";
import CheckIcon from "@mui/icons-material/Check";
import ListIcon from "@mui/icons-material/List";
import ProposalContext, {
  IProposalContext,
} from "@lib/dao/proposal/ProposalContext";

const Selector: React.FC = () => {
  const context = React.useContext<IProposalContext>(ProposalContext);

  const wrapper = (value: "yes/no" | "options" | "unselected") =>
    context.api.setValue({
      ...context.api.value,
      votingSystem: value,
    });
  return (
    <Box sx={{ width: "100%", alignItems: "stretch", display: "flex" }}>
      <VoteChoice
        icon={<CheckIcon />}
        title="Yes or no"
        change={() => wrapper("yes/no")}
        subtitle="Vote to pass or decline the proposal. This type of proposal allows for multiple actions."
      />
      <Box sx={{ ml: "1rem" }} />
      <VoteChoice
        icon={<ListIcon />}
        change={() => wrapper("options")}
        title="Provide options"
        subtitle="Provide multiple options for users to choose from. This type of proposal only allows for a single actions to be decided on."
      />
    </Box>
  );
};

export default Selector;
