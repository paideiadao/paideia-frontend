import { Box } from "@mui/material";
import * as React from "react";

const Layout: React.FC<{ width?: string }> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        pt: "1.5rem",
        pb: "1.5rem",
      }}
    >
      <Box sx={{ width: props.width === undefined ? "70%" : props.width }}>
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
