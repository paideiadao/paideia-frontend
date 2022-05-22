import { Box, Badge, Chip, Avatar } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";
import CircleIcon from "@mui/icons-material/Circle";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { percentage } from "../../../lib/creation/Utilities";

export interface IProposalCard {
  proposalName: string;
  status: string;
  userSide: number;
  favorited: boolean;
  likes: number;
  dislikes: number;
  category: string;
  widget: any;
  c: number;
  yes: number;
  no: number;
  comments: number;
  users: number;
  date: Date;
}

const VoteWidget: React.FC<{
  yes: number;
  no: number;
}> = (props) => {
  return (
    <Box sx={{ width: "100%", mt: "-.1rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          color: "text.lightSuccess",
        }}
      >
        {percentage(props.yes / (props.yes + props.no), 0)} YES
        <Box sx={{ ml: "auto", color: "red" }}>
          {percentage(props.no / (props.yes + props.no), 0)} NO
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: ".4rem", display: "flex" }}>
        <Box
          sx={{
            width: percentage(props.yes / (props.yes + props.no)),
            backgroundColor: "green",
            height: ".2rem",
          }}
        ></Box>
        <Box
          sx={{
            width: percentage(props.no / (props.yes + props.no)),
            backgroundColor: "red",
            height: ".2rem",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "text.light",
          fontSize: ".8rem",
        }}
      >
        {props.yes} votes
        <Box sx={{ ml: "auto" }}>{props.no} votes</Box>
      </Box>
    </Box>
  );
};

const ProposalStatus: React.FC<{ status: string }> = (props) => {
  const getStatusColor = () => {
    switch (props.status) {
      case "Challenged": {
        return "tokenAlert.main";
      }
      // passed color??
      case "Passed": {
        return "text.lightSuccess";
      }
      case "Active": {
        return "text.lightSuccess";
      }
      case "Discussion": {
        return "primary.main";
      }
      case "Unchallenged": {
        return "text.lightSuccess";
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: getStatusColor(),
        fontSize: ".8rem",
      }}
    >
      <CircleIcon sx={{ fontSize: "1rem", mr: ".3rem" }} />
      {props.status}
    </Box>
  );
};

// userSide, undefined for no vote, 0 for dislike, 1 for like
const LikesDislikes: React.FC<{
  likes: number;
  dislikes: number;
  userSide: number;
}> = (props) => {
  // use a prop setter function to set user state to liked or disliked & make an api call here.
  return (
    <Box sx={{ display: "flex", alignItems: "center", fontSize: ".8rem" }}>
      {props.userSide === undefined ? (
        <>
          <ThumbDownOffAltIcon sx={{ mr: ".3rem", fontSize: "1rem" }} />
          {props.dislikes}
          <ThumbUpOffAltIcon
            sx={{ ml: ".5rem", mr: ".3rem", fontSize: "1rem" }}
          />
          {props.likes}
        </>
      ) : props.userSide === 0 ? (
        <>
          <ThumbDownIcon sx={{ mr: ".3rem", fontSize: "1rem", color: "red" }} />
          <span style={{ color: "red" }}>{props.dislikes}</span>
          <ThumbUpOffAltIcon
            sx={{ ml: ".5rem", mr: ".3rem", fontSize: "1rem" }}
          />
          {props.likes}
        </>
      ) : (
        <>
          <ThumbDownOffAltIcon sx={{ mr: ".3rem", fontSize: "1rem" }} />
          {props.dislikes}
          <ThumbUpIcon
            sx={{
              ml: ".5rem",
              mr: ".3rem",
              fontSize: "1rem",
              color: "text.lightSuccess",
            }}
          />
          <Box sx={{ color: "text.lightSuccess" }}>{props.likes}</Box>
        </>
      )}
    </Box>
  );
};

