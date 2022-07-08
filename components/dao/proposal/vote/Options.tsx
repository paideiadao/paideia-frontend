import { Box } from "@mui/material";
import * as React from "react";
import ListIcon from "@mui/icons-material/List";
import VotingChoice from "./VotingChoice";

const Options: React.FC = () => {
  return (
    <>
      <VotingChoice
        title="Provide options"
        subtitle="Provide multiple options for users to choose from. This type of proposal only allows for a single action to be decided on."
        icon={<ListIcon />}
      />
    </>
  );
};

export default Options;
