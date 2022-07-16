import React, { FC } from "react";
import PageHeader from "@components/PageHeader";
import { Typography, Grid, Container, Box, Divider, Icon } from "@mui/material";
import Image from "next/image";
import Highlights from "@components/Highlights";
import SectionHeading from "@components/SectionHeading";
import ProjectList from "@components/ProjectList";
import { DarkTheme } from "@theme/theme";

const articles = [
  {
    name: "Swamp Audio",
    image: "/featured/featured.png",
    description: "A layer 1 on chain royalty management platform",
    link: "/",
    category: "Music",
  },
];

export default function Blog() {
  return (
    <>
      <PageHeader
        bgUrl="/about-header-bg.png"
        sectionTitle="Blog"
        titleLineOne="Our Latest"
        titleLineTwo="Articles"
        subTitleOne="Don't miss out on any of the latest updates "
        subTitleTwo=" "
      />

      <Highlights />

      <Container sx={{ py: "240px" }}>
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={9}>
            <SectionHeading
              category="Who Uses Paideia?"
              title="List of All Active DAOs"
              sx={{ mb: "80px", maxWidth: "550px" }}
            />
          </Grid>
        </Grid>
        <ProjectList daos={articles} />
      </Container>
    </>
  );
}
