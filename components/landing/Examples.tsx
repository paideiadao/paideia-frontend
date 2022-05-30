import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { DarkTheme, LightTheme } from "@theme/theme";
import {
  Grid,
  Container,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import SectionTitle from "@components/SectionTitle";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const titleStyle = {
  fontSize: "48px",
  fontWeight: "400",
  lineHeight: "116.7%",
  mb: "24px",
  color: DarkTheme.palette.text.primary,
  textTransform: "uppercase",
  fontFamily: '"Viga", sans-serif',
};

const paragraphStyle = {
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "-0.35px",
  mb: "16px",
};

const tabs = [
  {
    label: "Gaming",
    title: "Using paideia in the gaming world",
    content: `ErgoGames.io took root in the idea that the Ergo Blockchain has tremendous potential to become a leading layer-1 solution, and that blockchain-based games will play an integral role in the network's growth.`,
    link: "/",
    image: "/examples/gaming-world2.png",
  },
  {
    label: "Art Media",
    title: "Teams of artists can combine forces",
    content:
      "You can share your NFT proceeds by using a DAO to distribute and control raised funds",
    link: "/",
    image: "/examples/gaming-world.png",
  },
  {
    label: "Music DAOs",
    title: "Want to collaborate with other musicians? ",
    content: "Do it with Paideia",
    link: "/",
    image: "/examples/gaming-world2.png",
  },
];

const StyledTabs = styled((props: any) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-indicatorSpan": {
    display: "none",
  },
});

const StyledTab = styled((props: any) => <Tab {...props} variant="outlined" />)(
  ({ theme }) => ({
    position: "relative",
    textTransform: "uppercase",
    fontSize: "13px",
    minHeight: "24px",
    height: "24px",
    borderRadius: "16px",
    marginRight: "12px",
    color: DarkTheme.palette.primary.dark,
    border: `1px solid ${DarkTheme.palette.primary.dark}`,
    "&.Mui-selected": {
      color: DarkTheme.palette.primary.contrastText,
      backgroundColor: DarkTheme.palette.primary.main,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#ccc",
    },
  })
);

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  sx: PropTypes.any,
};

export default function Examples() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const sizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const sizeMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {!sizeMd
        ? tabs.map(({ image }, i: number) => {
            return (
              <TabPanel
                value={value}
                index={i}
                key={i}
                sx={{ position: "relative", mt: "100px" }}
              >

                <Box
                  sx={{
                    position: { xs: "relative", md: "absolute" },
                    height: "100%",
                    zIndex: "-3",
                    top: "0",
                    right: "0",
                    maskImage: 'linear-gradient(black 0%, transparent 70%)',
                  }}
                >
                  {sizeMd ? null : (
                    <Image
                      src={image}
                      layout="responsive"
                      width={585}
                      height={800}
                    />
                  )}
                </Box>
              </TabPanel>
            );
          })
        : null}

      <Container
        sx={{
          position: "relative",
          flexGrow: 1,
          px: "24px",
          mt: { xs: "-550px", sm: "-1000px", md: "0" },
        }}
      >
        <Grid
          container
          spacing={12}
          alignItems="center"
          sx={{
            pt: "120px",
            pb: "40px",
            minHeight: "800px",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              minHeight: { xs: "0", md: "800px", lg: "976px" },
              overflow: "visible",
              position: "relative",
            }}
          >
            {tabs.map(({ image }, i: number) => {
              const height = sizeLg ? 976 : 800;
              const width = sizeLg ? 713 : 585;
              return (
                <TabPanel value={value} index={i} key={i}>
                  <Box
                    sx={{
                      position: { xs: "relative", md: "absolute" },
                      maxHeight: { xs: "240px", sm: "400px", md: "100%" },
                      zIndex: "-3",
                      top: "0",
                      right: "0",
                    }}
                  >
                    {sizeMd ? (
                      <Image
                        src={image}
                        layout="fixed"
                        width={width}
                        height={height}
                      />
                    ) : null}
                  </Box>
                </TabPanel>
              );
            })}
          </Grid>
          <Grid item xs={12} md={6} sx={{ minHeight: "600px" }}>
            <Box sx={{ position: "relative" }}>
              <SectionTitle title="How to use your DAO" marginBottom="64px" />
              <Box sx={{ width: "100%", maxWidth: "500px" }}>
                <Box>
                  <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="DAO Samples"
                  >
                    {tabs.map(({ label }, i: number) => (
                      <StyledTab label={label} key={i} />
                    ))}
                  </StyledTabs>
                </Box>
                {tabs.map(({ title, content, link }, i: number) => (
                  <TabPanel value={value} index={i} key={i}>
                    <Typography sx={titleStyle}>{title}</Typography>
                    <Typography sx={paragraphStyle}>{content}</Typography>
                    <Button href={link} endIcon={<ArrowForwardIcon />}>Learn More</Button>
                  </TabPanel>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
