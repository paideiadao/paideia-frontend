
import React, { FC } from 'react';
import PageHeader from "@components/PageHeader";
import {
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import Image from "next/image";
import Highlights from '@components/Highlights';
import SectionHeading from "@components/SectionHeading";
import { DarkTheme } from "@theme/theme";

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
      <Container sx={{ px: "24px", py: '240px' }}>
        <Grid container>
          <Grid item md={3}>
          </Grid>
          <Grid item md={9}>
            <SectionHeading
              category="Why Trust Us?"
              title="Feedback from our Users"
              sx={{ mb: '80px', maxWidth: '550px', }}
            ></SectionHeading>
            <Grid container>
              <Grid item md={4}>
                Love Paideia! The definition of “Simplexity” simple on the outside but so much brillance going behind the scenes!
              </Grid>
              <Grid item md={4}>
                Love Paideia! The definition of “Simplexity” simple on the outside but so much brillance going behind the scenes!
              </Grid>
              <Grid item md={4}>
                Love Paideia! The definition of “Simplexity” simple on the outside but so much brillance going behind the scenes!
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
