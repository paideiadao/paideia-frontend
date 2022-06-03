import { Grid, Link } from "@mui/material";
import TelegramIcon from "@components/svgs/TelegramIcon";
import YoutubeIcon from "@components/svgs/YoutubeIcon";
import MediumIcon from "@components/svgs/MediumIcon";
import TwitterIcon from "@components/svgs/TwitterIcon";
import DiscordIcon from "@components/svgs/DiscordIcon";
import { DarkTheme } from "@theme/theme";

const iconLinkStyles = {
  color: DarkTheme.palette.text.primary,
  fontSize: 'inherit',
  "&:hover": {
    color: DarkTheme.palette.primary.main,
  },
};

export default function SocialGrid() {
  return (
    <>
      <Grid item>
        <Link
          href="/"
          target="_blank"
          sx={iconLinkStyles}
          rel="noreferrer"
        >
          <TelegramIcon fontSize="inherit" />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="/"
          target="_blank"
          sx={iconLinkStyles}
          rel="noreferrer"
        >
          <DiscordIcon fontSize="inherit" />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="/"
          target="_blank"
          sx={iconLinkStyles}
          rel="noreferrer"
        >
          <TwitterIcon fontSize="inherit" />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="/"
          target="_blank"
          sx={iconLinkStyles}
          rel="noreferrer"
        >
          <MediumIcon fontSize="inherit" />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="/"
          target="_blank"
          sx={iconLinkStyles}
          rel="noreferrer"
        >
          <YoutubeIcon fontSize="inherit" />
        </Link>
      </Grid>
    </>
  )
}