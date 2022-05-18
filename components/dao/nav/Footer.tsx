import { Box } from "@mui/material";
import * as React from "react";
import LightFooter from "../../../public/dao/light-footer.png";
import DarkFooter from "../../../public/dao/dark-footer.png";
import { GlobalContext, IGlobalContext } from "../../../lib/AppContext";
import { DarkTheme } from "../../../theme/theme";

const Footer: React.FC = () => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  return (
    <Box
      sx={{
        mt: ".5rem",
        pt: ".5rem",
        width: "15rem",
        mb: "0rem",
        position: 'absolute',
        bottom: '0'
      }}
    >
      <img
        src={
          globalContext.api.theme === DarkTheme
            ? DarkFooter.src
            : LightFooter.src
        }
      />
    </Box>
  );
};

export default Footer;
