import { Grid, Container, Box, Typography, Button } from '@mui/material'
import { DarkTheme } from "@theme/theme"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import SectionTitle from "@components/SectionTitle"

const perkTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: '133%',
  color: DarkTheme.palette.text.primary,
  textTransform: 'uppercase',
  fontFamily: '"Space Grotesk" !important',
  mt: '2px',
  mb: '16px',
}

const paragraphStyle = {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.15px',
}

export default function Examples() {
  return (
    <Container sx={{ position: 'relative', flexGrow: 1, px: '24px' }}>
      <Grid container sx={{ pt: '120px', pb: '40px' }}>
        <Grid item md={6}></Grid>
        <Grid item md={6}>
          <SectionTitle title="How to use your DAO" marginBottom="64px" />
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </Container>
  )
}
