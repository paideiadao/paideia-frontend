import { Avatar, Box, Button, LinearProgress, Modal } from "@mui/material";
import * as React from "react";
import Musk from "@public/profile/musk-full.png";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { GlobalContext } from "@lib/AppContext";
import { modalBackground } from "@components/utilities/modalBackground";
import {
  Header,
  Subtitle,
} from "@components/creation/utilities/HeaderComponents";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface ILevel {
  name: string;
  points: number;
}

let levels: ILevel[] = [
  { name: "Citizen", points: 0 },
  { name: "Citizen", points: 100 },
  { name: "Citizen", points: 200 },
  { name: "Citizen", points: 500 },
  { name: "Citizen", points: 1000 },
  { name: "Citizen", points: 2000 },
  { name: "Citizen", points: 3000 },
  { name: "Citizen", points: 5000 },
  { name: "Citizen", points: 8000 },
  { name: "Citizen", points: 12000 },
  { name: "Citizen", points: 20000 },
];

interface IAction {
  action: string;
  pointsEarned: number;
}

let actions: IAction[] = [
  { action: "Get upvoted on a comment or a proposal", pointsEarned: 10 },
  { action: "Vote on a proposal", pointsEarned: 100 },
  { action: "Get your proposal approved", pointsEarned: 500 },
];

const ProfileHeader: React.FC<{ edit?: boolean; followed?: boolean }> = (
  props
) => {
  let globalContext = React.useContext(GlobalContext);
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState<{ followed: boolean }>({
    followed: props.followed,
  });
  return (
    <Box
      sx={{
        ml: "1rem",
        display: "flex",
        alignItems: "flex-start",
        mt: ".5rem",
      }}
    >
      <Avatar sx={{ mr: ".5rem", width: "4.5rem", height: "4.5rem" }}>
        <img src={Musk.src} />
      </Avatar>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "72%",
          }}
        >
          <Box sx={{ fontSize: "1.1rem" }}>Alone Musk</Box>
          <Box
            sx={{
              color: "text.light",
              fontSize: ".7rem",
              display: "flex",
              alignItems: "center",
              width: "100%",
              mt: "-.5rem",
              mb: ".5rem",
            }}
          >
            Lvl 7 | Philosopher
            <Box sx={{ ml: "auto" }}>
              <Button
                onClick={handleOpen}
                sx={{ fontSize: { xs: ".5rem", s: ".8rem", md: ".8rem" } }}
              >
                <InfoIcon
                  color="primary"
                  sx={{
                    mr: ".5rem",
                    fontSize: { xs: ".5rem", s: ".8rem", md: ".8rem" },
                  }}
                />
                Learn More
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: "100%", height: ".5rem" }}>
            <LinearProgress variant="determinate" value={15} />
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ ml: "auto", color: "text.light", fontSize: ".7rem" }}>
              {350 - 10} PTS till next lvl
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            ml: "auto",
          }}
        >
          {props.edit ? (
            <Link href={`/dao/${globalContext.api.daoId}/profile/edit`}>
              <Button
                variant="contained"
                sx={{ fontSize: { xs: ".5rem", s: ".8rem", md: ".7rem" } }}
              >
                <EditIcon
                  sx={{
                    mr: ".5rem",
                    ml: "-.25rem",
                    fontSize: { xs: ".5rem", s: ".8rem", md: ".8rem" },
                  }}
                />
                Edit Profile
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() => setValue({ ...value, followed: !value.followed })}
              sx={{
                color: value.followed ? "red" : "text.light",
                borderColor: value.followed ? "red" : "text.light",
                fontSize: { xs: ".5rem", s: ".8rem", md: ".8rem" },
                ":hover": {
                  borderColor: "red",
                  color: "red",
                },
              }}
              variant="outlined"
            >
              {value.followed ? (
                <FavoriteIcon
                  sx={{
                    mr: ".3rem",
                    fontSize: { xs: ".5rem", s: ".8rem", md: ".8rem" },
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  sx={{
                    mr: ".3rem",
                    fontSize: { xs: ".5rem", s: ".8rem", md: ".8rem" },
                  }}
                />
              )}
              Follow{value.followed && "ed"}
            </Button>
          )}
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            ...modalBackground,
            backgroundColor: "fileInput.main",
            width: "30rem",
            pb: ".5rem",
          }}
        >
          <Header title="How do levels work?" />
          <Box sx={{ fontSize: ".9rem", mt: "1rem" }}>
            We have a level system that easily identifies users that are more
            engaged members of the community. The way it works is straight
            forward. Different actions get you points and each time you reach a
            specific amount of points, you reach a new level.
          </Box>
          <Box sx={{ mt: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mt: ".25rem",
                mb: ".25rem",
                color: "text.main",
                fontSize: ".9rem",
              }}
            >
              <Box>Level</Box>
              <Box sx={{ ml: "auto" }}>Points needed</Box>
            </Box>
            {levels.map((i: ILevel, c: number) => (
              <Box
                key={`level-key-${c}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  mt: ".25rem",
                  mb: ".25rem",
                  color: "text.light",
                  fontSize: ".9rem",
                }}
              >
                <Box>
                  Level {c} - {i.name}
                </Box>
                <Box sx={{ ml: "auto" }}>{i.points} Points</Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mt: ".25rem",
                mb: ".25rem",
                color: "text.main",
                fontSize: ".9rem",
              }}
            >
              <Box>Actions</Box>
              <Box sx={{ ml: "auto" }}>Points earned</Box>
            </Box>
            {actions.map((i: IAction, c: number) => (
              <Box
                key={`action-key-${c}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  mt: ".25rem",
                  mb: ".25rem",
                  color: "text.light",
                  fontSize: ".9rem",
                }}
              >
                <Box>{i.action}</Box>
                <Box sx={{ ml: "auto" }}>+{i.pointsEarned} points</Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ width: "100%", display: "flex", mt: ".5rem" }}>
            <Button variant="text" onClick={handleClose} sx={{ ml: "auto" }}>
              Got it
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProfileHeader;
