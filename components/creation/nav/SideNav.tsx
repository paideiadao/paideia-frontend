import Progress from "./Progress";
import * as React from "react";
import { Box, Divider } from "@mui/material";
import StepSelector from "./StepSelector";
import Help from "./Help";
import DarkLogo from "@public/logos/dark_logo.svg";
import LightLogo from "@public/logos/light_logo.svg";
import { DarkTheme, LightTheme } from "@theme/theme.js";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Save from "@mui/icons-material/Save";
import DarkSwitch from "@components/utilities/DarkSwitch";
import { GlobalContext } from "@lib/creation/Context";
import { ThemeContext } from "@lib/ThemeContext";
import { deviceStruct } from "@components/utilities/Style";

export default function Nav(props) {
  let globalContext = React.useContext(ThemeContext);
  let global = React.useContext(GlobalContext);

  let theme = globalContext.theme;
  const [logo, setLogo] = React.useState(
    theme === DarkTheme ? LightLogo : DarkLogo
  );

  React.useEffect(() => {
    setLogo(theme === DarkTheme ? LightLogo : DarkLogo);
  }, [theme]);

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
          borderRightColor: "border.main",
          borderBottomColor: "border.main",
          backgroundColor: "backgroundColor.main",
          color: "color.main",
          display: deviceStruct(
            "none",
            "none",
            "inherit",
            "inherit",
            "inherit"
          ),
        }}
      >
        <Progress {...props} />
        <Divider sx={{ mt: 2, mb: 1, borderBottomColor: "border.main" }} />
        <StepSelector {...props} />
        <Divider sx={{ mt: 1, mb: 1, borderBottomColor: "border.main" }} />
        <Help />
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: "0",
          ml: deviceStruct("0", "0", "15rem", "15rem", "15rem"),
          backgroundColor: "backgroundColor.main",
          borderBottom: "1px solid",
          borderBottomColor: "border.main",
          height: "3.5rem",
          width: deviceStruct(
            "100%",
            "100%",
            "calc(100% - 15rem)",
            "calc(100% - 15rem)",
            "calc(100% - 15rem)"
          ),
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
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.6rem",
              mr: "1.5rem",
            }}
          >
            <img src={logo.src} />
          </Box>
          <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => global.api.signup("a;654654", "skeep")}
              // onClick={() => global.api.signup('test', 'test')}
              sx={{
                mr: 1,
                display: deviceStruct(
                  "none",
                  "none",
                  "inherit",
                  "inherit",
                  "inherit"
                ),
              }}
            >
              Signup
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => global.api.login("a;654654", "skeep")}
              // onClick={() => global.api.signup('test', 'test')}
              sx={{
                mr: 1,
                display: deviceStruct(
                  "none",
                  "none",
                  "inherit",
                  "inherit",
                  "inherit"
                ),
              }}
            >
              Login
            </Button>
            <DarkSwitch />
            <Button
              variant="outlined"
              color="error"
              endIcon={<DeleteIcon />}
              size="small"
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ ml: 2 }}
              size="small"
              endIcon={<Save />}
              onClick={() =>
                global.api.setData({ ...global.api.data, draftModal: true })
              }
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
