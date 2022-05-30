import CreateHeader from "@components/dao/proposal/Header";
import { Box } from "@mui/material";
import * as React from "react";

export interface IProposal {}

const CreateProposal: React.FC = () => {
  return (
    <Box
      sx={{
        p: "1.5rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "70%" }}>
        <CreateHeader type="proposal" />
      </Box>
    </Box>
  );
};

export default CreateProposal;
