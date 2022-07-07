import {
  Header,
  LearnMore,
} from "@components/creation/utilities/HeaderComponents";
import ProposalContext, {
  IProposalContext,
} from "@lib/dao/proposal/ProposalContext";
import { IObj } from "@lib/utilities";
import { Box } from "@mui/material";
import * as React from "react";
import Options from "./vote/Options";
import Selector from "./vote/Selector";
import YesNo from "./vote/YesNo/YesNo";

interface IVoteChoice {
  title: string;
  icon: JSX.Element;
  subtitle: string;
  change: () => void;
}

export const VoteChoice: React.FC<IVoteChoice> = (props) => {
  return (
    <Box
      onClick={props.change}
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
  const content: IObj<JSX.Element> = {
    unselected: <Selector />,
    "yes/no": <YesNo />,
    options: <Options />,
  };
  const votingSystem = context.api.value.votingSystem;
  return (
    <>
      <LearnMore
        title={"Voting system"}
        tooltipTitle={"Title here"}
        tooltipText={"Content here"}
        tooltipLink="/here"
      />
      {content[votingSystem]}
    </>
  );
};

export default ProposalVote;
