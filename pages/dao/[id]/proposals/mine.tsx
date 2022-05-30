import * as React from "react";
import { proposals } from "@components/dao/dashboard/ActiveProposals";
import PropsosalListing from "@components/dao/proposals/ProposalListing";

const Mine: React.FC = () => {
  return <PropsosalListing title="My proposals" proposals={[proposals[1]]} />;
};

export default Mine;
