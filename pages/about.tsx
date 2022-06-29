import PageHeader from "@components/PageHeader";
import PageNav from "@components/PageNav";
import Blockquote from "@components/Blockquote";
import { Typography, Grid, Container, Divider, Box } from "@mui/material";
import Image from "next/image";
import WhitepaperQuote from '@components/landing/WhitepaperQuote'
import SectionHeading from "@components/SectionHeading";
import RoadmapAccordion from "@components/RoadmapAccordion";
import CustomTable from "@components/CustomTable";

const navLinks = [
  {
    name: 'Introduction',
    icon: 'waving_hand',
    link: 'introduction',
    position: undefined
  },
  {
    name: 'Whitepaper',
    icon: 'description',
    link: 'whitepaper',
    position: undefined
  },
  {
    name: 'The Problem',
    icon: 'warning',
    link: 'theproblem',
    position: undefined
  },
  {
    name: 'The Solution',
    icon: 'emoji_objects',
    link: 'thesolution',
    position: undefined
  },
  {
    name: 'Roadmap',
    icon: 'signpost',
    link: 'roadmap',
    position: undefined
  },
  {
    name: 'Tokenomics',
    icon: 'signpost',
    link: 'tokenomics',
    position: undefined
  },
];

const examples = [
  {
    text: 'Existing DAOs that need on-chain voting',
    icon: '/icons/StrongHandshakeIcon.svg'
  },
  {
    text: 'Investment groups that pool their resources to meet minimums',
    icon: '/icons/GoldBarsIcon.svg'
  },
  {
    text: 'Developer teams that need to protect funding runway',
    icon: '/icons/DevIcon.svg'
  },
  {
    text: 'Startups looking to raise funds',
    icon: '/icons/TokenIcon.svg'
  },
  {
    text: 'Blockchain Projects that need to provide transparency and rugpull resistance',
    icon: '/icons/CubesIcon.svg'
  },
  {
    text: 'P2E gaming guilds that want to play in shifts',
    icon: '/icons/GamingIcon.svg'
  },
]

const problems = [
  {
    num: '01',
    title: 'Standard Functionality and Governance Options',
    body: 'A software suite that offers a selection of pre-defined governance options and capabilities that simplifies the whole process of creating and participating in a DAO, with clear documentation that eliminates the need to read the DAO smart contracts and open source code for those with the desire and ability to review the code themselves.'
  },
  {
    num: '02',
    title: 'Support',
    body: 'DAOs are a new type of organization. The concept will evolve. Individual groups will grow and change. DAOs are going to need membership support and developers that can implement new features to meet the needs of the DAO.'
  },
  {
    num: '03',
    title: 'Security',
    body: 'All smart contracts are reviewed by independent third parties familiar with Ergoscript to make sure it conforms to the best practices. Further, smart contracts will be tested extensively to ensure funds are secure, and vote tallies are fair, transparent, and untamperable. '
  },
]

const tableHeading = [
  {
    id: 'name',
    name: 'Name',
  },
  {
    id: 'amount',
    name: 'Amount',
  },
  {
    id: 'value',
    name: 'Value',
  },
  {
    id: 'tge',
    name: 'TGE',
  },
  {
    id: 'freq',
    name: 'Frequency',
  },
  {
    id: 'length',
    name: 'Length',
  },
  {
    id: 'cliff',
    name: 'Cliff',
  },
]

const tableRows = [
  {
    name: "Ergopad Staker Round",
    amount: 28000000,
    value: "0.001",
    tge: "",
    freq: "Daily",
    length: "12 Months",
    cliff: "None"
  },
  {
    name: "Seed Round",
    amount: 36000000,
    value: "0.005",
    tge: "",
    freq: "Daily",
    length: "9 Months",
    cliff: "None"
  },
  {
    name: "Strategic Round",
    amount: 20000000,
    value: "0.008",
    tge: "",
    freq: "Daily",
    length: "6 Months",
    cliff: "None"
  },
  {
    name: "Liquidity (Locked)",
    amount: 16000000,
    value: "0.01",
    tge: "100%",
    freq: "",
    length: "",
    cliff: ""
  },
  {
    name: "Marketing",
    amount: 20000000,
    value: "",
    tge: "10%",
    freq: "Monthly",
    length: "24 Months",
    cliff: "1 Month"
  },
  {
    name: "Staking Rewards",
    amount: 40000000,
    value: "",
    tge: "",
    freq: "Daily",
    length: "48 Months",
    cliff: "Start Date TBD"
  },
  {
    name: "Airdrops",
    amount: 2000000,
    value: "",
    tge: "",
    freq: "",
    length: "",
    cliff: ""
  },
  {
    name: "DAO Reserve",
    amount: 16000000,
    value: "",
    tge: "10%",
    freq: "Quarterly",
    length: "5 Quarters",
    cliff: "1 Quarter"
  },
  {
    name: "Advisors",
    amount: 6000000,
    value: "",
    tge: "5%",
    freq: "Monthly",
    length: "6 Months",
    cliff: "3 Months"
  },
  {
    name: "Team",
    amount: 16000000,
    value: "",
    tge: "5%",
    freq: "Monthly",
    length: "12 Months",
    cliff: "6 Months"
  }
]

