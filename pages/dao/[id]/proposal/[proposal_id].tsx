import { Box } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next/types";
import * as React from "react";

const Proposal: React.FC = () => {
  return <Box sx={{ p: "1.5rem" }}>Individual Proposal Here...</Box>;
};

export default Proposal;

export const getStaticPaths: GetStaticPaths = async () => {
  // query db for proposals here...
  const proposals = [
    {
      id: "spreadly",
      proposal_id: "1",
    },
    {
      id: "spreadly",
      proposal_id: "2",
    },
  ];

  return {
    paths: proposals.map((proposal) => {
      return {
        params: {
          id: proposal.id,
          proposal_id: proposal.proposal_id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daoData = {
    daoId: params.id,
  };
  return {
    props: {
      daoData,
    },
  };
};
