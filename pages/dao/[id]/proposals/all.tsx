import * as React from "react";
import { proposals } from "@components/dao/dashboard/ActiveProposals";
import PropsosalListing from "@components/dao/proposals/ProposalListing";

const All: React.FC = () => {
  return (
    <PropsosalListing title='All proposals' proposals={proposals
      .concat(proposals)
      .concat(proposals)}/>
  );
};

export default All;
