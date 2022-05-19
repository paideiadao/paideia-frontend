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

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          mb: ".5rem",
          borderBottom: "1px solid",
          borderBottomColor: "divider.main",
        }}
      >
        <img src={PaideiaBanner.src} style={{width: '100%'}} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ width: "70%", p: "1rem", pt: 0, position: "relative" }}>
          <>
            
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                fontSize: "1rem",
                color: "white",
                width: '61%',
                backgroundImage: AnnouncementBackground.src
              }}
            >
              <img
                src={AnnouncementBackground.src}
                style={{
                  width: "100%",
                  marginBottom: ".5rem",
                  position: "absolute",
                  height: '100%',
                  zIndex: 10
                }}
              ></img>
              <Box sx={{zIndex: 12, pt: '2rem', pl: '1rem', width: '50%', pb: '1rem'}}>
              <Box>
                <LightbulbCircleIcon sx={{ fontSize: "2rem" }} />
              </Box>
              <Box sx={{ mt: "5rem" }}>
                This is a very important Paideia announcement
              </Box>
              <Button
                variant="contained"
                sx={{ width: "70%", fontSize: ".8rem", mt: ".5rem" }}
              >
                Read More <ArrowForwardIcon sx={{ ml: ".3rem" }} />
              </Button>
              </Box>

            </Box>
            
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                pl: "1rem",
                width: "33%",
                fontSize: "1rem",
                color: "white",
                left: "65%",
                top: 0,
                justifyContent: 'center'
              }}
            >
              <img
                src={ReadingBackground.src}
                style={{
                  width: "100%",
                  height: '98%',
                  marginBottom: ".5rem",
                  position: "absolute",
                  right: 0,
                  top: 0,
                  marginTop: "1.5rem",
                  zIndex: 10
                }}
              ></img>
              <Box sx={{zIndex: 12, pt: '2rem', width: '100%'}}>
                <img
                  src={NewspaperFilled.src}
                  style={{ width: "2rem", height: "2rem" }}
                />
                <Box sx={{ mt: "5.3rem" }}>
                  This is a very important Paideia announcement
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: "80%", fontSize: ".8rem", mt: ".5rem" }}
                >
                  Visit Medium <ArrowForwardIcon sx={{ ml: ".3rem" }} />
                </Button>
              </Box>
              
            </Box>
          </>

          <Box sx={{ mt: "17rem" }}>
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
