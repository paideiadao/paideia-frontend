import { deviceWrapper } from "@components/utilities/Style";
import { Box } from "@mui/material";
import * as React from "react";

const Layout: React.FC<{ width?: string }> = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        pt: { xs: '.5rem', sm: '.5rem', md: ".5rem", lg: "1.5rem" },
        pb: "1.5rem",
        minHeight: "calc(100vh - 7.5rem)",
      }}
    >
      <Box sx={{ width: props.width === undefined ? deviceWrapper('94%', "70%") : props.width }}>
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
