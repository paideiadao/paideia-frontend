import { Typography, Grid, Box, Button, Link, Container } from "@mui/material"
import Image from "next/image"
import { DarkTheme } from "@theme/theme"
import SectionTitle from '@components/SectionTitle'

const titleStyle = {
  fontSize: "48px",
  fontWeight: "400",
  lineHeight: '116.7%',
  mb: '24px',
  color: DarkTheme.palette.text.primary,
  textTransform: 'uppercase',
  fontFamily: '"Viga" !important',
}

const secondaryTitleStyle = {
  fontSize: "20px",
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

export default function Stats() {
  return (
    <Container sx={{ flexGrow: 1, px: '24px', pt: '240px', minHeight: '2000px', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '-160px',
          left: { xs: '40%', md: '30%' },
          height: { xs: '100%', md: '100%' },
          minHeight: '1600px',
          width: { xs: '2160px', md: '2160px' },
          transform: 'translate(-50%, 0)',
          overflow: 'visible',
          zIndex: '-5',
          ml: '-24px',
        }}
      >
        <Image
          src="/stats-bg.png"
          layout="fixed"
          width={2299}
          height={2687}
        />
      </Box>
      <Grid container>
        <Grid item md={4}>
          <SectionTitle title="Paideia statistics" marginBottom="24px" />
          <Typography sx={titleStyle}>
            Some Numbers to Look At &lt;
          </Typography>
        </Grid>
        <Grid item md={3}>

        </Grid>
        <Grid item md={4}>
          <Grid container wrap="nowrap" spacing={2} sx={{ mb: '120px' }}>
            <Grid item>
              <Box sx={{
                width: '8px',
                height: '100%',
                background: 'linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)'
              }}>
              </Box>
            </Grid>
            <Grid item zeroMinWidth>
              <Typography component="p" sx={paragraphStyle}>
              Many projects use NFTs as the analogical equivalent of a key being and open a door to a home. We strive to bring utility to our NFTs through exclusive access to a blockchain related game, along with offering other smaller utilities within our social media platforms, including Discord
              </Typography>
            </Grid>
          </Grid>


          <Typography sx={secondaryTitleStyle}>
            Projects Started
          </Typography>
          <Typography sx={{ 
            fontFamily: '"Viga"',
            fontSize: '100px',
            lineHeight: '100px',
          }}>
            2000
          </Typography>
        
        
        </Grid>
        <Grid item md={1}>

        </Grid>
      </Grid>
    </Container>
  )
}
