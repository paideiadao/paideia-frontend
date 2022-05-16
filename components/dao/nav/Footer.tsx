import { Box } from "@mui/material";
import * as React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        mt: ".5rem",
        pt: ".5rem",
        width: "100%",
        borderTop: "1px solid",
        borderTopColor: "divider.main",
        mb: "1rem",
      }}
    >
      Footer Here..
    </Box>
  );
};

export default Footer;
