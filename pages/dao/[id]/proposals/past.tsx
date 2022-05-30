import * as React from "react";
import { proposals } from "@components/dao/dashboard/ActiveProposals";
import PropsosalListing from "@components/dao/proposals/ProposalListing";

const Past: React.FC = () => {
  return (
    <PropsosalListing
      title="Past proposals"
      proposals={proposals
        .concat(proposals)
        .concat(proposals)
        .concat(proposals)}
    />
  );
};

export default Past;
