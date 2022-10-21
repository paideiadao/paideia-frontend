import React from "react";
import useSWR from "swr";
import { fetcher } from "@lib/utilities";
import PageHeader from "@components/PageHeader";
import {
  Typography,
  Grid,
  Container,
  Box,
  Divider,
  Icon,
  Button,
} from "@mui/material";
import Image from "next/image";
import Highlights from "@components/Highlights";
import SectionHeading from "@components/SectionHeading";
import SectionTitle from "@components/SectionTitle";
import ProjectList from "@components/ProjectList";

interface IQuotesProps {
  quote: string;
  author: string;
}

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
  const { data: highlightsData } = useSWR(
    `/blogs/?highlights_only=true`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const { data: quotesData } = useSWR(
    `/quotes/`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <>
      <PageHeader
        bgUrl="/backgrounds/projects-bg.png"
        imgPositionSx={{
          width: "1792px",
          height: "2184px",
          left: "calc(50% - 900px)",
          transform: "translate(-50%,0)",
          top: "-500px",
        }}
        mobileBgUrl="/backgrounds/projects-bg.png"
        mobileSx={{
          width: "1344px",
          height: "1638px",
          left: "-200px",
          top: "-100px",
        }}
        sectionTitle="Projects"
        titleLineOne="Projects"
        titleLineTwo="In Paideia&lt;"
        subTitleOne="Find all the projects launched on"
        subTitleTwo="Paideia and new ones coming soon. "
      />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "-600px",
            left: "calc(50% + 700px)",
            height: "2184px",
            width: "1792px",
            transform: "translate(-50%, 0)",
            // overflow: "hidden",
            zIndex: "-1",
            ml: "-24px",
          }}
        >
          <Image src="/backgrounds/green-blob.png" layout="fill" priority />
        </Box>
      </Box>
      <Highlights
        highlights={
          highlightsData
            ? highlightsData.map((highlight: { name: string, description: string, link: string }) => {
                return { ...highlight,
                  title: highlight.name,
                  content: highlight.description,
                  link: `/blog/${highlight.link}`
                };
              })
            : []
        }
      />
      <Container sx={{ py: "240px" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-100px",
              left: "calc(50% + 140px)",
              height: "881px",
              width: "1379px",
              transform: "translate(-50%, 0)",
              // overflow: "hidden",
              zIndex: "-1",
              ml: "-24px",
            }}
          >
            <Image
              src="/backgrounds/feedback-blob.png"
              layout="fill"
              priority
            />
          </Box>
        </Box>
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={9}>
            <SectionHeading
              category="Why Trust Us?"
              title="Feedback from our Users"
              sx={{ mb: "80px", maxWidth: "550px" }}
            ></SectionHeading>
            <Grid container>
              {(quotesData ?? []).map((quote: IQuotesProps, i: number) => (
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
            />
          </Grid>
        </Grid>
        <ProjectList daos={daos} />
      </Container>
      <Container sx={{ pb: "280px" }}>
        <Grid container>
          <Grid item md={6}></Grid>
          <Grid item md={6}>
            <SectionTitle sx={{ mb: "24px" }}>Feeling Good?</SectionTitle>
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: "400",
                lineHeight: "116.7%",
                textTransform: "uppercase",
                fontFamily: '"Viga", sans-serif',
                mb: "28px",
                textShadow: "0px 2px 2px rgba(0, 0, 0, 0.6)",
              }}
            >
              Get Started
            </Typography>
            <Button disabled variant="contained">Create Your DAO</Button>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "-1335px",
            left: "calc(50% - 200px)",
            height: "1335px",
            width: "2648px",
            transform: "translate(-50%, 0)",
            // overflow: "hidden",
            zIndex: "-1",
            ml: "-24px",
          }}
        >
          <Image
            src="/backgrounds/projects-bottom.png"
            layout="fill"
            priority
          />
        </Box>
      </Box>
    </>
  );
}
