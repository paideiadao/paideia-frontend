import { Box } from "@mui/material";
import * as React from "react";
import Nav from "../components/creation/nav/Nav";
import { ThemeProvider } from "@mui/material/styles";
import { LightTheme, DarkTheme } from "../theme/theme.js";
import Button from "@mui/material/Button";
import BasicInformation from "../components/creation/basic-information/BasicInformation";
import { GlobalContext } from "../lib/creation/Context";
import { CreationApi, ICreationData } from "../lib/creation/Api";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { checkCompleteness } from "../lib/creation/Utilities";
import Governance from "../components/creation/governance/Governance";
import Tokenomics from "../components/creation/tokenomics/Tokenomics";

export default function Creation(props) {
  const [alert, setAlert] = React.useState({ show: false });
  const [theme, setTheme] = React.useState(LightTheme);
  const [data, setData] = React.useState<ICreationData>({
    navStage: 0,
    basicInformation: {
      daoName: "",
      daoUrl: "",
      shortDescription: "",
    },
    governance: {
      optimisticGovernance: false,
      quadraticVoting: false,
      timeToChallenge: 0,
      timeToChallengeUnits: "days",
      quorum: 4,
      voteDuration: 0,
      voteDurationUnits: "days",
      whitelist: [
        {
          alias: "",
          address: "",
          img: "",
        },
      ],
      amount: "",
      currency: "",
      supportNeeded: 50,
    },
    tokenomics: {
      tokenName: "",
      tokenId: "",
      tokenTicker: "",
      tokenAmount: 0,
      tokenImage: undefined,
      tokenRemaining: 0,
      tokenHolders: [
        {
          alias: "",
          address: "",
          img: "",
          balance: 0,
          percentage: 0,
        },
      ],
      activateTokenomics: false,
      distributions: [],
    },
  });

  let lookup = {
    light: "#FFFFFF",
    dark: "#0E1420",
  };

  let content = [
    <BasicInformation key={1} />,
    <Governance key={2} />,
    <Tokenomics key={3} />,
  ];

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme") === 'dark' ? DarkTheme : LightTheme)
  }, [])

  React.useEffect(() => {
    let temp = theme === LightTheme ? "light" : "dark";
    document.body.style.background = lookup[temp];
    localStorage.setItem("theme", temp)
  }, [theme]);

  const api = new CreationApi(alert, setAlert, theme, setTheme, data, setData);

  return (
    <ThemeProvider theme={theme}>
      <GlobalContext.Provider value={{ api }}>
        <Nav value={data.navStage} theme={theme} setTheme={setTheme} />
        <Box
          sx={{
            position: "fixed",
            ml: "15rem",
            top: "3.5rem",
            width: "calc(100% - 15rem)",
            pt: "2rem",
            display: "flex",
            flexDirection: "column",
            height: "calc(100% - 3.5rem)",
            pb: "2rem",
            overflowY: "scroll",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {content[data.navStage]}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mt: "1.5rem",
            }}
          >
            {data.navStage > 0 && (
              <Button
                variant="outlined"
                color="primary"
                onClick={() =>
                  setData({ ...data, navStage: data.navStage - 1 })
                }
                sx={{ mr: 1 }}
              >
                <ArrowBackIcon sx={{ mr: 1 }} /> Back
              </Button>
            )}
            <Button
              variant="contained"
              disabled={checkCompleteness(data)}
              color="primary"
              onClick={() => setData({ ...data, navStage: data.navStage + 1 })}
            >
              Next <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
