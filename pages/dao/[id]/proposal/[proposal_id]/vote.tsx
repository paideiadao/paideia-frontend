import { Box } from "@mui/material";
import * as React from "react";
import { paths, props } from "@lib/ProposalPaths";

const Vote: React.FC = () => {
  return (
    <Box sx={{ p: "1.5rem" }}>Current vote for individual proposal here..</Box>
  );
};

export default Vote;
// export const getStaticPaths = paths;
// export const getStaticProps = props;
