import { Box, Button, Chip } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next/types";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DiscussionPlaceholder from "@public/dao/discussion-banner-placeholder.png";
import { ThemeContext } from "@lib/ThemeContext";
import { LightTheme } from "@theme/theme";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Header } from "@components/creation/utilities/HeaderComponents";
import LanIcon from "@mui/icons-material/Lan";
import { useRouter } from "next/router";
import { IDiscussion } from "./create";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircleIcon from "@mui/icons-material/Circle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import dateFormat from "dateformat";
import { LikesDislikes } from "@components/dao/proposals/ProposalCard";

const Discussion: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);
  const router = useRouter();
  const { discussion_id } = router.query;

  const [value, setValue] = React.useState<IDiscussion>({
    name: "Discussion name",
    category: "Finance",
    references: [],
    content: "Content Here...",
    attachments: [],
    comments: [],
    userSide: 1,
    tags: ["Controversial"],
    followed: false,
    dislikes: 31,
    likes: 158,
    date: new Date(),
  });

  return (
    <Box sx={{ p: "1.5rem", width: "100%", display: "flex" }}>
      <Box sx={{ width: "65%" }}>
        <Box
          sx={{
            width: "100%",
            borderRadius: ".3rem",
            position: "relative",
            backgroundImage: `url(${DiscussionPlaceholder.src})`,
            p: "1rem",
            maxHeight: "30rem",
            display: "flex",
            alignItems: "flex-start",
            minHeight: "10rem",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "backgroundColor.main",
              ":hover": {
                backgroundColor: "backgroundColor.main",
              },
            }}
            size="small"
          >
            <ArrowBackIcon sx={{ mr: ".3rem" }} />
            Back
          </Button>
          <Box sx={{ ml: "auto" }}>
            {value.tags.map((i: any, c: number) => (
              <Chip
                key={"discussion-tag-key-" + c}
                label={i}
                variant="filled"
                icon={<LocalFireDepartmentIcon />}
                sx={{
                  backgroundColor: "tokenAlert.main",
                  color: themeContext.theme === LightTheme ? "white" : "black",
                }}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            mt: "1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Header title="Discussion name" large />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: ".9rem",
                color: "text.light",
              }}
            >
              <LanIcon sx={{ opacity: ".8", fontSize: "1rem", mr: ".3rem" }} />
              ID: {discussion_id}
            </Box>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <Button
              onClick={() => setValue({ ...value, followed: !value.followed })}
              sx={{
                color: value.followed ? "red" : "text.light",
                borderColor: value.followed ? "red" : "text.light",
                ":hover": {
                  borderColor: "red",
                  color: "red",
                },
              }}
              variant="outlined"
            >
              {value.followed ? (
                <FavoriteIcon sx={{ mr: ".3rem" }} />
              ) : (
                <FavoriteBorderIcon sx={{ mr: ".3rem" }} />
              )}
              Follow{value.followed && "ed"}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            mt: ".5rem",
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Chip
            label={value.category}
            variant="outlined"
            icon={<LocalFireDepartmentIcon sx={{ fontSize: "1rem" }} />}
            sx={{
              color: "primary.main",
              borderColor: "primary.main",
              fontSize: ".7rem",
            }}
          />
          <Box
            sx={{
              color: "primary.main",
              ml: ".5rem",
              display: "flex",
              alignItems: "center",
              fontSize: ".9rem",
            }}
          >
            <CircleIcon
              color="primary"
              sx={{ mr: ".3rem", fontSize: "1rem" }}
            />
            Discussion
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: ".5rem",
              color: "text.light",
              fontSize: ".9rem",
            }}
          >
            <CalendarTodayIcon sx={{ mr: ".3rem", fontSize: "1.2rem" }} />
            {dateFormat(value.date, "mmmm dS, yyyy")}
          </Box>
          <Box sx={{ ml: "auto" }}>
            <LikesDislikes
              likes={value.likes}
              dislikes={value.dislikes}
              userSide={value.userSide}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Discussion;

// clean up paths...

export const getStaticPaths: GetStaticPaths = async () => {
  // query db for proposals here...
  const discussions = [
    {
      id: "spreadly",
      discussion_id: "1",
    },
    {
      id: "spreadly",
      discussion_id: "2",
    },
  ];

  return {
    paths: discussions.map((discussion) => {
      return {
        params: {
          id: discussion.id,
          discussion_id: discussion.discussion_id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daoData = {
    daoId: params.id,
  };
  return {
    props: {
      daoData,
    },
  };
};
