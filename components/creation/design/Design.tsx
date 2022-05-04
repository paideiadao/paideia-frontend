import { Box, Paper } from "@mui/material";
import * as React from "react";
import { Header, LearnMore, Subtitle } from "../utilities/HeaderComponents";

const Design: React.FC = (props) => {
    const [theme, setTheme] = React.useState<number>(1);
  let themes = [
    {
      id: 1,
      label: "Paideia/Dark",
      colorTop: "#9FD2DB",
      colorBottom: "#111827",
    },
    {
        id: 2,
        label: "Paideia/Light",
        colorTop: "#9FD2DB",
        colorBottom: "#111827",
      },{
        id: 3,
        label: "Purple/Dark",
        colorTop: "#9FD2DB",
        colorBottom: "#111827",
      },{
        id: 4,
        label: "Purple/Light",
        colorTop: "#9FD2DB",
        colorBottom: "#111827",
      },{
        id: 5,
        label: "Teal/Dark",
        colorTop: "#82C1FF",
        colorBottom: "#111827",
      },{
        id: 6,
        label: "Teal/Light",
        colorTop: "#1976D2",
        colorBottom: "#FFFFFF",
      },{
        id: 7,
        label: "Pink/Dark",
        colorTop: "#EA79BD",
        colorBottom: "#111827",
      },{
        id: 8,
        label: "Pink/Light",
        colorTop: "#C22985",
        colorBottom: "#FFFFFF",
      },
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "70%" }}>
      <Header
        title="DAO Design"
        subtitle="Choose the perfect theme for your DAO. Add a logo, upload a banner, and create your own personalized footer."
      />
      <Box sx={{ width: "100%", mb: "1rem" }}>
        <LearnMore title="Theme" />
        <Subtitle subtitle="In order to best match your DAO design you can select between four different theme colors and choose if you want a light or dark theme." />
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: 'center' }}>
        {themes.map((i: any) => {
          return (
            <Paper
              sx={{
                width: "22%",
                m: '.5rem',
                p: i.id === theme ? '.2rem' : 0,
                backgroundColor: "transparent",
                backgroundImage: 'none',
                borderRadius: ".8rem",
                border: '1px solid',
                borderColor: i.id === theme ? 'primary.main' : 'transparent'
              }}
            >
              <Paper
                sx={{
                  backgroundColor: "fileInput.outer",
                  border: "1px solid",
                  borderColor: "divider.main",
                  m: ".01rem",
                  borderRadius: ".5rem",
                }}
              >
                <Box>
                    Rect here...
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    pb: "1rem",
                    pt: "1rem",
                    borderTop: "1px solid",
                    borderTopColor: "divider.main",
                  }}
                >
                  {i.label}
                </Box>
              </Paper>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default Design;
