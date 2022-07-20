import { CapsInfo } from "@components/creation/utilities/HeaderComponents";
import { Avatar, Box, Button } from "@mui/material";
import * as React from "react";
import { VoteWidget } from "../proposals/ProposalCard";
import dateFormat from "dateformat";
import { useRouter } from "next/router";
import Link from "next/link";

interface ILastVote {
  img: string;
  name: string;
  date: Date;
  vote: number;
}

const LastVotes: React.FC = () => {
  const lastVotes: ILastVote[] = [
    { img: "", name: "John Daonnot", date: new Date(), vote: 1 },
    { img: "", name: "Lily Evans", date: new Date(), vote: 1 },
    { img: "", name: "Michael Mirandi", date: new Date(), vote: 0 },
    { img: "", name: "Jaoquin Cizzin", date: new Date(), vote: 1 },
  ];
  return (
    <>
      {lastVotes.slice(0, 3).map((i: ILastVote, c: number) => {
        return (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              mb: ".5rem",
            }}
            key={`last-vote-${c}`}
          >
            <Avatar src={`https://picsum.photos/300/200/?random=${c}`} />
            <Box sx={{ ml: ".5rem" }}>
              {i.name}
              <Box sx={{ fontSize: ".9rem", color: "text.secondary" }}>
                {dateFormat(i.date, "mmmm dS, yyyy @ hh:mm")}
              </Box>
            </Box>
            <Box
              sx={{
                ml: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: ".2rem",
                pl: ".5rem",
                pr: ".5rem",
                backgroundColor: i.vote === 1 ? "success.light" : "error.light",
                color: i.vote === 1 ? "black" : "white",
                borderRadius: "1rem",
                fontSize: ".8rem",
              }}
            >
              {i.vote === 1 ? "YES" : "NO"}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

const _VoteWidget: React.FC = () => {
  const router = useRouter();

  const { id, proposal_id } = router.query;
  return (
    <Box
      sx={{
        backgroundColor: "fileInput.outer",
        border: "1px solid",
        borderColor: "border.main",
        borderRadius: ".3rem",
        width: "100%",
        mb: "1rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid",
          borderBottomColor: "border.main",
          p: ".5rem",
        }}
      >
        <CapsInfo title="Votes | 206" mb={"0"} />
        <VoteWidget yes={160} no={46} />
      </Box>
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid",
          borderBottomColor: "border.main",
          p: ".5rem",
        }}
      >
        <CapsInfo title="Last Votes" mb={"0"} />
        <LastVotes />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href={
            id === undefined
              ? `/dao/proposal/${proposal_id}/votes`
              : `/dao/${id}/proposal/${proposal_id}/votes`
          }
        >
          <Button
            size="small"
            sx={{
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              width: "100%",
            }}
          >
            View All Votes
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default _VoteWidget;
