import * as React from "react";
import { paths, props } from "@lib/DaoPaths";
import { Box } from "@mui/material";

const Create: React.FC = () => {
  return <Box sx={{ p: "1.5rem" }}>Create proposal / discussion here...</Box>;
};

export const getStaticPaths = paths;
export const getStaticProps = props;

export default Create;
