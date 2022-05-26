import { Box } from "@mui/material";
import * as React from "react";
import { GlobalContext, IGlobalContext } from "../../lib/AppContext";
import { DarkTheme, LightTheme } from "../../theme/theme";
import BottomNav from "./nav/BottomNav";
import Nav from "./nav/Nav";
import TopNav from "./nav/TopNav";

const DaoTemplate: React.FC<{ subdomain: string }> = (props) => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
      <Nav />
      <TopNav />
      <Box
        sx={{
          width: "calc(100% - 15rem)",
          position: "fixed",
          top: "3.63rem",
          left: "15rem",
          pt: "0rem",
          pb: "2rem",
          overflowY: "scroll",
          height: "calc(100vh - 3.5rem)",
        }}
      >
        {props.children}
        <BottomNav />
      </Box>
    </Box>
  );
};

export default DaoTemplate;