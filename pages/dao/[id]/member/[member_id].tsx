import { Box } from "@mui/material";
import * as React from "react";
import { paths, props } from "@lib/MemberPaths";

const Member: React.FC = () => {
  return <Box sx={{ p: "1.5rem" }}>Member Here...</Box>;
};
export default Member;
export const getStaticPaths = paths;
export const getStaticProps = props;