const CardContent: React.FC<{ category: string; widget: any }> = (props) => {
  const [widget, setWidget] = React.useState<any>(props.widget);
  const [time, setTime] = React.useState<string>("");
  let temp = new Date();
  temp.setDate(temp.getDate() + 30);
  var countDownDate = temp.getTime();

  React.useEffect(() => {
    if (typeof widget === "object") {
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          setTime("EXPIRED");
        }
      }, 1000);
    }
  }, []);

  return (
    <Box
      sx={{
        mt: ".5rem",
        height: "7rem",
        backgroundColor: "fileInput.outer",
        border: "1px solid",
        borderColor: "divider.main",
        borderRadius: ".3rem",
        p: ".25rem",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", right: ".3rem" }}>
        <Chip
          icon={
            <Box
              sx={{
                height: "1rem",
                width: "1rem",
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              {typeof widget === "object" ? (
                <AccessTimeFilledIcon sx={{ fontSize: "1rem" }} />
              ) : widget === "DAO termination" ? (
                <DeleteIcon sx={{ fontSize: "1rem" }} />
              ) : (
                <LocalFireDepartmentIcon sx={{ fontSize: "1rem" }} />
              )}
            </Box>
          }
          label={typeof widget === "object" ? time : widget}
          size="small"
          sx={{
            fontSize: ".7rem",
            color: "backgroundColor.main",
            backgroundColor:
              widget === "DAO termination" ? "red" : "tokenAlert.main",
            border: "1px solid",
            borderColor:
              widget === "DAO termination" ? "red" : "tokenAlert.main",
          }}
        />
      </Box>
      <Box sx={{ position: "absolute", bottom: ".3rem" }}>
        <Chip
          label={props.category}
          size="small"
          sx={{
            fontSize: ".7rem",
            color: "primary.main",
            backgroundColor: "backgroundColor.main",
            border: "1px solid",
            borderColor: "primary.main",
          }}
        />
      </Box>
    </Box>
  );
};

const CountdownWidget: React.FC<{ date: Date }> = (props) => {
  const [time, setTime] = React.useState<string>("");
  React.useEffect(() => {
    var x = setInterval(function () {
      let temp = new Date(props.date);
      temp.setDate(temp.getDate() + 30);
      var countDownDate = temp.getTime();
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      setTime(days + " days " + hours + " hours " + minutes + " minutes");

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setTime("EXPIRED");
      }
    }, 1000);
  }, []);
  return (
    <Box sx={{ width: "100%", fontSize: ".9rem" }}>
      {time}
      <Box sx={{ fontSize: ".8rem", color: "text.light" }}>
        Until proposal passes
      </Box>
    </Box>
  );
};

const ProposalCard: React.FC<IProposalCard> = (props) => {
  const getFooter = () => {
    switch (props.status) {
      case "Challenged": {
        return <VoteWidget yes={props.yes} no={props.no} />;
      }
      // passed color??
      case "Passed": {
        return "text.lightSuccess";
      }
      case "Active": {
        return <VoteWidget yes={props.yes} no={props.no} />;
      }
      case "Discussion": {
        return (
          <Box sx={{ width: "100%" }}>
            Join the Conversation
            <Box sx={{ fontSize: ".8rem", color: "text.light" }}>
              {props.comments} comments from {props.users} users
            </Box>
          </Box>
        );
      }
      case "Unchallenged": {
        return <CountdownWidget date={props.date} />;
      }
    }
  };
  // use a local state to make it dynamic...
  return (
    <Box
      sx={{ pr: "1rem", pt: ".5rem", pb: ".5rem" }}
      id={`proposal-active-${props.c}`}
    >
      <Badge
        badgeContent={
          <Box
            sx={{
              backgroundColor: "favoriteBackground.main",
              color: "text.light",
              p: ".2rem",
              borderRadius: "50%",
              width: "1.5rem",
              height: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => console.log("favorite api call here.")}
          >
            {props.favorited ? (
              <FavoriteIcon sx={{ fontSize: "1rem", fill: "red" }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: "1rem", fill: "red" }} />
            )}
          </Box>
        }
      >
        <Box
          sx={{
            backgroundColor: "fileInput.outer",
            border: "1px solid",
            borderColor: "divider.main",
            borderRadius: ".3rem",
            width: "14.3rem",
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
              <ProposalStatus status={props.status} />
              <Box sx={{ ml: "auto" }}>
                <LikesDislikes
                  likes={props.likes}
                  dislikes={props.dislikes}
                  userSide={props.userSide}
                />
              </Box>
            </Box>
            <CardContent category={props.category} widget={props.widget} />
          </Box>
          <Box sx={{ p: ".5rem", height: "4rem" }}>{getFooter()}</Box>
        </Box>
      </Badge>
    </Box>
  );
};

export default ProposalCard;
