import {
  Typography,
  Grid,
  Box,
  Button,
  Container,
  Divider,
  Chip
} from "@mui/material"
import Image from "next/image"
import { DarkTheme, LightTheme } from "@theme/theme"
import SectionTitle from '@components/SectionTitle'
import GlassBox from '@components/GlassBox'
import StarIcon from '@mui/icons-material/Star';

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
  color: DarkTheme.palette.text.primary,
  textTransform: 'uppercase',
  fontFamily: '"Space Grotesk" !important',
}

const paragraphStyle = {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.15px',
}

export default function Featured() {
  return (
    <Container sx={{ flexGrow: 1, px: '24px', minHeight: '1200px', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '-300px',
          left: { xs: '80%', md: '70%' },
          width: '2160px',
          transform: 'translate(-50%, -60px)',
          overflow: 'visible',
          zIndex: '-8',
          ml: '-24px',
        }}
      >
        <Image
          src="/featured-bg.png"
          layout="fixed"
          width={2039}
          height={2116}
        />
      </Box>
      <Grid container>
        <Grid item md={6}>
          <SectionTitle title="Sponsored DAOs" marginBottom="24px" />
          <Typography sx={titleStyle}>
            Don&apos;t miss out on these projects
          </Typography>
        </Grid>
        <Grid item md={6}>
        </Grid>
      </Grid>
      <GlassBox>
        <Grid container>
          <Grid item md={6} sx={{ p: '60px' }}>
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              rowSpacing={2}
              sx={{ height: '100%', mx: 'auto' }}
            >
              <Grid item>
                <Chip
                  icon={<StarIcon color="secondary" />}
                  label="Sponsored"
                  sx={{
                    color: DarkTheme.palette.secondary.main,
                    background: '#fff',
                  }}
                />
              </Grid>
              <Grid item>
                <Typography sx={{ ...titleStyle, mb: '0px' }}>
                  Ergopad
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: '14px' }}>
                  Launchpad for the Ergo blockchain
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ ...secondaryTitleStyle, lineHeight: '23px', textTransform: 'none', }}>
                  We are a token launch platform for Ergo giving you an opportunity to get in on the ground floor with Ergo token IDOs.
                </Typography>
              </Grid>
              <Grid item sx={{width: '100%'}}>
                <Grid
                  container
                >
                  <Grid item xs={6}>
                    Hello
                  </Grid>
                  <Grid item xs={6}>
                    Hello
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Box sx={{
              borderRadius: '0 20px 20px 0',
              overflow: 'hidden'
            }}>
              <Image src="/featured/featured.png" layout="responsive" width={709} height={594} />
            </Box>
          </Grid>
        </Grid>
      </GlassBox>
      <Grid container sx={{ py: '100px' }} spacing={10}>
        <Grid item md={3}>
          <Grid container wrap="nowrap" spacing={2} sx={{ mb: '60px' }}>
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
                If you want to learn more about some of the best projects in our platform, you can click here to see all. Find something you like!
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{}}>
            <Button variant="contained" sx={{}}>
              All Projects
            </Button>
          </Box>


        </Grid>
        <Grid item md={3}>
          <GlassBox>
            Azorus
          </GlassBox>
        </Grid>
        <Grid item md={3}>
          <GlassBox>
            Ergopad
          </GlassBox>
        </Grid>
        <Grid item md={3}>
          <GlassBox>
            Paideia
          </GlassBox>
        </Grid>
      </Grid>
    </Container>
  )
}
