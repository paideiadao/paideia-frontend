import React, { useContext } from 'react';
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paideia from "@components/svgs/Paideia";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { DarkTheme, LightTheme } from "@theme/theme";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Divider from "@mui/material/Divider";
import SocialGrid from "@components/SocialGrid";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import Toolbar from "@mui/material/Toolbar";
import { PageNavContext } from '@components/Layout'
// import ConnectWallet from "@components/wallet/ConnectWallet";

const pages = [
  {
    name: "Home",
    link: "/",
    disabled: false,
  },
  {
    name: "About",
    link: "about",
    disabled: false
  },
  {
    name: "Education",
    link: "education",
    disabled: true,
  },
  {
    name: "Documentation",
    link: "https://docs.paideia.im",
    disabled: false,
  },
  {
    name: "Blog",
    link: "blog",
    disabled: true,
  },
  {
    name: "Dashboard",
    link: "dashboard",
    disabled: true,
  },
];

function ScrollTop(props: { children: React.ReactNode }) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    const anchor = (document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: "10" }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function Header(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { inPageNav } = useContext(PageNavContext)

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={trigger && !navbarOpen ? 4 : 0}
        sx={{
          zIndex: "30",
          backdropFilter: `${trigger ? "blur(25px)" : ""}`,
        }}
      >
        <Container sx={{ px: "24px" }}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ minHeight: "70px" }}
          >
            <Grid
              item
              alignItems="center"
              sx={{
                height: { xs: "32px", md: "40px" },
                width: { xs: "32px", md: "40px" },
              }}
            >
              <Link href="/">
                <Paideia
                  sx={{
                    color: DarkTheme.palette.text.primary,
                    fontSize: { xs: "32px", md: "40px" },
                    "&:hover": {
                      color: LightTheme.palette.secondary.main,
                    },
                  }}
                />
              </Link>
            </Grid>
            <Grid item>
              <Grid
                container
                justifyContent="flex-end"
                alignItems="center"
                spacing={6}
              >
                <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      fontFamily: ['"Space Grotesk"', "sans-serif"].join(","),
                      fontWeight: "Bold",
                      textTransform: "uppercase",
                      fontSize: "13px",
                    }}
                  >
                    {pages.map((page, i) => (
                      <Grid key={i} item>
                        {page.disabled ? (
                          <Typography
                            sx={{
                              fontFamily: [
                                '"Space Grotesk"',
                                "sans-serif",
                              ].join(","),
                              fontWeight: "Bold",
                              textTransform: "uppercase",
                              fontSize: "13px",
                              color: "#777",
                            }}
                          >
                            {page.name}
                          </Typography>
                        ) : (
                          <Link
                            href={page.link}
                            underline="hover"
                            sx={{
                              color: "#fff",
                              "&:hover": {
                                color: LightTheme.palette.secondary.main,
                              },
                            }}
                          >
                            {page.name}
                          </Link>
                        )}
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
                  <Button disabled variant="contained" size="small">
                    Connect Wallet
                  </Button>
                </Grid>
                <Grid item sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton>
                    <AccountBalanceWalletIcon
                      sx={{ color: DarkTheme.palette.text.primary }}
                    />
                  </IconButton>
                  <Box
                    sx={{
                      zIndex: "21",
                      position: "relative",
                      width: "40px",
                      height: "40px",
                      color: "#fff",
                      // focus: 'outline-none',
                    }}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "20px",
                        transform: "translate(-50%, -50%)",
                        left: "50%",
                        top: "50%",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          height: "3px",
                          width: "28px",
                          borderRadius: "2px",
                          background: "#fff",
                          transition: "transform 100ms ease-in-out",
                          transform: `${navbarOpen ? "rotate(45deg)" : "translateY(6px)"
                            }`,
                        }}
                      ></Box>
                      <Box
                        sx={{
                          position: "absolute",
                          height: "3px",
                          width: "28px",
                          borderRadius: "2px",
                          background: "#fff",
                          transition: "transform 100ms ease-in-out",
                          transform: `${navbarOpen ? "rotate(-45deg)" : "translateY(-6px)"
                            }`,
                        }}
                      ></Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Fade in={navbarOpen} style={{ transitionDuration: "400ms" }}>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: "0px",
            zIndex: "25",
            background: "rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(55px)",
            p: "24px",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={3}
            height="100%"
          >
            <Grid item>
              <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-start"
                sx={{
                  fontFamily: ['"Space Grotesk"', "sans-serif"].join(","),
                  fontWeight: "Bold",
                  textTransform: "uppercase",
                  fontSize: "20px",
                }}
              >
                {pages.map((page, i) => (
                  <Grid key={i} item>
                    {page.disabled ? (
                      <Typography
                        sx={{
                          fontFamily: ['"Space Grotesk"', "sans-serif"].join(
                            ","
                          ),
                          fontWeight: "Bold",
                          textTransform: "uppercase",
                          fontSize: "20px",
                          color: "#777",
                        }}
                      >
                        {page.name}
                      </Typography>
                    ) : (
                      <Link
                        href={page.link}
                        underline="hover"
                        sx={{
                          color: "#fff",
                          "&:hover": {
                            color: LightTheme.palette.secondary.main,
                          },
                        }}
                      >
                        {page.name}
                      </Link>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              <Button variant="contained" sx={{ width: "100%" }}>
                Create your DAO
              </Button>
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              <Divider />
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: "14px",
                  pb: "14px",
                  textTransform: "uppercase",
                }}
              >
                Follow our socials
              </Typography>
              <Grid
                container
                spacing={4}
                direction="row"
                sx={{ fontSize: "24px" }}
              >
                <SocialGrid />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Fade>
      {!inPageNav ? (
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      ) : null}
    </>
  );
}
