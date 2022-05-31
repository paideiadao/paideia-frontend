import * as React from "react";
import { cloneElement } from "react";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Paideia from "@components/svgs/Paideia";
import TablerMenu from "@components/svgs/TablerMenu";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { DarkTheme, LightTheme } from "@theme/theme";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Divider from "@mui/material/Divider";
import SocialGrid from "@components/SocialGrid";

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Education",
    link: "education",
  },
  {
    name: "Documentation",
    link: "documentation",
  },
  {
    name: "Blog",
    link: "blog",
  },
  {
    name: "Dashboard",
    link: "dashboard",
  },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        enableColorOnDark
        sx={{ zIndex: "10" }}
      >
        <Container sx={{ px: "24px" }}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ minHeight: "80px" }}
          >
            <Grid item alignItems="center">
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
                      <Grid key={page.name.toLowerCase() + i + "page"} item>
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
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
                  <Button variant="contained" size="small">
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
                      zIndex: '20',
                      position: 'relative',
                      width: '40px',
                      height: '40px',
                      color: '#fff',
                      // focus: 'outline-none',
                    }}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <Box sx={{
                      position: 'absolute',
                      width: '20px',
                      transform: 'translate(-50%, -50%)',
                      left: '50%',
                      top: '50%'
                    }}>
                      <Box sx={{
                        position: 'absolute',
                        height: '3px',
                        width: '28px',
                        borderRadius: '2px',
                        background: '#fff',
                        transition: 'transform 100ms ease-in-out',
                        transform: `${navbarOpen ? "rotate(45deg)" : "translateY(6px)"}`
                      }}>
                      </Box>
                      <Box sx={{
                        position: 'absolute',
                        height: '3px',
                        width: '28px',
                        borderRadius: '2px',
                        background: '#fff',
                        transition: 'transform 100ms ease-in-out',
                        transform: `${navbarOpen ? "rotate(-45deg)" : "translateY(-6px)"}`
                      }}>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Fade in={navbarOpen}>
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            zIndex: '9',
            background: 'rgba(155, 155, 155, 0.1)',
            backdropFilter: 'blur(55px)',
            p: '24px',
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
                  <Grid key={page.name.toLowerCase() + i + "page"} item>
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
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item sx={{ width: '100%' }}>
              <Button variant="contained" sx={{ width: '100%' }}>
                Create your DAO
              </Button>
            </Grid>
            <Grid item sx={{ width: '100%' }}>
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
            sx={{ fontSize: '24px' }}
          >
            <SocialGrid />
          </Grid>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </>
  );
}
