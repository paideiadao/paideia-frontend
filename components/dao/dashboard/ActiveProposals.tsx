import { Box, Button, IconButton } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProposalCard from "../proposals/ProposalCard";

const proposals = [
  {proposalName: 'ProposalName 1', status: 'Challenged', likes: 158, dislikes: 31, userSide: undefined},
  {proposalName: 'ProposalName 2', status: 'Passed', likes: 158, dislikes: 31, userSide: 0},
  {proposalName: 'ProposalName 3', status: 'Active', likes: 158, dislikes: 31, userSide: 1},
  {proposalName: 'ProposalName 4', status: 'Unchallenged', likes: 158, dislikes: 31, userSide: undefined},
  {proposalName: 'ProposalName 5', status: 'Discussion', likes: 158, dislikes: 31, userSide: undefined},
]


const ActiveProposal: React.FC = () => {
  const [slide, setSlide] = React.useState<number>(1);
  const incrementSlide = () => slide + 3 > proposals.length ? setSlide(proposals.length) : setSlide(slide + 3)
  const decrementSlide = () => slide - 3 < 0 ? setSlide(0) : setSlide(slide - 3)

  React.useEffect(() => {
    console.log(slide)
    let element = document.getElementById(`proposal-active-${slide === 0 ? slide : slide - 1}`);
    element.scrollIntoView();
  }, [slide])

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          mt: "1rem",
        }}
      >
        <Subheader title="Active proposals" small bold />
        <Box sx={{ ml: "auto" }}>
          <Button sx={{ fontSize: ".8rem" }}>View All</Button>
          <IconButton
            size="small"
            disabled={slide <= 1}
            onClick={decrementSlide}
            sx={{ backgroundColor: "fileInput.main", mr: '.5rem' }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton size="small" sx={{ backgroundColor: "fileInput.main" }} onClick={incrementSlide} disabled={slide >= proposals.length}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: '.5rem', overflowX: 'hidden', pt: '.5rem' }}>
        {proposals.map((i: any, c: number) => <ProposalCard {...i} c={c} key={'proposal-card-key-' + c}/>)}
      </Box>
    </>
  );
};

export default ActiveProposal;
