import Progress from "./Progress";
import * as React from "react";
import { Box, Divider } from "@mui/material";
import StepSelector from "./StepSelector";
import Help from "./Help";
import DarkLogo from "../../../public/logos/dark_logo.svg";
import LightLogo from "../../../public/logos/light_logo.svg";
import { DarkTheme, LightTheme } from "../../../theme/theme.js";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Save from "@mui/icons-material/Save";

export default function Nav(props) {
  const [logo, setLogo] = React.useState(
    props.theme === DarkTheme ? LightLogo : DarkLogo
  );

  React.useEffect(() => {
    setLogo(props.theme === DarkTheme ? LightLogo : DarkLogo);
  }, [props.theme]);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "15rem",
          pb: 2,
          borderRight: "1px solid",
          borderBottom: "1px solid",
          borderRightColor: "divider.main",
          borderBottomColor: "divider.main",
          backgroundColor: "backgroundColor.main",
          color: "color.main",
        }}
      >
        <Progress {...props} />
        <Divider sx={{ mt: 2, mb: 1, borderBottomColor: "divider.main" }} />
        <StepSelector {...props} />
        <Divider sx={{ mt: 1, mb: 1, borderBottomColor: "divider.main" }} />
        <Help />
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: "0",
          ml: "15rem",
          backgroundColor: "backgroundColor.main",
          borderBottom: "1px solid",
          borderBottomColor: "divider.main",
          height: "3.5rem",
          width: "calc(100% - 15rem)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 2,
            pr: 2,
            width: "100%",
            height: "3.5rem",
            color: "primary.text",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", fontSize: "1.6rem" }}
          >
            <img src={logo.src} />
          </Box>
          <Box sx={{ ml: "auto", display: 'flex', alignItems: 'center' }}>
            <Box
              onClick={() =>
                props.theme === DarkTheme ? props.setTheme(LightTheme) : props.setTheme(DarkTheme)
              }
              sx={{ color: "primary.text" }}
            >
              Toggle Theme
            </Box>
            <Button variant="outlined" color="error">
              Cancel <DeleteIcon sx={{ ml: 1 }} />
            </Button>
            <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
              Save as Draft <Save sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
