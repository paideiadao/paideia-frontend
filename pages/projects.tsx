import React, { FC } from "react";
import PageHeader from "@components/PageHeader";
import { Typography, Grid, Container, Box, Divider, Icon } from "@mui/material";
import Image from "next/image";
import Highlights from "@components/Highlights";
import SectionHeading from "@components/SectionHeading";
import ProjectList from "@components/ProjectList";
import { DarkTheme } from "@theme/theme";

interface IQuotesProps {
  quote: string;
  author: string;
}

const quotes: IQuotesProps[] = [
  {
    quote:
      "Love Paideia! The definition of “Simplexity” simple on the outside but so much brillance going behind the scenes!",
    author: "Ornella Maines",
  },
  {
    quote:
      "Love Paideia! The definition of “Simplexity” simple on the outside but so much brillance going behind the scenes!",
    author: "Ornella Maines",
  },
  {
    quote:
      "Love Paideia! The definition of “Simplexity” simple on the outside but so much brillance going behind the scenes!",
    author: "Ornella Maines",
  },
];

const daos = [
  {
    name: "Swamp Audio",
    image: "/featured/featured.png",
    description: "A layer 1 on chain royalty management platform",
    link: "/",
    category: "Music",
  },
  {
    name: "Swamp Audio",
    image: "/featured/featured.png",
    description: "A layer 1 on chain royalty management platform",
    link: "/",
    category: "Music",
  },
  {
    name: "Swamp Audio",
    image: "/featured/featured.png",
    description: "A layer 1 on chain royalty management platform",
    link: "/",
    category: "Music",
  },
  {
    name: "Swamp Audio",
    image: "/featured/featured.png",
    description: "A layer 1 on chain royalty management platform",
    link: "/",
    category: "Music",
  },
  {
    name: "Swamp Audio",
    image: "/featured/featured.png",
    description: "A layer 1 on chain royalty management platform",
    link: "/",
    category: "Music",
  },
  {
    name: "Swamp Audio",
    image: "/featured/featured.png",
    description: "A layer 1 on chain royalty management platform",
    link: "/",
    category: "Music",
  },
  {
    name: "Swamp Audio",
    image: "/featured/featured.png",
    description: "A layer 1 on chain royalty management platform",
    link: "/",
    category: "Music",
  },
  {
    name: "Swamp Audio",
    image: "/featured/featured.png",
    description: "A layer 1 on chain royalty management platform",
    link: "/",
    category: "Music",
  },
];

export default function Projects() {
  return (
    <>
      <PageHeader
        bgUrl="/about-header-bg.png"
        sectionTitle="Projects"
        titleLineOne="Projects"
        titleLineTwo="In Paideia&lt;"
        subTitleOne="Find all the projects launched on"
        subTitleTwo="Paideia and new ones coming soon. "
      />

      <Highlights />

      <Container sx={{ py: "240px" }}>
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={9}>
            <SectionHeading
              category="Why Trust Us?"
              title="Feedback from our Users"
              sx={{ mb: "80px", maxWidth: "550px" }}
            ></SectionHeading>
            <Grid container>
              {quotes.map((quote, i: number) => (
                <Grid key={i} item md={4} sx={{ mb: "80px" }}>
                  <Typography>{quote.quote}</Typography>
                  <Box>
                    <Divider
                      sx={{
                        width: "70%",
                        display: "inline-block",
                        verticalAlign: "middle",
                        borderColor: "#fff",
                      }}
                    />
                    &nbsp;
                    <Icon sx={{ verticalAlign: "middle", fontSize: "20px" }}>
                      add
                    </Icon>
                  </Box>
                  <Typography>{quote.author}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ pb: "240px" }}>
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={9}>
            <SectionHeading
              category="Who Uses Paideia?"
              title="List of All Active DAOs"
              sx={{ mb: "80px", maxWidth: "550px" }}
            ></SectionHeading>
          </Grid>
        </Grid>
        <ProjectList daos={daos} />
      </Container>
    </>
  );
}
