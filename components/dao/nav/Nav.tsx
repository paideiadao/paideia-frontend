import { Box } from "@mui/material";
import * as React from "react";
import Contents from "./Contents";
import DaoBio from "./DaoBio";
import Footer from "./Footer";

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
        height: "100vh",
        borderBottomColor: "divider.main",
        position: "relative",
      }}
    >
      <DaoBio />
      <Contents />
      <Footer />
    </Box>
  );
};

export default Nav;
