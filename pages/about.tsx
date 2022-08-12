import React, { FC } from "react";
import PageHeader from "@components/PageHeader";
import PageNav from "@components/PageNav";
import Blockquote from "@components/Blockquote";
import {
  Typography,
  Grid,
  Container,
  Divider,
  Box,
  Card,
  CardContent,
  Avatar,
  Link,
} from "@mui/material";
import WhitepaperQuote from "@components/landing/WhitepaperQuote";
import SectionHeading from "@components/SectionHeading";
import RoadmapAccordion from "@components/RoadmapAccordion";
import CustomTable from "@components/CustomTable";
import TabsPanel from "@components/TabsPanel";
import CardSlider from "@components/CardSlider";
import TwitterIcon from "@components/svgs/TwitterIcon";
import LinkedinIcon from "@components/svgs/LinkedinIcon";
import { DarkTheme } from "@theme/theme";
import Image from "next/image";

interface INavLink {
  name: string;
  icon: string;
  link: string;
  position: number | undefined;
}

const navLinks: INavLink[] = [
  {
    name: "Introduction",
    icon: "waving_hand",
    link: "introduction",
    position: undefined,
  },
  {
    name: "Whitepaper",
    icon: "description",
    link: "whitepaper",
    position: undefined,
  },
  {
    name: "The Problem",
    icon: "warning",
    link: "theproblem",
    position: undefined,
  },
  {
    name: "The Solution",
    icon: "emoji_objects",
    link: "thesolution",
    position: undefined,
  },
  {
    name: "Roadmap",
    icon: "signpost",
    link: "roadmap",
    position: undefined,
  },
  {
    name: "Tokenomics",
    icon: "toll",
    link: "tokenomics",
    position: undefined,
  },
  {
    name: "Team",
    icon: "groups",
    link: "team",
    position: undefined,
  },
];

const examples = [
  {
    text: "Existing DAOs that need on-chain voting",
    icon: "/icons/StrongHandshakeIcon.svg",
  },
  {
    text: "Investment groups that pool their resources to meet minimums",
    icon: "/icons/GoldBarsIcon.svg",
  },
  {
    text: "Developer teams that need to protect funding runway",
    icon: "/icons/DevIcon.svg",
  },
  {
    text: "Startups looking to raise funds",
    icon: "/icons/TokenIcon.svg",
  },
  {
    text: "Blockchain Projects that need to provide transparency and rugpull resistance",
    icon: "/icons/CubesIcon.svg",
  },
  {
    text: "P2E gaming guilds that want to play in shifts",
    icon: "/icons/GamingIcon.svg",
  },
];

const problems = [
  {
    num: "01",
    title: "Standard Functionality and Governance Options",
    body: "A software suite that offers a selection of pre-defined governance options and capabilities that simplifies the whole process of creating and participating in a DAO, with clear documentation that eliminates the need to read the DAO smart contracts and open source code for those with the desire and ability to review the code themselves.",
  },
  {
    num: "02",
    title: "Support",
    body: "DAOs are a new type of organization. The concept will evolve. Individual groups will grow and change. DAOs are going to need membership support and developers that can implement new features to meet the needs of the DAO.",
  },
  {
    num: "03",
    title: "Security",
    body: "All smart contracts are reviewed by independent third parties familiar with Ergoscript to make sure it conforms to the best practices. Further, smart contracts will be tested extensively to ensure funds are secure, and vote tallies are fair, transparent, and untamperable. ",
  },
];

const tableHeading = [
  {
    id: "name",
    name: "Name",
  },
  {
    id: "amount",
    name: "Amount",
  },
  {
    id: "value",
    name: "Value",
  },
  {
    id: "tge",
    name: "TGE",
  },
  {
    id: "freq",
    name: "Frequency",
  },
  {
    id: "length",
    name: "Length",
  },
  {
    id: "cliff",
    name: "Cliff",
  },
];

