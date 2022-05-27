import * as React from "react";
import { proposals } from "@components/dao/dashboard/ActiveProposals";
import PropsosalListing from "@components/dao/proposals/ProposalListing";

const Following: React.FC = () => {
  return (
    <PropsosalListing title='Following proposals' proposals={proposals
      .concat(proposals)
      .concat(proposals).filter((i: any) => i.favorited)}/>
  );
};

export default Following;
