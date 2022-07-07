import {
  Header,
  LearnMore,
} from "@components/creation/utilities/HeaderComponents";
import ProposalContext, {
  IProposalContext,
} from "@lib/dao/proposal/ProposalContext";
import { Box } from "@mui/material";
import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ListIcon from "@mui/icons-material/List";

interface IVoteChoice {
  title: string;
  icon: JSX.Element;
  subtitle: string;
}

const VoteChoice: React.FC<IVoteChoice> = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "fileInput.outer",
        width: "50%",
        p: ".5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: ".3rem",
        cursor: "pointer",
        border: 1,
        borderColor: "border.main",
        flexDirection: "column",
        textAlign: "center",
        ":hover": {
          borderColor: "primary.main",
        },
      }}
    >
      {props.icon}
      <Header title={props.title} large subtitle={props.subtitle} />
    </Box>
  );
};

const ProposalVote: React.FC = () => {
  const context = React.useContext<IProposalContext>(ProposalContext);
  return (
    <>
      <LearnMore
        title={"Voting system"}
        tooltipTitle={"Title here"}
        tooltipText={"Content here"}
        tooltipLink="/here"
      />

      <Box sx={{ width: "100%", alignItems: "stretch", display: "flex" }}>
        <VoteChoice
          icon={<CheckIcon />}
          title="Yes or no"
          subtitle="Vote to pass or decline the proposal. This type of proposal allows for multiple actions."
        />
        <Box sx={{ ml: "1rem" }} />
        <VoteChoice
          icon={<ListIcon />}
          title="Provide options"
          subtitle="Provide multiple options for users to choose from. This type of proposal only allows for a single actions to be decided on."
        />
      </Box>
    </>
  );
};

export default ProposalVote;
