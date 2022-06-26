import { Avatar, Badge, Box, Button, IconButton } from "@mui/material";
import * as React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/router";
import Link from "next/link";

export interface IMemberCard {
  width: any;
  favorited: boolean;
  id: string;
  name: string;
  level: number;
  followers: number;
  created: number;
  approved: number;
  img: string;
}

const MemberCard: React.FC<IMemberCard> = (props) => {
  const [favorited, setFavorited] = React.useState<boolean>(props.favorited);
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box
      sx={{
        pr: "1rem",
        pt: ".5rem",
        pb: ".5rem",
        minWidth: props.width,
        maxWidth: props.width,
      }}
      id={`proposal-active-${props.id}`}
    >
      <Badge
        badgeContent={
          <IconButton
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
            borderColor: "divider.main",
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
              borderBottomColor: "divider.main",
              p: ".5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: "1rem",
            }}
          >
            <Avatar
              src={props.img}
              sx={{ width: "4.5rem", height: "4.5rem" }}
            />
            <Box>{props.name}</Box>
            <Box sx={{ fontSize: ".8rem", color: "text.light" }}>
              Level {props.level} | Philosopher
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                mt: ".5rem",
              }}
            >
              <Box
                sx={{
                  fontSize: ".7rem",
                  color: "text.light",
                  textAlign: "center",
                  pr: "1rem",

                  borderRight: "1px solid",
                  borderRightColor: "divider.main",
                }}
              >
                Followers
                <Box sx={{ color: "text.main", fontSize: "1.1rem" }}>
                  {props.followers}
                </Box>
              </Box>
              <Box
                sx={{
                  fontSize: ".7rem",
                  pl: "1rem",
                  color: "text.light",
                  textAlign: "center",
                  pr: "1rem",

                  borderRight: "1px solid",
                  borderRightColor: "divider.main",
                }}
              >
                Created
                <Box sx={{ color: "text.main", fontSize: "1.1rem" }}>
                  {props.created}
                </Box>
              </Box>
              <Box
                sx={{
                  fontSize: ".7rem",
                  pl: "1rem",
                  color: "text.light",
                  textAlign: "center",
                }}
              >
                Approved
                <Box sx={{ color: "text.main", fontSize: "1.1rem" }}>
                  {props.approved}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              p: ".5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              href={
                id === undefined
                  ? `/dao/member/${props.id}`
                  : `/dao/${id}/member/${props.id}`
              }
            >
              <Button variant="text">View Profile</Button>
            </Link>
          </Box>
        </Box>
      </Badge>
    </Box>
  );
};

export default MemberCard;
