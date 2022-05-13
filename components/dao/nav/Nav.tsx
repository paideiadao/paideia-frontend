import { Box } from "@mui/material";
import * as React from "react";
import Contents from "./Contents";
import DaoBio from "./DaoBio";

const Nav: React.FC = (props) => {
  return (
    <Box
      sx={{
        width: "15rem",
        backgroundColor: "backgroundColor.main",
        borderRight: "1px solid",
        borderRightColor: "divider.main",
        color: "primary.text",
        borderBottom: "1px solid",
        borderBottomColor: "divider.main",
      }}
    >
      <DaoBio />
      <Contents />
    </Box>
  );
};

export default Nav;
