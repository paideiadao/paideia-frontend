import React, { FC } from "react";
import PageHeader from "@components/PageHeader";
import PageNav from "@components/PageNav";
import {
  Grid,
  Button,
  Container,
  Box,
  Typography,
  List,
  ListItem
} from "@mui/material";
import WhitepaperQuote from "@components/landing/WhitepaperQuote";
import SectionHeading from "@components/SectionHeading";
import Blockquote from "@components/Blockquote";
import RoadmapAccordion from "@components/RoadmapAccordion";

const navLinks = [
  {
    name: "Our Mission",
    icon: "flag",
    link: "mission",
    position: undefined,
  },
  {
    name: "Ergo Advantage",
    icon: "polyline",
    link: "ergo-advantage",
    position: undefined,
  },
  {
    name: "Learn",
    icon: "school",
    link: "learn",
    position: undefined,
  },
  {
    name: "FAQ",
    icon: "help_outline",
    link: "faq",
    position: undefined,
  },
];

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

const Education: FC = () => {
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

      <Container sx={{ px: "24px", py: "60px" }} id="navContainer">
        <PageNav navLinks={navLinks}>
          <Box component="section" id="mission" sx={{ mb: '240px' }}>
            <SectionHeading
              category="What do we want to achieve?"
              title="Our Mission"
              sx={{ mb: "32px" }}
            />
            <Typography variant="p">
              Our mission is to give people the power, knowledge, and motivation to change the way they govern and participate in democratic organizations. We will help people experiment with different methods of governance and work together to create a better future, whatever they envision.
            </Typography>
            <Blockquote>
              Using our tools, individuals who don&apos;t have fair access to financial systems may take control and compete in a society that is imbalanced and stacked against them, without needing the approval of the wealthy or elite. Anyone who wants to engage in a democratic organization with a shared financial treasury can do so using Paideia.
            </Blockquote>
            <Typography variant="p">
              The tools we create will allow anyone to initiate and manage a DAO with no prior knowledge or experience, empowering groups of individuals to pool their wealth and put it toward a common aim.
            </Typography>
            <Typography variant="p">
              Through Paideia, DAOs will be able to:
              <List dense sx={{
                pl: '36px',
                '& li': {
                  pl: '1em',
                  position: 'relative',
                },
                '& li:before': {
                  content: '"-"',
                  position: 'absolute',
                  left: 0,
                }
              }}>
                <ListItem>
                  Distribute governance tokens
                </ListItem>
                <ListItem>
                  Raise funds
                </ListItem>
                <ListItem>
                  Manage their treasury
                </ListItem>
                <ListItem>
                  Track member reputation
                </ListItem>
                <ListItem>
                  Provide liquidity
                </ListItem>
                <ListItem>
                  Initiate and manage staking contracts
                </ListItem>
                <ListItem>
                  Create proposals on expenditures or governance
                </ListItem>
                <ListItem>
                  Have a forum for stakeholders to discuss all ideas and proposals
                </ListItem>
                <ListItem>
                  Easily deploy their funds to achieve their goals
                </ListItem>
                <ListItem>
                  Experiment with different types of automated algorithmic democratic processes
                </ListItem>
              </List>
            </Typography>
            <Button variant="contained">
              Read Whitepaper
            </Button>
          </Box>
          <Box component="section" id="ergo-advantage" sx={{ mb: '240px' }}>
            <SectionHeading
              category="Why on Ergo?"
              title="The Ergo Advantage"
              sx={{ mb: "32px" }}
            />
            <Typography variant="p">
              When building a DAO, it should exist on a blockchain with a strong foundation and fundamentals, be inexpensive to operate, be simple to use, and be secure and decentralized. It should resist government intervention and be accessible to anyone in the world, regardless of prohibitive local laws or social status. 
            </Typography>
          </Box>
          <Box component="section" id="learn" sx={{ mb: '240px' }}>
            <SectionHeading
              category="Useful Articles"
              title="Learn About DAO Governance"
              sx={{ mb: "32px" }}
            />
          </Box>
          <Box component="section" id="faq">
          <SectionHeading
              category="FAQ"
              title="Things you might be wondering"
              sx={{ mb: "32px" }}
            />
          </Box>
        </PageNav>
      </Container>
    </>
  );
}

export default Education;
