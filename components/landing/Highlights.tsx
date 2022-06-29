import {
  Typography,
  Grid,
  Box,
  Button,
  Container,
  Divider,
  Chip,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DarkTheme, LightTheme } from "@theme/theme";
import SectionTitle from "@components/SectionTitle";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";
import AcUnitIcon from "@mui/icons-material/AcUnit";

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
  fontSize: "34px",
  lineHeight: "41px",
  fontWeight: "700",
  color: DarkTheme.palette.text.primary,
  // textTransform: "uppercase",
  fontFamily: '"Space Grotesk", sans-serif',
  mb: "16px",
};

const sponsoredSecondary = {
  fontSize: "34px",
  fontFamily: '"Viga", sans-serif',
  lineHeight: "41px",
};

const paragraphStyle = {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.15px",
  mb: "16px",
};

function Example(props: any) {
  var items = [
    {
      label: "Gaming",
      title: "Using paideia in the gaming world",
      content: `ErgoGames.io took root in the idea that the Ergo Blockchain has tremendous potential to become a leading layer-1 solution, and that blockchain-based games will play an integral role in the network's growth.`,
      link: "/",
      image: "/images/highlight.png",
    },
    {
      label: "Art Media",
      title: "Teams of artists can combine forces",
      content:
        "You can share your NFT proceeds by using a DAO to distribute and control raised funds",
      link: "/",
      image: "/images/highlight.png",
    },
    {
      label: "Music DAOs",
      title: "Want to collaborate with other musicians? ",
      content: "Do it with Paideia",
      link: "/",
      image: "/images/highlight.png",
    },
    {
      label: "Music DAOs",
      title: "Want to collaborate with other musicians? ",
      content: "Do it with Paideia",
      link: "/",
      image: "/images/highlight.png",
    },
    {
      label: "Art Media",
      title: "Teams of artists can combine forces",
      content:
        "You can share your NFT proceeds by using a DAO to distribute and control raised funds",
      link: "/",
      image: "/images/highlight.png",
    },
  ];
  const theme = useTheme();

  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      height={useMediaQuery(theme.breakpoints.up("md")) ? "558px" : undefined}
      navButtonsAlwaysVisible={
        useMediaQuery(theme.breakpoints.up("md")) ? true : false
      }
      navButtonsProps={{
        style: {
          backgroundColor: LightTheme.palette.primary.main,
          // borderRadius: 0
        },
      }}
      sx={{
        zIndex: "2",
        maxWidth: "xl",
        mx: "auto",
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  const theme = useTheme();
  const sizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const sizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const sizeXl = useMediaQuery(theme.breakpoints.up("xl"));

  const Content = () => {
    return (
      <>
        <Typography sx={secondaryTitleStyle}>{props.item.title}</Typography>
        <Typography sx={paragraphStyle}>{props.item.content}</Typography>
        <Button href={props.item.link} endIcon={<ArrowForwardIcon />}>
          Check it out
        </Button>
      </>
    );
  };

  if (sizeXl) {
    return (
      <Grid
        container
        spacing={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          overflow: "hidden",
          mr: "96px",
          // px: '24px'
        }}
      >
        <Grid item md={6}>
          <Box sx={{ position: "relative", width: "100%", height: "558px" }}>
            <Box
              sx={{
                position: "absolute",
                right: "0",
                top: "0",
                overflow: "visible",
                zIndex: "1",
              }}
            >
              <Image
                src={props.item.image}
                layout="fixed"
                objectFit="cover"
                height={558}
                width={720}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box maxWidth="520px">
            <Content />
          </Box>
        </Grid>
      </Grid>
    );
  } else if (sizeLg) {
    return (
      <Grid
        container
        spacing={6}
        maxWidth="100vw"
        alignItems="center"
        sx={{
          overflow: "hidden",
          mx: "auto",
          px: "24px",
        }}
      >
        <Grid item md={6}>
          <Box sx={{ position: "relative", width: "100%", height: "558px" }}>
            <Box
              sx={{
                position: { xs: "relative", md: "absolute" },
                right: "0",
                top: "0",
                overflow: "visible",
                zIndex: "1",
              }}
            >
              <Image
                src={props.item.image}
                layout="fixed"
                height={558}
                width={768}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box sx={{ maxWidth: "480px" }}>
            <Content />
          </Box>
        </Grid>
      </Grid>
    );
  } else if (sizeMd) {
    return (
      <Grid
        container
        spacing={6}
        maxWidth="lg"
        alignItems="center"
        sx={{
          overflow: "hidden",
        }}
      >
        <Grid item md={6}>
          <Box sx={{ height: "558px", display: "block", position: "relative" }}>
            <Image src={props.item.image} layout="fill" objectFit="cover" />
          </Box>
        </Grid>
        <Grid item md={6} sx={{ pr: "63px" }}>
          <Content />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Container sx={{ display: "block", positoin: "relative" }}>
        <Box
          sx={{
            height: "400px",
            top: "0",
            left: "0",
            width: "100vw",
            position: "absolute",
            zIndex: "-2",
            maskImage: "linear-gradient(black 40%, transparent 100%)",
          }}
        >
          <Image src={props.item.image} layout="fill" objectFit="cover" />
        </Box>
        <Box sx={{ pt: "300px", position: "relative", display: "block" }}>
          <Content />
        </Box>
      </Container>
    );
  }
}

export default function Highlights() {
  return (
    <>
      <Container
        sx={{
          flexGrow: 1,
          px: "24px",
          position: "relative",
        }}
      >
        <Grid container sx={{ mt: "120px" }}>
          <Grid item md={6}>
            <SectionTitle marginBottom="24px">
              Featured
            </SectionTitle>
            <Typography sx={{ ...titleStyle, mb: "64px" }}>
              You can&apos;t miss these highlights
            </Typography>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
      <Example />
    </>
  );
}
