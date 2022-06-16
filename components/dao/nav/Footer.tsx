import { Box } from "@mui/material";
import * as React from "react";
import LightFooter from "../../../public/dao/light-footer.png";
import DarkFooter from "../../../public/dao/dark-footer.png";
import { ThemeContext, IThemeContext } from "@lib/ThemeContext";
import { DarkTheme } from "@theme/theme";

const Footer: React.FC = () => {
  const globalContext = React.useContext<IThemeContext>(ThemeContext);
  return (
    <Box
      sx={{
        mt: ".5rem",
        pt: ".5rem",
        width: "13rem",
        mb: "0rem",
        position: "absolute",
        bottom: "0",
      }}
    >
      <img
        src={
          globalContext.theme === DarkTheme ? DarkFooter.src : LightFooter.src
        }
      />
    </Box>
  );
};

export default Footer;
