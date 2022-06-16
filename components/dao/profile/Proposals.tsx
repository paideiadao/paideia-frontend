import { CapsInfo } from "@components/creation/utilities/HeaderComponents";
import { Box } from "@mui/material";
import * as React from "react";
import { proposals } from "../dashboard/ActiveProposals";
import ProposalCard from "../proposals/ProposalCard";

const Proposals: React.FC = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
      <CapsInfo title={`This user made ${proposals.length} proposals`} />
      {proposals.map((i: any, c: number) => (
        <ProposalCard
          {...i}
          c={c}
          key={"proposal-card-key-profile-" + c}
          width={{ xs: "50%", s: "50%", md: "50%", lg: "33%" }}
        />
      ))}
    </Box>
  );
};

export default Proposals;