const tableRows = [
  {
    name: "Ergopad Staker Round",
    amount: 28000000,
    value: "0.001",
    tge: "",
    freq: "Daily",
    length: "12 Months",
    cliff: "None",
  },
  {
    name: "Seed Round",
    amount: 36000000,
    value: "0.005",
    tge: "",
    freq: "Daily",
    length: "9 Months",
    cliff: "None",
  },
  {
    name: "Strategic Round",
    amount: 20000000,
    value: "0.008",
    tge: "",
    freq: "Daily",
    length: "6 Months",
    cliff: "None",
  },
  {
    name: "Liquidity (Locked)",
    amount: 16000000,
    value: "0.01",
    tge: "100%",
    freq: "",
    length: "",
    cliff: "",
  },
  {
    name: "Marketing",
    amount: 20000000,
    value: "",
    tge: "10%",
    freq: "Monthly",
    length: "24 Months",
    cliff: "1 Month",
  },
  {
    name: "Staking Rewards",
    amount: 40000000,
    value: "",
    tge: "",
    freq: "Daily",
    length: "48 Months",
    cliff: "",
  },
  {
    name: "Airdrops",
    amount: 2000000,
    value: "",
    tge: "",
    freq: "",
    length: "",
    cliff: "",
  },
  {
    name: "DAO Reserve",
    amount: 16000000,
    value: "",
    tge: "10%",
    freq: "Quarterly",
    length: "5 Quarters",
    cliff: "1 Quarter",
  },
  {
    name: "Advisors",
    amount: 6000000,
    value: "",
    tge: "5%",
    freq: "Monthly",
    length: "6 Months",
    cliff: "3 Months",
  },
  {
    name: "Team",
    amount: 16000000,
    value: "",
    tge: "5%",
    freq: "Monthly",
    length: "12 Months",
    cliff: "6 Months",
  },
];

const tabs = [
  {
    title: "Distribution",
    fragment: <CustomTable rows={tableRows} heading={tableHeading} />,
  },
  {
    title: "Chart",
    fragment: <Box sx={{ p: "24px", minHeight: "600px" }}>Hello</Box>,
  },
];

const cardTitleStyle = {
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  fontFamily: '"Inter", sans-serif',
  mb: "12px",
  textAlign: "center",
};

const iconLinkStyles = {
  color: DarkTheme.palette.text.primary,
  fontSize: "inherit",
  "&:hover": {
    color: DarkTheme.palette.primary.main,
  },
};

