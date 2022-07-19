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
} from "@mui/material";
import Image from "next/image";
import WhitepaperQuote from "@components/landing/WhitepaperQuote";
import SectionHeading from "@components/SectionHeading";
import RoadmapAccordion from "@components/RoadmapAccordion";
import CustomTable from "@components/CustomTable";
import TabsPanel from "@components/TabsPanel";
import { DarkTheme } from "@theme/theme";

const navLinks = [
  {
    name: "Our Mission",
    icon: "waving_hand",
    link: "mission",
    position: undefined,
  },
  {
    name: "Ergo",
    icon: "description",
    link: "ergo-advantage",
    position: undefined,
  },
  {
    name: "Learn",
    icon: "warning",
    link: "learn",
    position: undefined,
  },
  {
    name: "FAQ",
    icon: "emoji_objects",
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
          <Box component="section" id="mission">
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
          </Box>
          <Box component="section" id="ergo-advantage">
            <WhitepaperQuote sx={{ my: "64px" }} />
          </Box>
          <Box component="section" id="learn">
            <SectionHeading
              category="The Problem"
              title="Functionality, Security, and Support"
              sx={{ mb: "120px" }}
            >
              People do not join DAOs to create software. They join them to
              accomplish something in the real world that benefits them or their
              communities. But, a DAO needs software to enable it to function as
              a decentralized, autonomous organization. DAOs need an
              off-the-shelf DAO toolkit, one that provides:
            </SectionHeading>
          </Box>
          <Box component="section" id="faq">
            <RoadmapAccordion sx={{ mb: "280px" }} />
          </Box>
        </PageNav>
      </Container>
    </>
  );
}

export default Education;