export default function About() {

  return (
    <>
      <PageHeader
        bgUrl="/about-header-bg.png"
        sectionTitle="About"
        titleLineOne="What Is"
        titleLineTwo="Paideia&lt;"
        subTitleOne="A Web3 DAO Management"
        subTitleTwo="Software Suite"
      />
      <Container sx={{ px: "24px", py: '60px' }} id="navContainer">
        <Grid container spacing={4}>
          <Grid item md={3}>
            <PageNav navLinks={navLinks} />
          </Grid>
          <Grid item md={9}>
            <section id="introduction">
              <Grid container>
                <Grid item md={7}>
                  <Blockquote small sx={{ mb: '48px' }}>
                    Paideia is an organization whose purpose is to create a functional, secure, and well-documented DAO software suite that supports DAOs as they form and develop. It will make it easy for anyone to initiate a DAO, distribute tokens using various methods, create proposals and collect votes. It will help various organizations share funds in a secure and fair way.
                  </Blockquote>
                </Grid>
                <Grid item md={5}>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={3}>
                </Grid>
                <Grid item md={7}>
                  <Typography sx={{ fontWeight: '700', mb: '48px' }}>
                    Anyone who needs to manage a treasury as a group will benefit from these tools. Examples include:
                  </Typography>
                  <Grid container justifyContent="center" spacing={6} sx={{ mb: '48px' }}>
                    {examples.map(({ text, icon }, i) => {
                      return (
                        <Grid item md={6} key={i} sx={{ maxWidth: '320px' }}>
                          <Image src={icon} width={35} height={35} />
                          <Typography sx={{
                            fontFamily: '"Space Grotesk", sans-serif',
                            fontWeight: '600',
                            fontSize: '18px',
                          }}>
                            {text}
                          </Typography>
                        </Grid>
                      )
                    })}
                  </Grid>
                  <Grid item md={2}>
                  </Grid>
                </Grid>
              </Grid>
            </section>
            <section id="whitepaper">
              <WhitepaperQuote sx={{ my: '64px' }} />
            </section>
            <section id="theproblem">
              <SectionHeading
                category="The Problem"
                title="Functionality, Security, and Support"
                sx={{ mb: '120px' }}
              >
                People do not join DAOs to create software. They join them to accomplish something in the real world that benefits them or their communities. But, a DAO needs software to enable it to function as a decentralized, autonomous organization. DAOs need an off-the-shelf DAO toolkit, one that provides:
              </SectionHeading>
              <Grid container sx={{ mb: '200px' }}>
                <Grid item md={3}>

                </Grid>
                <Grid item md={7}>
                  <Grid container direction="column" spacing={12}>
                    {problems.map(({ num, title, body }, i) => {
                      return (
                        <Grid item>
                          <Grid container>
                            <Grid item xs={4}>
                              <Typography sx={{
                                fontFamily: '"Viga", sans-serif',
                                fontSize: '100px',
                                lineHeight: '100px'
                              }}>
                                {num}&#47;
                              </Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <Typography sx={{
                                fontFamily: '"Space Grotesk", sans-serif',
                                fontWeight: '700',
                                fontSize: '24px',
                              }}>
                                {title}
                              </Typography>
                              <Divider sx={{ my: '12px' }} />
                              <Typography>
                                {body}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
                <Grid item md={2}>

                </Grid>
              </Grid>
            </section>
            <section id="thesolution">
              <Box sx={{ mb: '48px' }}>
                <Image src="/exclamation.svg" height={266} width={60} layout="fixed" />
              </Box>
              <SectionHeading
                category="The Solution"
                title="Paideia is a DAO management software suite"
                sx={{ mb: '180px' }}
              >
                It is designed to make it easy for anyone to create, manage and be involved in a DAO, as well as facilitate the distribution of governance tokens and allow the ability to raise funds. The technical goal is to provide a secure DAO tool set that is open, easy to use, inexpensive, and allows for use in any environment.

                With Paideia in the hands of anyone that wishes to use it, this software suite can open new ways for people to work together, to change their lives and the world for the better.
              </SectionHeading>
            </section>
            <section id="roadmap">
              <RoadmapAccordion />
            </section>
            <section id="tokenomics">
              <CustomTable rows={tableRows} heading={tableHeading} />
            </section>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
