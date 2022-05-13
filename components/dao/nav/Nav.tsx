import { Box } from "@mui/material";
import * as React from "react";
import DaoBio from "./DaoBio";

const Nav: React.FC = (props) => {
  return (
    <Box
      sx={{
        width: "15rem",
        backgroundColor: "backgroundColor.main",
        borderRight: "1px solid",
        borderRightColor: "divider.main",
      }}
    >
      <DaoBio />
    </Box>
  );
};

export default Nav;
