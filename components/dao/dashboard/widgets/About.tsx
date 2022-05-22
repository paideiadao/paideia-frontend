import * as React from "react";
import { CapsInfo } from "../../../creation/utilities/HeaderComponents";
import { Box, Paper } from "@mui/material";

const About: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: ".5rem",
        backgroundColor: "fileInput.outer",
        border: "1px solid",
        borderColor: "divider.main",
        p: ".5rem",
        mt: ".5rem",
        mr: "1rem",
        mb: ".5rem",
      }}
    >
      <CapsInfo title="About Paideia" small />
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            fontSize: ".7rem",
            color: "text.light",
            borderRight: "1px solid",
            borderColor: "divider.main",
          }}
        >
          Members
          <Box sx={{ fontSize: "1.2rem", color: "primary.text" }}>5,130</Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            fontSize: ".7rem",
            color: "text.light",
          }}
        >
          Proposals
          <Box sx={{ fontSize: "1.2rem", color: "primary.text" }}>125</Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", fontSize: ".9rem", mt: ".5rem" }}>
        Short bio here...
      </Box>
      <Box sx={{ fontSize: ".7rem", color: "text.light", mt: ".5rem" }}>
        Active since 23 March 2021
      </Box>
    </Paper>
  );
};

export default About;
