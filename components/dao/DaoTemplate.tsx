import { Box } from "@mui/material";
import * as React from "react";
import { GlobalContext, IGlobalContext } from "../../lib/AppContext";
import { DarkTheme, LightTheme } from "../../theme/theme";
import Nav from "./nav/Nav";
import TopNav from "./nav/TopNav";

const DaoTemplate: React.FC<{ subdomain: string }> = (props) => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
      <Nav />
      <TopNav />
    </Box>
  );
};

export default DaoTemplate;
