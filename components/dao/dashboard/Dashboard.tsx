import { Box, Button } from "@mui/material";
import * as React from "react";
import PaideiaBanner from "../../../public/dao/banner/paideia-banner.png";
import { Header } from "../../creation/utilities/HeaderComponents";
import FinancialSummary from "./FinancialSummary";
import About from "./widgets/About";
import TokenStats from "./widgets/TokenStats";
import ActiveProposals from "./ActiveProposals";
import AnnouncementBackground from "../../../public/dao/announcement/announcement-background.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import ReadingBackground from "../../../public/dao/reading/reading-background.png";
import NewspaperFilled from "../../../public/icons/newspaper-filled.png";
import CurrentDistributions from "./CurrentDistributions";
import LatestActivity from "./LatestActivity";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import { IThemeContext, ThemeContext } from "@lib/ThemeContext";
import { LightTheme } from "@theme/theme";

const Dashboard: React.FC = () => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const themeContext = React.useContext<IThemeContext>(ThemeContext);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          mb: ".5rem",
          borderBottom: "1px solid",
          borderBottomColor: "border.main",
        }}
      >
        <img src={PaideiaBanner.src} style={{ width: "100%" }} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ width: "70%", p: "1rem", pt: 0 }}>
          <Box sx={{ width: "100", display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                fontSize: "1rem",
                color: "white",
                backgroundImage: `url(${AnnouncementBackground.src})`,
                backgroundSize: "100% 100%",
                width: "60%",
                height: "13.5rem",
                mr: "1rem",
              }}
            >
              <Box
                sx={{
                  pt: "2rem",
                  pl: "1rem",
                  width: "60%",
                  pb: "1rem",
                }}
              >
                <Box sx={{ position: "absolute", top: "2rem", left: "1rem" }}>
                  <LightbulbCircleIcon sx={{ fontSize: "2rem" }} />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "1rem",
                    width: "55%",
                    color:
                      themeContext.theme === LightTheme ? "white" : "black",
                  }}
                >
                  <Box sx={{ mt: "4rem" }}>
                    This is a very important Paideia announcement
                  </Box>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      fontSize: ".8rem",
                      mt: ".5rem",
                      color:
                        themeContext.theme === LightTheme ? "black" : "white",
                      backgroundColor: "primary.light",
                    }}
                  >
                    Read More <ArrowForwardIcon sx={{ ml: ".3rem" }} />
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: "1rem",
                width: "40%",
                fontSize: "1rem",
                color: "white",
                justifyContent: "flex-start",
                backgroundImage: `url(${ReadingBackground.src})`,
                backgroundSize: "100% 100%",
                height: "12.5rem",
                mt: "1.3rem",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  pt: "2rem",
                  pl: "1rem",
                  width: "100%",
                  pb: "1rem",
                  pr: "1rem",
                }}
              >
                <Box sx={{ position: "absolute", top: "1rem", left: "1rem" }}>
                  <img
                    src={NewspaperFilled.src}
                    style={{ width: "2rem", height: "2rem" }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "1rem",
                    width: "90%",
                    left: "1rem",
                    color:
                      themeContext.theme === LightTheme ? "white" : "black",
                  }}
                >
                  <Box sx={{ mt: "3rem" }}>
                    This is a very important Paideia announcement
                  </Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      fontSize: ".8rem",
                      mt: ".5rem",
                      color:
                        themeContext.theme === LightTheme ? "black" : "white",
                    }}
                  >
                    Visit Medium <ArrowForwardIcon sx={{ ml: ".3rem" }} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: ".5rem" }}>
            <Header title="Welcome to Paideia" />
            <FinancialSummary />
            <ActiveProposals />
            <CurrentDistributions />
            <LatestActivity />
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "sticky",
            top: ".2rem",
          }}
        >
          <About />
          <TokenStats />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
