import { Typography, Grid, Box, Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "@components/Link";
import { DarkTheme } from "@theme/theme";
import SectionTitle from "@components/SectionTitle";
import SocialGrid from "@components/SocialGrid";

export default function Hero() {
  return (
    <Container sx={{ flexGrow: 1, px: "24px", mt: "-64px", pt: "15px" }}>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: { xs: "40%", sm: "50%", md: "45%", lg: "50%" },
          height: { xs: "100vh", md: "1261px" },
          minHeight: "600px",
          width: { xs: "2160px", md: "2160px" },
          transform: {
            xs: "translate(-50%, 0)",
            sm: "translate(-50%, 0)",
            md: "translate(-50%, 0)",
          },
          // overflow: "hidden",
          zIndex: "-1",
          ml: "-24px",
        }}
      >
        <img src="/hero-bg.png" />
      </Box>
      <Grid
        container
        sx={{
          height: { xs: "100vh", md: "1000px" },
          minHeight: "600px",
          // mt: "-65px",
          maxHeight: { xs: "1000px", md: "1200px" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "flex-end", md: "space-between" },
          alignItems: { xs: "flex-start", md: "center" },
        }}
      >
        <Grid item>
          <SectionTitle sx={{ mb: "80px" }}>
            A Web3 DAO Management Software Suite
          </SectionTitle>
          <Typography
            sx={{
              fontSize: { xs: "3.5rem", md: "5rem" },
              fontWeight: "500",
              color: "rgba(0,0,0,0.0)",
              lineHeight: 0.5,
              textTransform: "uppercase",
              fontFamily: '"Viga", sans-serif',
              // strokeWidth: "2px",
              // strokeColor: "#fff",
            }}
            className="outlineText"
          >
            &gt;&gt;Create
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "3.5rem", md: "5rem" },
              fontWeight: "500",
              color: "rgba(0,0,0,0.0)",
              textTransform: "uppercase",
              fontFamily: '"Viga", sans-serif',
            }}
            className="outlineText"
          >
            Your{" "}
            <Typography
              component="span"
              sx={{
                fontSize: { xs: "3.5rem", md: "5rem" },
                fontWeight: "500",
                color: DarkTheme.palette.text.primary,
                textTransform: "uppercase",
                fontFamily: '"Viga", sans-serif',
              }}
            >
              DAO
            </Typography>
          </Typography>
          <Link href="https://app.paideia.im/creation">
            <Button variant="contained">
              Create Beta DAO
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              transform: "rotate(-90deg)",
              textTransform: "uppercase",
              transformOrigin: "top left",
              position: "absolute",
              fontSize: "12px",
              width: "100%",
              display: { xs: "none", md: "inline-block" },
            }}
          >
            Keep up with our socials
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              mt: "64px",
              textTransform: "uppercase",
              display: { xs: "block", md: "none" },
            }}
          >
            Follow our socials
          </Typography>
          <Grid
            container
            spacing={{ xs: 4, md: 0.5 }}
            direction={{ xs: "row", md: "column" }}
            sx={{
              pt: 3,
              pb: { xs: 3, md: 0 },
              fontSize: { xs: "24px", md: "16px" },
            }}
          >
            <SocialGrid hoverColor="#FF8219" />
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ mb: "120px", mt: { xs: 6, md: 0 } }}>
        <Box sx={{ display: { xs: 'block', md: 'inline-block' }, verticalAlign: 'middle', mb: '24px' }}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="flex-start"
          // alignItems="center"
          >
            <Grid item>
              <Box
                sx={{
                  width: "6px",
                  minHeight: "100%",
                  background:
                    "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
                }}
              ></Box>
            </Grid>
            <Grid item>
              <Typography sx={{ textTransform: "uppercase", fontSize: "12px" }}>
                Strategic
              </Typography>
              <Typography sx={{ textTransform: "uppercase", fontSize: "12px" }}>
                Partners
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '165px', display: { xs: 'block', md: 'inline-block' }, height: '44px', verticalAlign: 'middle', m: { xs: '0 auto 24px', md: '0 0 24px 60px' } }}>
          <Link href="https://ergoplatform.org/en/community/#Foundation">
            <Image layout="responsive" src="/partner-logos/ergo-foundation.png" alt="Ergo Foundation" height={44} width={165} />
          </Link>
        </Box>
        <Box sx={{ width: '352px', display: { xs: 'block', md: 'inline-block' }, height: '36px', verticalAlign: 'middle', m: { xs: '0 auto 24px', md: '0 0 24px 60px' } }}>
          <Link href="https://spectrum.fi">
            <Image layout="responsive" src="/partner-logos/spectrum-finance.png" alt="Spectrum Finance" height={36} width={352} />
          </Link>
        </Box>
        <Box sx={{ width: '189px', display: { xs: 'block', md: 'inline-block' }, height: '40px', verticalAlign: 'middle', m: { xs: '0 auto 24px', md: '0 0 24px 60px' } }}>
          <Link href="https://ergopad.io">
            <Image layout="responsive" src="/partner-logos/ergopad.png" alt="Ergopad" height={40} width={189} />
          </Link>
        </Box>

      </Box>
    </Container >
  );
}
