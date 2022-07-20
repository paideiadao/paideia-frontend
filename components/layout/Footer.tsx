import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { DarkTheme, LightTheme } from "@theme/theme";
import Paideia from "@components/svgs/Paideia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TelegramIcon from "@components/svgs/TelegramIcon";
import YoutubeIcon from "@components/svgs/YoutubeIcon";
import MediumIcon from "@components/svgs/MediumIcon";
import TwitterIcon from "@components/svgs/TwitterIcon";
import DiscordIcon from "@components/svgs/DiscordIcon";
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
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    color: DarkTheme.palette.primary.main,
  },
};

const iconLinkStyles = {
  color: DarkTheme.palette.text.primary,
  "&:hover": {
    color: DarkTheme.palette.primary.main,
  },
};

const listItemStyles = {
  pb: "6px",
  fontSize: "0.875rem",
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
    link: "/",
  },
  {
    name: "Blog",
    link: "/",
    external: true,
  },
];

const secondPages: IPage[] = [
  {
    name: "Documentation",
    link: "https://docs.paideia.im",
  },
  {
    name: "Education",
    link: "/",
  },
];

const thirdPages: IPage[] = [
  {
    name: "Dashboard",
    link: "/",
  },
];

const fourthPages: IPage[] = [];

export default function Footer() {
  const linkList = (list: any[]) => {
    return list.map((page, i) => (
      <Typography key={page.name + i + "links"} sx={listItemStyles}>
        <Link
          href={page.link}
          sx={linkStyles}
          target={page?.external ? "_blank" : ""}
          rel="noreferrer"
        >
          {page.name}
        </Link>
      </Typography>
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
            <Typography sx={{ fontSize: "0.75rem" }}>
              <Link href="/" sx={linkStyles}>
                Terms
              </Link>{" "}
              ·{" "}
              <Link href="/" sx={linkStyles}>
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
