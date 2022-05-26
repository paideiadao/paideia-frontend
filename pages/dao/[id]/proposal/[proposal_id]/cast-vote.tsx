import { Box } from "@mui/material";
import * as React from "react";
import { paths, props } from "@lib/ProposalPaths";

const CastVote: React.FC = () => {
  return (
    <Box sx={{ p: "1.5rem" }}>Cast vote for individual proposal here..</Box>
  );
};

export default CastVote;
export const getStaticPaths = paths;
export const getStaticProps = props;
