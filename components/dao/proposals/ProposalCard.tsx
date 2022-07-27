import { Box, Badge, Chip, Avatar, IconButton } from "@mui/material";
import * as React from "react";
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
import Link from "next/link";
import { GlobalContext } from "@lib/AppContext";
import { useRouter } from "next/router";
import { deviceWrapper } from "@components/utilities/Style";
import { getRandomImage } from "@components/utilities/images";

export interface IProposalCard {
  id: number;
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
  width: any;
  scrollable?: boolean;
}

export const VoteWidget: React.FC<{
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
          color: "success.light",
        }}
      >
        {percentage(props.yes / (props.yes + props.no), 0)} YES
        <Box sx={{ ml: "auto", color: "error.light" }}>
          {percentage(props.no / (props.yes + props.no), 0)} NO
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: ".4rem", display: "flex" }}>
        <Box
          sx={{
            width: percentage(props.yes / (props.yes + props.no)),
            backgroundColor: "success.light",
            height: ".2rem",
          }}
        ></Box>
        <Box
          sx={{
            width: percentage(props.no / (props.yes + props.no)),
            backgroundColor: "error.light",
            height: ".2rem",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "text.secondary",
          fontSize: "1rem",
        }}
      >
        {props.yes} votes
        <Box sx={{ ml: "auto" }}>{props.no} votes</Box>
      </Box>
    </Box>
  );
};

export const ProposalStatus: React.FC<{ status: string }> = (props) => {
  const getStatusColor = () => {
    switch (props.status) {
      case "Challenged": {
        return "tokenAlert.main";
      }
      // passed color??
      case "Passed": {
        return "success.light";
      }
      case "Active": {
        return "success.light";
      }
      case "Discussion": {
        return "primary.main";
      }
      case "Unchallenged": {
        return "success.light";
      }
      case "Failed": {
        return "red";
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: getStatusColor(),
        fontSize: ".7rem",
      }}
    >
      <CircleIcon sx={{ fontSize: "1rem", mr: ".1rem" }} />
      {props.status}
    </Box>
  );
};

interface ILikesDislikes {
  likes: number;
  dislikes: number;
  userSide: number;
}

// userSide, undefined for no vote, 0 for dislike, 1 for like
export const LikesDislikes: React.FC<ILikesDislikes> = (props) => {
  // use a prop setter function to set user state to liked or disliked & make an api call here.
  const [value, setValue] = React.useState<ILikesDislikes>({
    ...props,
  });

  const iconFont = {
    xs: ".9rem",
    sm: ".9rem",
    md: ".8rem",
    lg: ".8rem",
    xl: "1rem",
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", fontSize: iconFont }}>
      {value.userSide === undefined ? (
        <>
          <ThumbUpOffAltIcon
            sx={{
              ml: ".2rem",
              mr: ".1rem",
              fontSize: iconFont,
              cursor: "pointer",
            }}
            onClick={() =>
              setValue({
                ...value,
                userSide: 1,
                likes: value.likes + 1,
              })
            }
          />
          {value.likes}
          <ThumbDownOffAltIcon
            sx={{
              mr: ".1rem",
              fontSize: iconFont,
              cursor: "pointer",
              ml: ".4rem",
            }}
            onClick={() =>
              setValue({
                ...value,
                userSide: 0,
                dislikes: value.dislikes + 1,
              })
            }
          />
          {value.dislikes}
        </>
      ) : value.userSide === 0 ? (
        <>
          <ThumbUpOffAltIcon
            sx={{
              ml: ".2rem",
              mr: ".1rem",
              fontSize: iconFont,
              cursor: "pointer",
            }}
            onClick={() =>
              setValue({
                ...value,
                userSide: 1,
                likes: value.likes + 1,
                dislikes: value.dislikes - 1,
              })
            }
          />
          {value.likes}
          <ThumbDownIcon
            sx={{
              mr: ".1rem",
              ml: ".4rem",
              fontSize: iconFont,
              cursor: "pointer",
              color: "error.light",
            }}
          />
          <Box sx={{ color: "error.light", display: "inline" }}>
            {value.dislikes}
          </Box>
        </>
      ) : (
        <>
          <ThumbUpIcon
            sx={{
              ml: ".2rem",
              mr: ".1rem",
              fontSize: iconFont,
              color: "success.light",
              cursor: "pointer",
            }}
          />
          <Box sx={{ color: "success.light" }}>{value.likes}</Box>
          <ThumbDownOffAltIcon
            sx={{
              mr: ".1rem",
              fontSize: iconFont,
              cursor: "pointer",
              ml: ".4rem",
            }}
            onClick={() =>
              setValue({
                ...value,
                userSide: 0,
                dislikes: value.dislikes + 1,
                likes: value.likes - 1,
              })
            }
          />
          {value.dislikes}
        </>
      )}
    </Box>
  );
};

