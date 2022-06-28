import React, { FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Box, Icon } from "@mui/material";
import SectionTitle from "@components/SectionTitle";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '2rem' }} />}
    sx={{ justifyContent: 'flex-start' }}
    {...props}
  />
))(({ theme }) => ({


  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    flexGrow: '0',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface AccordionExtraProps {
  sx?: object;
}

const accordionObject = [
  {
    title: 'Q1/ 2022',
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
        body: 'Using the Ergopad platform, raise funds from DAO members for developing the platform',
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

const RoadmapAccordion: FC<AccordionExtraProps> = ({ sx }) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box sx={sx}>
      <SectionTitle marginBottom='120px'>
        Roadmap
      </SectionTitle>

      {accordionObject.map((item) => {
        return (
          <Accordion expanded={expanded === item.panel} onChange={handleChange(item.panel)}>
            <AccordionSummary aria-controls={item.panel + 'd-content'} id={item.panel + 'd-header'}>
              <Typography
                sx={{
                  fontSize: "48px",
                  fontWeight: "400",
                  lineHeight: "116.7%",
                  textTransform: "uppercase",
                  fontFamily: '"Viga", sans-serif',
                }}
              >{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Timeline>

                {item.content.map((time) => {
                  return (
                    <TimelineItem sx={{}}>
                      <TimelineOppositeContent
                        sx={{ flexGrow: 0 }}
                      >
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot>
                          <Icon>
                            {time.completed ? 'check_circle' : 'history'}
                          </Icon>
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography>
                          {time.title}
                        </Typography>
                        <Typography>
                          {time.body}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })
                }

              </Timeline>


            </AccordionDetails>
          </Accordion>
        )
      })
      }




    </Box>
  )
}

export default RoadmapAccordion