interface IPerson {
  name: string;
  title: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

interface IPersonObj {
  person: IPerson;
}

const MyCard: FC<IPersonObj> = ({ person }) => {
  return (
    <Card
      sx={{
        // background: "rgba(255, 255, 255, 0.02)",
        width: "196px",
        maxWidth: "calc(100vw - 48px)",
        whiteSpace: "normal",
        // borderRadius: "10px",
        // border: "1px solid rgba(255, 255, 255, 0.12)",
      }}
      className="border-grad"
    >
      <CardContent sx={{ height: "100%" }}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item>
            <Avatar
              src={person?.image}
              sx={{ width: 80, height: 80, mx: "auto" }}
              alt={person.name}
            />
            <Typography sx={{ ...cardTitleStyle, mt: "12px" }}>
              {person.name}
            </Typography>
            <Typography sx={{ ...cardTitleStyle, color: "#aaa" }}>
              {person.title}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              {person.linkedin ? (
                <Grid item>
                  <Link
                    href={person.linkedin}
                    target="_blank"
                    sx={iconLinkStyles}
                    rel="noreferrer"
                  >
                    <LinkedinIcon sx={{ fontSize: "inherit" }} />
                  </Link>
                </Grid>
              ) : null}
              {person.twitter ? (
                <Grid item>
                  <Link
                    href={person.twitter}
                    target="_blank"
                    sx={iconLinkStyles}
                    rel="noreferrer"
                  >
                    <TwitterIcon sx={{ fontSize: "inherit" }} />
                  </Link>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const theCards: IPerson[] = [
  {
    name: "Marty C.",
    title: "CEO",
    image: "",
    linkedin: "",
    twitter: "https://twitter.com/esot321c",
  },
  {
    name: "Leif Erickson",
    title: "CTO",
    image: "",
    linkedin: "",
    twitter: "https://twitter.com/leiferiqson",
  },
  {
    name: "Nicolas Bondancia Girard",
    title: "UX/UI Designer",
    image: "/images/team/nico.png",
    linkedin: "https://linkedin.com/in/nicolas-bondancia-girard-aa39a0197/",
    twitter: "https://twitter.com/NicoUXUI",
  },
  {
    name: "Ornella Manes",
    title: "Graphic Designer",
    image: "/images/team/orne.jpeg",
    linkedin: "https://linkedin.com/in/ornellamanes/",
    twitter: "",
  },
  {
    name: "Robert Pieter van Leeuwen - Luivatra",
    title: "Lead Ergoscript Dev",
    image: "",
    linkedin: "https://linkedin.com/in/robert-pieter-van-leeuwen-28b8b853/",
    twitter: "https://twitter.com/Luivatra",
  },
  {
    name: "Abhishek Pal - noob77777",
    title: "Full Stack Dev",
    image: "/images/team/noob.jpg",
    linkedin: "",
    twitter: "https://twitter.com/abhishekpc3po",
  },
  {
    name: "Trapper T",
    title: "Front End Dev",
    image: "",
    linkedin: "",
    twitter: "",
  },
  {
    name: "Alexis Ekici",
    title: "Marketing Manager",
    image: "/images/team/alexis.jpg",
    linkedin: "",
    twitter: "https://twitter.com/AlexisEkici",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        bgUrl="/backgrounds/about-header-bg.png"
        sectionTitle="About"
        titleLineOne="What Is"
        titleLineTwo="Paideia&lt;"
        subTitleOne="A Web3 DAO Management"
        subTitleTwo="Software Suite"
        imgPositionSx={{
          top: "200px",
          width: "1716px",
          height: "1224px",
          left: "50%",
          transform: "translate(-50%,0)",
        }}
      />
      <Container id="navContainer">
        <PageNav navLinks={navLinks}>
          <Box component="section" id="introduction">
            <Grid container>
              <Grid item md={7}>
                <Blockquote small sx={{ mb: "48px" }}>
                  Paideia is an organization whose purpose is to create a
                  functional, secure, and well-documented DAO software suite
                  that supports DAOs as they form and develop. It will make it
                  easy for anyone to initiate a DAO, distribute tokens using
                  various methods, create proposals and collect votes. It will
                  help various organizations share funds in a secure and fair
                  way.
                </Blockquote>
              </Grid>
              <Grid item md={5}></Grid>
            </Grid>
            <Grid container>
              <Grid item md={3}></Grid>
              <Grid item md={7}>
                <Typography sx={{ fontWeight: "700", mb: "48px" }}>
                  Anyone who needs to manage a treasury as a group will benefit
                  from these tools. Examples include:
                </Typography>
                <Grid
                  container
                  justifyContent="center"
                  spacing={6}
                  sx={{ mb: "48px" }}
                >
                  {examples.map(({ text, icon }, i) => {
                    return (
                      <Grid item md={6} key={i} sx={{ maxWidth: "320px" }}>
                        <img src={icon} width={35} height={35} />
                        <Typography
                          sx={{
                            fontFamily: '"Space Grotesk", sans-serif',
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          {text}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
                <Grid item md={2}></Grid>
              </Grid>
            </Grid>
          </Box>
          <Box component="section" id="whitepaper">
            <WhitepaperQuote sx={{ my: "64px" }} />
          </Box>
          <Box component="section" id="theproblem" sx={{ display: "block" }}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  left: { xs: "40%", md: "calc(50% - 700px)" },
                  height: "1713px",
                  width: "1213px",
                  transform: {
                    xs: "translate(-70%, 0)",
                    sm: "translate(-80%, 0)",
                    md: "translate(-50%, 0)",
                  },
                  // overflow: "hidden",
                  zIndex: "-1",
                  ml: "-24px",
                }}
              >
                <Image src="/backgrounds/face-bg.png" layout="fill" priority />
              </Box>
            </Box>
            <SectionHeading
              category="The Problem"
              title="Functionali&shy;ty, Security, and Support"
              sx={{ mb: "120px", display: "block" }}
            >
              People do not join DAOs to create software. They join them to
              accomplish something in the real world that benefits them or their
              communities. But, a DAO needs software to enable it to function as
              a decentralized, autonomous organization. DAOs need an
              off-the-shelf DAO toolkit, one that provides:
            </SectionHeading>
            <Grid container sx={{ mb: "200px" }}>
              <Grid item md={3}></Grid>
              <Grid item md={7}>
                <Grid container direction="column" spacing={12}>
                  {problems.map(({ num, title, body }, i) => {
                    return (
                      <Grid item key={i}>
                        <Grid
                          container
                          sx={{ flexDirection: { xs: "column", sm: "row" } }}
                        >
                          <Grid item sm={4}>
                            <Typography
                              sx={{
                                fontFamily: '"Viga", sans-serif',
                                fontSize: { xs: "60px", sm: "100px" },
                                lineHeight: "100px",
                              }}
                            >
                              {num}&#47;
                            </Typography>
                          </Grid>
                          <Grid item sm={8}>
                            <Typography
                              sx={{
                                fontFamily: '"Space Grotesk", sans-serif',
                                fontWeight: "700",
                                fontSize: "24px",
                              }}
                            >
                              {title}
                            </Typography>
                            <Divider
                              sx={{
                                my: "12px",
                                borderColor: "rgba(255, 255, 255, 1)",
                              }}
                            />
                            <Typography>{body}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item md={2}></Grid>
            </Grid>
          </Box>
          <Box component="section" id="thesolution">
            <Box sx={{ mb: "48px" }}>
              <img src="/exclamation.svg" height={266} width={60} />
            </Box>
            <SectionHeading
              category="The Solution"
              title="Paideia is a DAO management software suite"
              sx={{ mb: "280px" }}
            >
              It is designed to make it easy for anyone to create, manage and be
              involved in a DAO, as well as facilitate the distribution of
              governance tokens and allow the ability to raise funds. The
              technical goal is to provide a secure DAO tool set that is open,
              easy to use, inexpensive, and allows for use in any environment.
              With Paideia in the hands of anyone that wishes to use it, this
              software suite can open new ways for people to work together, to
              change their lives and the world for the better.
            </SectionHeading>
          </Box>
          <Box component="section" id="roadmap">
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "-1500px", md: "-500px" },
                  left: { xs: "50%", md: "calc(50% + 700px)" },
                  width: "1827px",
                  height: "2527px",
                  transform: {
                    xs: "translate(-20%, 0)",
                    md: "translate(-50%, 0)",
                  },
                  // overflow: "hidden",
                  zIndex: "-1",
                  ml: "-24px",
                }}
              >
                <Image
                  src="/backgrounds/orange-blob.png"
                  layout="fill"
                  priority
                />
              </Box>
            </Box>
            <RoadmapAccordion sx={{ mb: "280px" }} />
          </Box>
          <Box component="section" id="tokenomics">
            <SectionHeading
              category="Paideia Token"
              title="Tokenomics"
              sx={{ mb: "100px" }}
            />
            <Box sx={{ width: "100%", mb: "280px" }}>
              <TabsPanel
                tabs={tabs}
                headline={
                  "There will be a max supply of 200M Paideia tokens distributed as follows: "
                }
              />
            </Box>
          </Box>
          <Box component="section" id="team">
            <SectionHeading
              category="Get to know us"
              title="Our Team"
              sx={{ mb: "100px" }}
            />
            <CardSlider uniqueId="team" contained>
              {theCards.map((person, i: number) => {
                return <MyCard key={i} person={person} />;
              })}
            </CardSlider>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "0px",
              left: "50%",
              width: "2160px",
              transform: "translate(-50%, 0)",
              zIndex: "-8",
              ml: "-24px",
              maxHeight: "calc(100% + 400px)",
              overflow: "visible",
            }}
          >
            <img src="/featured-bg.png" width={2039} height={2116} />
          </Box>
        </PageNav>
      </Container>
    </>
  );
}
