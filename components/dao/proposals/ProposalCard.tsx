import { Box, Badge } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";
import CircleIcon from '@mui/icons-material/Circle';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export interface IProposalCard {
  proposalName: string;
  status: string;
  userSide: number;
  c: number;
}

const ProposalStatus: React.FC<{status: string}> = (props) => {
  return <Box sx={{display: 'flex', alignItems: 'center', color: 'tokenAlert.main', fontSize: '.8rem'}}>
    <CircleIcon sx={{fontSize: '1rem', mr: '.3rem'}}/>
    Challenged
  </Box>
}

// userSide, undefined for no vote, 0 for dislike, 1 for like
const LikesDislikes: React.FC<{likes: number, dislikes: number, userSide: number}> = (props) => {
  return <Box sx={{display: 'flex', alignItems: 'center', fontSize: '.8rem'}}>
      {props.userSide === undefined ? <>
      <ThumbDownOffAltIcon sx={{mr: '.3rem', fontSize: '1rem'}}/>
      {props.dislikes}
      <ThumbUpOffAltIcon sx={{ml: '.5rem', mr: '.3rem', fontSize: '1rem'}}/>
      {props.likes}
      </> : props.userSide === 0 ? <>
      <ThumbDownIcon sx={{mr: '.3rem', fontSize: '1rem', color: 'red'}}/>
      <span style={{color: 'red'}}>{props.dislikes}</span>
      <ThumbUpOffAltIcon sx={{ml: '.5rem', mr: '.3rem', fontSize: '1rem'}}/>
      {props.likes}
      </> : <>
      <ThumbDownOffAltIcon sx={{mr: '.3rem', fontSize: '1rem'}}/>
      {props.dislikes}
      <ThumbUpIcon sx={{ml: '.5rem', mr: '.3rem', fontSize: '1rem'}}/>
      <span style={{color: 'green'}}>{props.likes}</span>
      </>}
  </Box>
}



const ProposalCard: React.FC<IProposalCard> = (props) => {
  return <Box sx={{mr: '1rem'}} id={`proposal-active-${props.c}`}>
    <Badge
      badgeContent={
        <Box
          sx={{
            backgroundColor: "fileInput.outer",
            color: "primary.lightText",
            border: "1px solid",
            p: ".2rem",
            borderRadius: "50%",
            width: "1.1rem",
            height: "1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          A
        </Box>
      }
    >
      <Box
        sx={{
          backgroundColor: "fileInput.outer",
          border: "1px solid",
          borderColor: "divider.main",
          borderRadius: ".3rem",
          width: "14rem",
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid",
            borderBottomColor: "divider.main",
            p: ".5rem",
          }}
        >
          <Subheader title={props.proposalName} small />
          <Box sx={{ display: "flex", fontSize: ".8rem" }}>
            <ProposalStatus status={props.status}/>
            <Box sx={{ ml: "auto" }}>
              <LikesDislikes likes={158} dislikes={31} userSide={props.userSide}/>
            </Box>
          </Box>
          <Box>Content here</Box>
        </Box>
        <Box sx={{ p: ".5rem" }}>Footer Here...</Box>
      </Box>
    </Badge>
  </Box>
};

export default ProposalCard;
