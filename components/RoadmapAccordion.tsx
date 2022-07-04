import React, { FC } from 'react';
import { Grid, Typography, Box, Icon } from "@mui/material";
import SectionTitle from "@components/SectionTitle";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const accordionObject = [
  {
    title: 'Q1/ 2022',
    image: 'Q1',
    panel: 'panel1',
    content: [
      {
        title: 'Begin UX development',
        body: 'Design UX in Figma and procude prototypes to show the community',
        completed: true
      },
      {
        title: 'Whitepaper',
        body: 'Complete first draft of the Whitepaper',
        completed: true
      },
      {
        title: 'Community Outreach',
        body: 'Create social media accounts and begin posting',
        completed: true
      },
      {
        title: 'Raise Funds',
        body: 'Using the Ergopad platform, raise funds from DAO members to develop the platform',
        completed: true
      },
      {
        title: 'Smart Contract Design',
        body: 'Begin conceptualizing the smart contracts',
        completed: true
      },
      {
        title: 'Front-end Design',
        body: 'Work on front-end designs with the UX team and graphic designer for a Figma prototype',
        completed: true
      },
    ]
  },
  {
    title: 'Q2/ 2022',
    image: 'Q2',
    panel: 'panel2',
    content: [
      {
        title: 'TGE and IDO',
        body: 'Generate the tokens and complete the IDO, adding liquidity to Ergodex',
        completed: true
      },
      {
        title: 'Staking V1',
        body: 'Launch the temporary staking contracts that will run until MVP and platform fees can be distributed',
        completed: true
      },
      {
        title: 'Front-end Code',
        body: 'Complete the code for the front-end for both the dApp and website',
        completed: false
      },
    ]
  },
  {
    title: 'Q3/ 2022',
    image: 'Q3',
    panel: 'panel3',
    content: [
      {
        title: 'Front- and Back-end consolidation',
        body: 'Teams will collaborate to create the necessary API endpoints and get the front-end functioning',
        completed: true
      },
      {
        title: 'Alpha Test',
        body: 'Begin testing how the platform works. Test user flows. If smart contracts are ready, use test tokens to try them out. ',
        completed: false
      },
      {
        title: 'MVP Launch',
        body: 'Once tested and audited, launch MVP. ',
        completed: false
      },
    ]
  },
  {
    title: 'Q4/ 2022',
    image: 'Q4',
    panel: 'panel4',
    content: [
      {
        title: 'Front- and Back-end consolidation',
        body: 'Teams will collaborate to create the necessary API endpoints and get the front-end functioning',
        completed: true
      },
      {
        title: 'Alpha Test',
        body: 'Begin testing how the platform works. Test user flows. If smart contracts are ready, use test tokens to try them out. ',
        completed: false
      },
      {
        title: 'MVP Launch',
        body: 'Once tested and audited, launch MVP. ',
        completed: false
      },
    ]
  },
  {
    title: '2023 & Beyond',
    image: '2023',
    panel: 'panel5',
    content: [
      {
        title: 'Front- and Back-end consolidation',
        body: 'Teams will collaborate to create the necessary API endpoints and get the front-end functioning',
        completed: true
      },
      {
        title: 'Alpha Test',
        body: 'Begin testing how the platform works. Test user flows. If smart contracts are ready, use test tokens to try them out. ',
        completed: false
      },
      {
        title: 'MVP Launch',
        body: 'Once tested and audited, launch MVP. ',
        completed: false
      },
    ]
  },
]

interface IAccordion {
  sx?: object;
}

const RoadmapAccordion: FC<IAccordion> = ({ sx }) => {

  return (
    <Box sx={sx}>
      <SectionTitle marginBottom='120px'>
        Roadmap
      </SectionTitle>
      {accordionObject.map((item, i) => {
        return (
          <MuiAccordion
            key={i}
            disableGutters
            elevation={0}
            square
            sx={{
              minHeight: '300px',
              backgroundImage: `url(/${item.image}.png)`,
              backgroundRepeat: 'no-repeat',
              '&:not(:last-child)': {
                borderBottom: 0,
              },
              '&:before': {
                display: 'none',
              },
            }}
          >
            <MuiAccordionSummary
              expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '2rem' }} />}
              aria-controls={item.panel + 'd-content'}
              id={item.panel + 'd-header'}
              sx={{
                justifyContent: 'flex-start',
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(90deg)',
                },
                '& .MuiAccordionSummary-content': {
                  marginLeft: '12px',
                  flexGrow: '0',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "48px",
                  fontWeight: "400",
                  lineHeight: "116.7%",
                  textTransform: "uppercase",
                  fontFamily: '"Viga", sans-serif',
                }}
              >{item.title}&nbsp;</Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
              <Timeline sx={{
                '& li:last-child': {
                  '& .MuiTimelineConnector-root': {
                    display: 'none'
                  }
                }
              }}>
                {item.content.map((time, i) => {
                  return (
                    <TimelineItem key={i}>
                      <TimelineOppositeContent sx={{ flexGrow: 0 }} />
                      <TimelineSeparator>
                        <TimelineDot
                          sx={{
                            background: 'linear-gradient(180deg, #F2CA83 0%, #6A8C90 100%)',
                            border: 'none',
                            color: '#000',
                          }}>
                          <Icon color="inherit">
                            {time.completed ? 'done' : 'history'}
                          </Icon>
                        </TimelineDot>
                        <TimelineConnector sx={{ width: '1px' }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ color: time.completed ? 'rgba(255, 255, 255, 0.7)' : '#fff' }}>
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid item>
                            <Typography sx={{
                              fontFamily: '"Space Grotesk", sans-serif',
                              fontWeight: "700",
                              fontSize: "24px",
                              lineHeight: '32px',
                              my: '6px',
                              mr: '6px',
                            }}>
                              {time.title}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Icon color="inherit" sx={{ fontSize: '16px !important' }}>
                              calendar_today
                            </Icon>
                          </Grid>
                          <Grid item>
                            <Typography sx={{ fontSize: '14px', letterSpacing: '1px' }}>
                              {time.completed ? 'COMPLETED' : 'COMING SOON'}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography
                          sx={{
                            fontSize: '16px',
                            mb: '32px',
                          }}>
                          {time.body}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })}
              </Timeline>
            </MuiAccordionDetails>
          </MuiAccordion>
        )
      })
      }
    </Box>
  )
}

export default RoadmapAccordion