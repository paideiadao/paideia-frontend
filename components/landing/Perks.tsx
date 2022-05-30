import { Grid, Container, Box, Typography, Button } from '@mui/material'
import SectionTitle from "@components/SectionTitle"
import { DarkTheme } from "@theme/theme"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

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

export default function Perks() {
  return (
    <>
      <Container maxWidth="xl" sx={{ position: 'relative', height: '100%', minWidth: '1500px' }}>
        <Box
          sx={{
            zIndex: '-1',
            position: 'absolute',
            top: '0',
            right: '0',
            height: '341px',
            width: '20px',
            background: 'linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)'
          }}
        >
        </Box>
      </Container>
      <Container sx={{ flexGrow: 1, px: '24px', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          left: '35%',
          height: '730px',
          width: '1467px',
          transform: 'translate(-50%, 0)',
          overflow: 'hidden',
          zIndex: '-1',
          ml: '-24px',
        }}
      >
        <Image
          src="/perks-bg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center top"
          quality={100}
        />
      </Box>
        <Grid container sx={{ pt: '60px', pb: '120px' }}>
          <Grid item md={5}>
            <Grid container spacing={3}>
              <Grid item>
                <SectionTitle title="Perks" marginBottom="16px" />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: "48px",
                    fontWeight: "400",
                    lineHeight: '116.7%',
                    color: DarkTheme.palette.text.primary,
                    textTransform: 'uppercase',
                    fontFamily: '"Viga" !important',
                  }}
                >
                  Why create your DAO on Paideia?&lt;
                </Typography>
              </Grid>
              <Grid item>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Box sx={{ 
                      mt: '3px',
                      width: '8px', 
                      height: '90%', 
                      background: 'linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)' }}>
                    </Box>
                  </Grid>
                  <Grid item zeroMinWidth>
                    <Typography component="p" sx={paragraphStyle}>
                      Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right.Separated they live in Bookmarks.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7}></Grid>
        </Grid>
        <Grid container rowSpacing={12} sx={{ mb: '60px' }}>
          <Grid item md={4}></Grid>
          <Grid item xs={12} md={3}>
            <Image
              src="/TokenIcon.svg"
              width={35}
              height={35}
            />
            <Typography
              sx={perkTitleStyle}
            >
              Tokenomics
            </Typography>
            <Typography component="p" sx={paragraphStyle}>
              All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.
            </Typography>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item xs={12} md={3}>
            <Image
              src="/CubeIcon.svg"
              width={35}
              height={35}
            />
            <Typography
              sx={perkTitleStyle}
            >
              Tokenomics
            </Typography>
            <Typography component="p" sx={paragraphStyle}>
              All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.
            </Typography>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={4}></Grid>
          <Grid item xs={12} md={3}>
            <Image
              src="/PyramidIcon.svg"
              width={35}
              height={35}
            />
            <Typography
              sx={perkTitleStyle}
            >
              Tokenomics
            </Typography>
            <Typography component="p" sx={paragraphStyle}>
              All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.
            </Typography>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item xs={12} md={3}>
            <Image
              src="/StackIcon.svg"
              width={35}
              height={35}
            />
            <Typography
              sx={perkTitleStyle}
            >
              Tokenomics
            </Typography>
            <Typography component="p" sx={paragraphStyle}>
              All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.
            </Typography>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={4}></Grid>
          <Grid item xs={12} md={3}>
            <Button variant="outlined" endIcon={<ArrowForwardIcon />}>Learn More</Button>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={3}></Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </Container>
      <Box height="100px"></Box>
      <Container maxWidth="xl" sx={{ position: 'relative', minWidth: '1500px' }}>
        <Box
          sx={{
            zIndex: '-1',
            position: 'absolute',
            bottom: '0',
            left: '0',
            height: '341px',
            width: '20px',
            background: 'linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)',
            transform: 'rotate(90deg)',
            transformOrigin: 'bottom left',
          }}
        >
        </Box>
      </Container>
      <Box height="60px"></Box>
    </>
  )
}
