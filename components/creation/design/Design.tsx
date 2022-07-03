import { Avatar, Box, Fab, Paper } from "@mui/material";
import * as React from "react";
import { Header, LearnMore, Subtitle } from "../utilities/HeaderComponents";
import CheckIcon from "@mui/icons-material/Check";
import Logo from "./Logo";
import { GlobalContext } from "../../../lib/creation/Context";
import Banner from "./Banner";
import Footer from "./Footer";

export const themes = [
  {
    id: 1,
    label: "Paideia/Dark",
    colorTop: "#9FD2DB",
    colorBottom: "#111827",
  },
  {
    id: 2,
    label: "Paideia/Light",
    colorTop: "#23B5CF",
    colorBottom: "#FFFFFF",
  },
  {
    id: 3,
    label: "Purple/Dark",
    colorTop: "#9EA0FF",
    colorBottom: "#111827",
  },
  {
    id: 4,
    label: "Purple/Light",
    colorTop: "#6365EF",
    colorBottom: "#FFFFFF",
  },
  {
    id: 5,
    label: "Teal/Dark",
    colorTop: "#82C1FF",
    colorBottom: "#111827",
  },
  {
    id: 6,
    label: "Teal/Light",
    colorTop: "#1976D2",
    colorBottom: "#FFFFFF",
  },
  {
    id: 7,
    label: "Pink/Dark",
    colorTop: "#EA79BD",
    colorBottom: "#111827",
  },
  {
    id: 8,
    label: "Pink/Light",
    colorTop: "#C22985",
    colorBottom: "#FFFFFF",
  },
];

const Design: React.FC = (props) => {
  let globalContext = React.useContext(GlobalContext);

  const [theme, setTheme] = React.useState<number>(1);

  let data = globalContext.api.data.design;
  let setData = (data: any) => {
    globalContext.api.setData({
      ...globalContext.api.data,
      design: data,
    });
  };

  React.useEffect(() => {
    setData({
      ...data,
      theme: theme,
    });
  }, [theme]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
      <Header
        title="DAO Design"
        subtitle="Choose the perfect theme for your DAO. Add a logo, upload a banner, and create your own personalized footer."
      />
      <Box sx={{ width: "100%", mb: "1rem" }}>
        <LearnMore
          title="Theme"
          tooltipTitle="Title Here"
          tooltipText="Content here."
          tooltipLink="/here"
        />
        <Subtitle subtitle="In order to best match your DAO design you can select between four different theme colors and choose if you want a light or dark theme." />
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        {themes.map((i: any) => {
          return (
            <Paper
              onClick={() => setTheme(i.id)}
              elevation={0}
              sx={{
                width: "22%",
                cursor: "pointer",
                m: ".5rem",
                p: i.id === theme ? ".2rem" : 0,
                backgroundColor: "transparent",
                backgroundImage: "none",
                borderRadius: ".8rem",
                border: "1px solid",
                borderColor: i.id === theme ? "#42A5F5" : "transparent",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "fileInput.outer",
                  border: "1px solid",
                  borderColor: "border.main",
                  m: i.id === theme ? "0rem" : ".2rem",
                  borderRadius: ".6rem",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: i.colorBottom,
                    width: "100%",
                    height: "5rem",
                    borderTopLeftRadius: ".6rem",
                    borderTopRightRadius: ".6rem",
                    position: "relative",
                  }}
                >
                  {i.id === theme && (
                    <Box sx={{ position: "absolute", bottom: 5, right: 5 }}>
                      <Avatar
                        sx={{
                          backgroundColor: "fileInput.outer",
                          border: "1px solid",
                          borderColor: "#42A5F5",
                        }}
                      >
                        <CheckIcon color="primary" />
                      </Avatar>
                    </Box>
                  )}
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: i.colorTop,
                      clipPath: "polygon(0 0, 100% 0, 0 100%)",
                      borderTopLeftRadius: ".6rem",
                      borderTopRightRadius: ".6rem",
                    }}
                  ></Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    pb: "1rem",
                    pt: "1rem",
                    borderTop: "1px solid",
                    borderTopColor: "border.main",
                    fontSize: ".9rem",
                  }}
                >
                  {i.label}
                </Box>
              </Paper>
            </Paper>
          );
        })}
      </Box>
      <Logo />
      <Banner />
      <Footer />
    </Box>
  );
};

export default Design;