const CountdownTimer: React.FC<{ widget: any }> = (props) => {
  const [time, setTime] = React.useState<string>("");
  let temp = new Date();
  temp.setDate(temp.getDate() + 30);
  var countDownDate = temp.getTime();
  React.useEffect(() => {
    if (typeof props.widget === "object") {
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
  }, [props.widget]);
  let widget = props.widget;
  return (
    <>
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
            widget === "DAO termination" ? "error.light" : "tokenAlert.main",
          border: "1px solid",
          borderColor:
            widget === "DAO termination" ? "error.light" : "tokenAlert.main",
        }}
      />
    </>
  );
};

const CardContent: React.FC<{ category: string; widget: any; c: number }> = (
  props
) => {
  const [widget, setWidget] = React.useState<any>(props.widget);

  return (
    <Box
      sx={{
        mt: ".5rem",
        height: "7rem",
        backgroundColor: "fileInput.outer",
        // backgroundImage: deviceWrapper(
        //   `url(https://picsum.photos/350/200/?random=${props.c})`,
        //   `url(https://picsum.photos/300/200/?random=${props.c})`
        // ),
        backgroundImage: `url(${getRandomImage()})`,
        backgroundSize: "100%",
        width: "100%",
        border: "1px solid",
        borderColor: "border.main",
        borderRadius: ".3rem",
        p: ".25rem",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", right: ".3rem" }}>
        <CountdownTimer widget={props.widget} />
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
    <Box
      sx={{
        width: "100%",
        fontSize: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {time}
      <Box sx={{ fontSize: ".7rem", color: "text.secondary" }}>
        Until proposal passes
      </Box>
    </Box>
  );
};

const ProposalCard: React.FC<IProposalCard> = (props) => {
  const [favorited, setFavorited] = React.useState<boolean>(props.favorited);
  const getFooter = () => {
    const footerFont = {
      xs: ".7rem",
      sm: ".7rem",
      md: ".8rem",
      lg: ".9rem",
      xl: "1rem",
    };
    const footerSmallFont = {
      xs: ".5rem",
      sm: ".5rem",
      md: ".65rem",
      lg: ".7rem",
      xl: ".8rem",
    };
    switch (props.status) {
      case "Challenged": {
        return <VoteWidget yes={props.yes} no={props.no} />;
      }
      // passed color??
      case "Passed": {
        return "text.secondarySuccess";
      }
      case "Active": {
        return <VoteWidget yes={props.yes} no={props.no} />;
      }
      case "Discussion": {
        return (
          <Box sx={{ width: "100%", fontSize: footerFont }}>
            Join the Conversation
            <Box sx={{ fontSize: footerSmallFont, color: "text.secondary" }}>
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
  let globalContext = React.useContext(GlobalContext);
  const router = useRouter();
  const { id } = router.query;

  // use a local state to make it dynamic...
  return (
    <Box
      sx={{
        pr: deviceWrapper("0", props.scrollable ? "0" : "1rem"),
        pt: ".5rem",
        pb: ".5rem",
        mt: props.scrollable ? ".5rem" : "0",
        minWidth: props.width,
        maxWidth: props.width,
      }}
      id={`proposal-active-${props.c}`}
    >
      <Badge
        badgeContent={
          <IconButton
            sx={{
              backgroundColor: "favoriteBackground.main",
              color: "text.secondary",
              p: ".2rem",
              borderRadius: "50%",
              width: "1.5rem",
              height: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setFavorited(!favorited);
            }}
          >
            {favorited ? (
              <FavoriteIcon sx={{ fontSize: "1rem", fill: "red" }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: "1rem", fill: "red" }} />
            )}
          </IconButton>
        }
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            backgroundColor: "fileInput.outer",
            border: "1px solid",
            borderColor: "border.main",
            borderRadius: ".3rem",
            width: "100%",
            ":hover": {
              borderColor: "primary.main",
            },
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid",
              borderBottomColor: "border.main",
              p: ".5rem",
            }}
          >
            <Link
              href={
                (id === undefined ? "/dao/" : `/dao/${id}/`) +
                `${props.status === "Discussion" ? "discussion" : "proposal"}/${
                  props.id
                }`
              }
            >
              <Box sx={{ cursor: "pointer" }}>{props.proposalName}</Box>
            </Link>
            <Box sx={{ display: "flex", fontSize: "1rem" }}>
              <ProposalStatus status={props.status} />
              <Box sx={{ ml: "auto" }}>
                <LikesDislikes
                  likes={props.likes}
                  dislikes={props.dislikes}
                  userSide={props.userSide}
                />
              </Box>
            </Box>
            <CardContent
              category={props.category}
              widget={props.widget}
              c={props.c}
            />
          </Box>
          <Box sx={{ p: ".5rem", height: "4rem" }}>{getFooter()}</Box>
        </Box>
      </Badge>
    </Box>
  );
};

export default ProposalCard;
