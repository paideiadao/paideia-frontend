import React, { FC } from "react";
import { Typography, Grid, Box, Container } from "@mui/material";
import Image from "next/image";
import { DarkTheme } from "@theme/theme";
import SectionTitle from "@components/SectionTitle";

const paragraphStyle = {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.15px",
};

interface IPageHeader {
  bgUrl: string;
  sectionTitle: string;
  titleLineOne: string;
  titleLineTwo: string;
  subTitleOne?: string;
  subTitleTwo?: string;
}

const PageHeader: FC<IPageHeader> = ({
  bgUrl,
  sectionTitle,
  titleLineOne,
  titleLineTwo,
  subTitleOne,
  subTitleTwo,
}) => {
  return (
    <Container sx={{ px: "24px" }}>
      <Box
        sx={{
          position: "absolute",
          top: "200px",
          left: "50%",
          height: { xs: "100vh", md: "1261px" },
          minHeight: "600px",
          width: "1716px",
          transform: "translate(-50%, 0)",
          overflow: "hidden",
          zIndex: "-1",
          ml: "-24px",
        }}
      >
        <img
          src={bgUrl}
        />
      </Box>
      <Grid
        container
        sx={{
          height: { xs: "100vh", sm: "1000px" },
          minHeight: "600px",
          // mt: "-65px",
          maxHeight: { xs: "1000px", sm: "1200px" },
          flexDirection: { xs: "row", sm: "row" },
          justifyContent: { xs: "flex-end", sm: "space-between" },
          alignItems: { xs: "flex-end", sm: "center" },
        }}
      >
        <Grid item xs={0} sm={1} lg={3}></Grid>
        <Grid item xs={12} sm={11} lg={9}>
          <SectionTitle marginBottom="80px">{sectionTitle}</SectionTitle>
          <Typography
            sx={{
              fontSize: { xs: "60px", sm: "80px", md: "100px" },
              fontWeight: "500",
              color: "rgba(0,0,0,0.0)",
              lineHeight: "100%",
              textTransform: "uppercase",
              fontFamily: '"Viga", sans-serif',
              letterSpacing: "-1.5px",
            }}
            className="outlineText"
          >
            {titleLineOne}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "60px", sm: "80px", md: "100px" },
              fontWeight: { xs: "400", sm: "600" },
              color: DarkTheme.palette.text.primary,
              textTransform: "uppercase",
              fontFamily: '"Viga", sans-serif',
              letterSpacing: "-1.5px",
              lineHeight: "100%",
              mb: "40px",
            }}
          >
            {titleLineTwo}
          </Typography>
          <Grid container wrap="nowrap" spacing={2} sx={{ mb: "120px" }}>
            {subTitleOne && subTitleTwo && (
              <>
                <Grid item>
                  <Box
                    sx={{
                      mt: "3px",
                      width: "8px",
                      height: "90%",
                      background:
                        "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                    }}
                  ></Box>
                </Grid>
                <Grid item zeroMinWidth>
                  <Typography component="p" sx={paragraphStyle}>
                    {subTitleOne}
                  </Typography>
                  <Typography component="p" sx={paragraphStyle}>
                    {subTitleTwo}
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageHeader;
