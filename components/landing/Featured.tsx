import {
  Typography,
  Grid,
  Box,
  Button,
  Container,
  Divider,
  Chip,
} from "@mui/material";
import Image from "next/image";
import { DarkTheme, LightTheme } from "@theme/theme";
import SectionTitle from "@components/SectionTitle";
import GlassBox from "@components/GlassBox";
import StarIcon from "@mui/icons-material/Star";

const titleStyle = {
  fontSize: "48px",
  fontWeight: "400",
  lineHeight: "116.7%",
  mb: "24px",
  color: DarkTheme.palette.text.primary,
  textTransform: "uppercase",
  fontFamily: '"Viga", sans-serif',
};

const secondaryTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: DarkTheme.palette.text.primary,
  textTransform: "uppercase",
  fontFamily: '"Space Grotesk", sans-serif',
};

const sponsoredSecondary = {
  fontSize: "34px",
  fontFamily: '"Viga", sans-serif',
  lineHeight: '41px'
}

const paragraphStyle = {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.15px",
};

const seconaryFeaturedDaos = [
  {
    title: "Ergopad",
    subtitle: "Launchpad for the Ergo blockchain",
    body: "We are a token launch platform for Ergo giving you an opportunity to get in on the ground floor with Ergo token IDOs.",
    members: 2400,
    link: "/",
  },
  {
    title: "Azorus",
    subtitle: "Data Analysis dApp",
    body: "",
    members: 320,
    link: "",
  },
  {
    title: "",
    subtitle: "",
    body: "",
    members: 320,
    link: "",
  },
];

export default function Featured() {
  return (
    <Container
      sx={{
        flexGrow: 1,
        px: "24px",
        minHeight: "1200px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-300px",
          left: { xs: "80%", md: "70%" },
          width: "2160px",
          transform: "translate(-50%, -60px)",
          overflow: "visible",
          zIndex: "-8",
          ml: "-24px",
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
          <Typography sx={{ ...titleStyle, mb: "64px" }}>
            Don&apos;t miss out on these projects
          </Typography>
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
      <GlassBox>
        <Grid container sx={{ height: { xs: "0", sm: "594px" } }}>
          <Grid item xs={12} md={6} sx={{ px: { xs: "0", sm: "60px" } }}>
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              rowSpacing={2}
              sx={{ height: { md: "100%" }, mx: "auto" }}
            >
              <Grid item>
                <Chip
                  icon={<StarIcon color="secondary" />}
                  label="Sponsored"
                  sx={{
                    color: DarkTheme.palette.secondary.main,

                    background: "#fff",
                    fontSize: "16px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography sx={{ ...titleStyle, mb: "0px" }}>
                  Ergopad
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Launchpad for the Ergo blockchain
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    ...secondaryTitleStyle,
                    lineHeight: "23px",
                    textTransform: "none",
                  }}
                >
                  We are a token launch platform for Ergo giving you an
                  opportunity to get in on the ground floor with Ergo token
                  IDOs.
                </Typography>
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography sx={sponsoredSecondary}>602</Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontFamily: '"Space Grotesk", sans-serif',
                        textTransform: 'uppercase'
                      }}
                    >
                      DAO Members
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={sponsoredSecondary}>$3.1M</Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontFamily: '"Space Grotesk", sans-serif',
                        textTransform: 'uppercase'
                      }}
                    >
                      Treasury Value
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button>Learn More</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                // borderRadius: '0 20px 20px 0',
                overflow: "hidden",
                position: "relative",
                display: "block",
                height: "100%",
              }}
            >
              <Image
                src="/featured/featured.png"
                objectFit="cover"
                layout="fill"
                width={709}
                height={594}
              />
            </Box>
          </Grid>
        </Grid>
      </GlassBox>
        <Grid container alignItems="stretch" columnSpacing={5} sx={{ pt: '60px', pb: '72px', }}>
          {seconaryFeaturedDaos.map((dao, i) => (
            <Grid
              key={i}
              item
              xs={12}
              md={4}
            >
              <Box
                sx={{
                  background: 'linear-gradient(130.4deg, rgba(0, 0, 0, 0.4) 14.89%, rgba(0, 0, 0, 0.1) 87.67%)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid',
                  borderImageSlice: '1',
                  borderWidth: '1px',
                  borderImageSource: 'linear-gradient(140deg, rgba(224, 104, 4, 0) 34.23%, rgba(224, 104, 4, 0.5) 72.7%)',
                  height: '100%',
                  p: '16px'
                }}
              >
                  <Chip
                    icon={<StarIcon color="secondary" />}
                    label="Sponsored"
                    sx={{
                      color: DarkTheme.palette.secondary.main,
                      background: '#fff',
                      fontSize: '16px',
                      mb: '16px',
                    }}
                  />
                  <Typography sx={{ ...titleStyle, mb: '0px' }}>
                    {dao.title}
                  </Typography>
                  <Typography sx={{ fontSize: '14px', mb: '16px', }}>
                    {dao.subtitle}
                  </Typography>
                  <Typography sx={{ ...secondaryTitleStyle, lineHeight: '23px', textTransform: 'none', mb: '16px' }}>
                    {dao.body}
                  </Typography>
                  <Typography sx={{...sponsoredSecondary}}>
                    {dao.members}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontFamily: '"Space Grotesk", sans-serif',
                      textTransform: 'uppercase', 
                      mb: '16px'
                    }}
                  >
                    DAO Members
                  </Typography>
                  <Button>
                    Learn More
                  </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      <Grid container sx={{ pb: '100px' }} spacing={3}>
        <Grid item md={6}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Box
                sx={{
                  width: "8px",
                  height: "100%",
                  background:
                    "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                }}
              ></Box>
            </Grid>
            <Grid item zeroMinWidth>
              <Typography component="p" sx={paragraphStyle}>
                If you want to learn more about some of the best projects in our
                platform, you can click here to see all. Find something you
                like!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Button variant="contained" sx={{}}>
            All Projects
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
