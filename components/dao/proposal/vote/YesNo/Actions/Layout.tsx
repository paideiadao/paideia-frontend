import { Box } from "@mui/material";
import * as React from "react";

const Layout: React.FC = (props) => {
  return (
    <Box sx={{ pl: ".5rem", pr: ".5rem", width: "100%" }}>{props.children}</Box>
  );
};

export default Layout;