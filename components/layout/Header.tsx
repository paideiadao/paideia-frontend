import * as React from "react";
import { cloneElement } from 'react';
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from '@mui/material/useScrollTrigger'
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <AppBar position="static" color="transparent" elevation={0} enableColorOnDark sx={{ position: 'relative', zIndex: '10' }}>
        <Container sx={{ px: '24px' }}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ minHeight: { md: "80px" } }}
          >
            <Grid item alignItems="center">
              <Link
                href="/"
              >
                <Paideia
                  sx={{
                    color: DarkTheme.palette.text.primary,
                    fontSize: { xs: '32px', md: '40px' },
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
                      <Grid key={page.name.toLowerCase() + i + 'page'} item>
                        <Link
                          onClick={handleCloseNavMenu}
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
                  <IconButton
                    size="large"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    sx={{ color: DarkTheme.palette.text.primary, pr: 0 }}
                  >
                    <TablerMenu />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    {pages.map((page, i) => (
                      <MenuItem key={page.name.toLowerCase() + i + 'menu'} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
  );
}
