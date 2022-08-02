import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { DarkTheme, LightTheme } from "@theme/theme";
import Paideia from "@components/svgs/Paideia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import SocialGrid from "@components/SocialGrid";

const titleFont = {
  fontFamily: ['"Space Grotesk"', "sans-serif"].join(","),
  fontWeight: "Bold",
  textTransform: "uppercase",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  pb: "9px",
};

const linkStyles = {
  color: DarkTheme.palette.text.primary,
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    color: DarkTheme.palette.primary.main,
  },
  fontSize: "16px",
  lineHeight: '28px',
};

interface IPage {
  name: string;
  link: string;
  external?: boolean;
}

const firstPages: IPage[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const secondPages: IPage[] = [
  {
    name: "White Paper",
    link: "https://docs.paideia.im",
    external: true,
  },
  {
    name: "Education",
    link: "/education",
  },
];

const thirdPages: IPage[] = [
  {
    name: "Projects",
    link: "/projects"
  },
  {
    name: "Dashboard",
    link: "/",
  },
];

const fourthPages: IPage[] = [];

export default function Footer() {
  const linkList = (list: IPage[]) => {
    return list.map((page, i) => (
      page.external ? (
        <MuiLink
          href={page.link}
          target="_blank"
          sx={linkStyles}
          key={i}
        >
          {page.name}
        </MuiLink>
      ) : (
        <Link href={page.link} key={i}>
          <Box
            sx={linkStyles}
          >
            {page.name}
          </Box>
        </Link>
      )
    ));
  };

  return (
    <Box
      sx={{
        background: LightTheme.palette.primary.dark,
        backgroundImage: `url(/footer-bg.png)`,
        overflow: "hidden",
      }}
    >
      <Container sx={{ px: "24px" }}>
        <Grid
          container
          spacing={{ xs: 3, md: 1 }}
          sx={{
            py: { xs: 2, md: 8 },
          }}
        >
          <Grid item xs={12} md={2} sx={{ mt: 4, mb: 2 }}>
            <Paideia sx={{ fontSize: { xs: "4rem", md: "6rem" } }} />
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={titleFont}>Paideia</Typography>
            {linkList(firstPages)}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={titleFont}>Support</Typography>
            {linkList(secondPages)}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={titleFont}>Manage</Typography>
            {linkList(thirdPages)}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={titleFont}></Typography>
            {linkList(fourthPages)}
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography sx={titleFont}>Community</Typography>
            <Grid
              container
              spacing={{ xs: 3, md: 1 }}
              sx={{
                justifyContent: { xs: "flex-start", md: "space-evenly" },
                fontSize: "24px",
              }}
            >
              <SocialGrid />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" sx={{ py: 2 }}>
          <Grid item>
            <Typography sx={{ fontSize: "0.75rem" }}>
              &copy; 2022 Paideia. All rights reserved.
            </Typography>
          </Grid>
          <Grid item>
              <Link href="/">
                <Box
                  sx={{
                    ...linkStyles,
                    display: 'inline-block',
                  }}
                >
                  Terms
                </Box>
              </Link>{" "}
              ·{" "}
              <Link href="/">
                <Box
                  sx={{
                    ...linkStyles,
                    display: 'inline-block',
                  }}
                >
                  Privacy Policy
                </Box>
              </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
