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
}

const ProposalStatus: React.FC<{ status: string }> = (props) => {
  const getStatusColor = () => {
    switch (props.status) {
      case "Challenged": {
        return "tokenAlert.main";
      }
      // passed color??
      case "Passed": {
        return "primary.lightSuccess";
      }
      case "Active": {
        return "primary.lightSuccess";
      }
      case "Discussion": {
        return "primary.main";
      }
      case "Unchallenged": {
        return "primary.lightSuccess";
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
              color: "primary.lightSuccess",
            }}
          />
          <Box sx={{ color: "primary.lightSuccess" }}>{props.likes}</Box>
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

const ProposalCard: React.FC<IProposalCard> = (props) => {
  // use a local state to make it dynamic...
  return (
    <Box sx={{ pr: "1rem" }} id={`proposal-active-${props.c}`}>
      <Badge
        badgeContent={
          <Box
            sx={{
              backgroundColor: "favoriteBackground.main",
              color: "primary.lightText",
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
          <Box sx={{ p: ".5rem" }}>Footer Here...</Box>
        </Box>
      </Badge>
    </Box>
  );
};

export default ProposalCard;
