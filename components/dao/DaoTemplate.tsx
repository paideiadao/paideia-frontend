import { Box } from "@mui/material";
import * as React from "react";
import { GlobalContext, IGlobalContext } from "../../lib/AppContext";
import { DarkTheme, LightTheme } from "../../theme/theme";
import Nav from "./nav/Nav";

const DaoTemplate: React.FC<{ subdomain: string }> = (props) => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
      <Nav />
      <Box
        onClick={() =>
          globalContext.api.theme === DarkTheme
            ? globalContext.api.setTheme(LightTheme)
            : globalContext.api.setTheme(DarkTheme)
        }
        sx={{
          color: "primary.text",
          backgroundColor: "backgroundColor.main",
          ml: "auto",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </Box>
    </Box>
  );
};

export default DaoTemplate;
