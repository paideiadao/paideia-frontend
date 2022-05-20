import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { DarkTheme, LightTheme } from "@theme/theme";
import PaideiaLarge from '@components/svgs/PaideiaLarge'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

const titleFont = {
  fontFamily: ['"Space Grotesk"', 'sans-serif'].join(','),
  fontWeight: 'Bold',
  textTransform: 'uppercase',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  pb: '9px'
};

const linkStyles = {
  color: DarkTheme.palette.text.secondary,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};

const listItemStyles = {
  pb: '6px',
  fontSize: '0.875rem',
};

const firstPages = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: 'about',
  },
  {
    name: 'Education',
    link: 'education',
  },
];

const secondPages = [
  {
    name: 'Documentation',
    link: 'documentation',
  },
  {
    name: 'Blog',
    link: 'blog',
    external: true
  },
  {
    name: 'Dashboard',
    link: 'dashboard',
  },
  {
    name: 'More Link',
    link: 'more',
  },
];

export default function Footer() {
  const linkList = (list: any[]) => {
    return(
    list.map((page) => (
      <Typography sx={listItemStyles}>
          <Link
            href={page.link}
            sx={linkStyles}
            target={page?.external ? '_blank' : ''}
            rel="noreferrer"
          >
            {page.name}
          </Link>
      </Typography>
    ))
    )
  }

  return (
    <Box sx={{ background: LightTheme.palette.primary.dark }}>
      <Container>
        <Grid
          container
          sx={{
            py: 8
          }}
        >
          <Grid item xs={12} md={2}>
            <PaideiaLarge />
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={titleFont}>
              Paideia
            </Typography>
            {linkList(firstPages)}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={titleFont}>
              Support
            </Typography>
            {linkList(secondPages)}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={titleFont}>
              Third
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={titleFont}>
              Fourth
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography sx={titleFont}>
              Community
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" sx={{ py: 2 }}>
          <Grid item>
            <Typography sx={{ fontSize: '0.75rem' }}>
              &copy; 2022 PAIDEIA. ALL RIGHTS RESERVED.
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: '0.75rem' }}>
              Terms · Privacy Policy
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}