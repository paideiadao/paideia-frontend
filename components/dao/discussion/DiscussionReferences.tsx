import { CapsInfo } from "@components/creation/utilities/HeaderComponents";
import { deviceWrapper } from "@components/utilities/Style";
import { Avatar, Box, Button } from "@mui/material";
import * as React from "react";
import { LikesDislikes, ProposalStatus } from "../proposals/ProposalCard";

interface IReference {
  img: string;
  proposalName: string;
  proposalStatus: string;
  likes: number;
  dislikes: number;
  userSide: number;
  id: number;
}

const references = [
  {
    img: "",
    proposalName: "<Proposal Name>",
    proposalStatus: "Active",
    likes: 191,
    dislikes: 50,
    userSide: 0,
    id: 1,
  },
  {
    img: "",
    proposalName: "<Proposal Name 1>",
    proposalStatus: "Passed",
    likes: 485,
    dislikes: 10,
    userSide: 1,
    id: 2,
  },
  {
    img: "",
    proposalName: "<Proposal Name 2>",
    proposalStatus: "Failed",
    likes: 485,
    dislikes: 10,
    userSide: 0,
    id: 3,
  },
];

const DiscussionReferences: React.FC = () => {
  const times = 1;
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", flexWrap: deviceWrapper("wrap", 'nowrap') }}>
        <Box sx={{ display: "flex", alignItems: "center", width: deviceWrapper('100%', "50%") }}>
          <CapsInfo
            title={`this discussion has been referenced ${times} ${
              times === 1 ? "time" : "times"
            }`}
            mb="0"
          />
        </Box>
        <Button sx={{ ml: deviceWrapper('0', "auto"), mt: deviceWrapper('.5rem', '0') }} variant="outlined" size='small'>
          Reference this discussion
        </Button>
      </Box>
      <Box sx={{ width: "100%", mt: "1rem" }}>
        {references.map((i: IReference, c: number) => (
          <DiscussionCard key={`discussion-reference-${c}`} {...i} />
        ))}
      </Box>
    </>
  );
};

const DiscussionCard: React.FC<IReference> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        mb: ".5rem",
        p: ".5rem",
        borderRadius: ".3rem",
        border: "1px solid",
        borderColor: "border.main",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar
        src={`https://picsum.photos/200/200/?random=${props.id}`}
        sx={{ width: deviceWrapper('2.5rem', "3rem"), height: deviceWrapper('2.5rem', "3rem"), ml: ".5rem" }}
      />
      <Box sx={{ ml: deviceWrapper('.75rem', "1rem"), fontSize: deviceWrapper('.8rem', '1rem') }}>
        {props.proposalName}
        <Box sx={{display: deviceWrapper('none', 'block')}}>
          <ProposalStatus status={props.proposalStatus} />

        </Box>
      </Box>
      <Box sx={{ ml: "auto", display: "flex", alignItems: deviceWrapper('flex-end', "center"), flexDirection: deviceWrapper('column', 'row') }}>
        
      <Box sx={{display: deviceWrapper('block', 'none')}}>
          <ProposalStatus status={props.proposalStatus} />

        </Box><LikesDislikes
          likes={props.likes}
          dislikes={props.dislikes}
          userSide={props.userSide}
        />

        

        <Button sx={{ ml: "1rem", display: deviceWrapper('none', 'flex') }}>View</Button>
      </Box>
    </Box>
  );
};

export default DiscussionReferences;
