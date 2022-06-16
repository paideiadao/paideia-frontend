import { Box, Button, IconButton } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProposalCard from "../proposals/ProposalCard";
import useDidMountEffect from "@components/utilities/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

let temp = new Date();
temp.setDate(temp.getDate() - 30);

export const proposals = [
  {
    id: 1,
    proposalName: "ProposalName 1",
    status: "Challenged",
    likes: 158,
    dislikes: 31,
    userSide: undefined,
    favorited: true,
    category: "Finance",
    widget: new Date(),
    yes: 114,
    no: 92,
  },
  {
    id: 2,
    proposalName: "ProposalName 2",
    status: "Active",
    likes: 158,
    dislikes: 31,
    userSide: 0,
    favorited: false,
    category: "Category 1",
    widget: "Hot",
    yes: 114,
    no: 92,
  },
  {
    id: 3,
    proposalName: "ProposalName 3",
    status: "Discussion",
    likes: 158,
    dislikes: 31,
    userSide: 1,
    favorited: true,
    category: "Category 2",
    widget: temp,
    comments: 115,
    users: 27,
  },
  {
    id: 4,
    proposalName: "ProposalName 4",
    status: "Unchallenged",
    likes: 158,
    dislikes: 31,
    userSide: undefined,
    favorited: false,
    category: "Category 3",
    widget: "Hot",
    date: new Date(),
  },
  {
    id: 5,
    proposalName: "ProposalName 5",
    status: "Unchallenged",
    likes: 158,
    dislikes: 31,
    userSide: undefined,
    favorited: true,
    category: "Category 4",
    widget: "DAO termination",
    date: new Date(),
  },
];

const ActiveProposal: React.FC = () => {
  const [slide, setSlide] = React.useState<number>(1);
  const incrementSlide = () =>
    slide + 4 > proposals.length
      ? setSlide(proposals.length)
      : setSlide(slide + 4);
  const decrementSlide = () =>
    slide - 4 < 0 ? setSlide(0) : setSlide(slide - 4);

  useDidMountEffect(() => {
    let element = document.getElementById(
      `proposal-active-${slide === 0 ? slide : slide - 1}`
    );
    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [slide]);

  const router = useRouter();
  const { id } = router.query;

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
          <Link href={id + "/proposals/all"}>
            <Button sx={{ fontSize: ".8rem" }}>View All</Button>
          </Link>
          <IconButton
            size="small"
            disabled={slide <= 1}
            onClick={decrementSlide}
            sx={{ backgroundColor: "fileInput.main", mr: ".5rem" }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{ backgroundColor: "fileInput.main" }}
            onClick={incrementSlide}
            disabled={slide >= proposals.length}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: ".5rem",
          overflowX: "hidden",
          pt: ".75rem",
          width: "100%",
        }}
      >
        {proposals.map((i: any, c: number) => (
          <ProposalCard
            {...i}
            c={c}
            key={"proposal-card-key-" + c}
            width={{ sm: "50%", md: "45%", lg: "33%" }}
          />
        ))}
      </Box>
    </>
  );
};

export default ActiveProposal;
