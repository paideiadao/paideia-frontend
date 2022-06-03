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
import { Overview, State } from "@components/dao/discussion/Widgets";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DiscussionInfo from "@components/dao/discussion/DiscussionInfo";
import Comments from "@components/dao/discussion/Comments";
import DiscussionReferences from "@components/dao/discussion/DiscussionReferences";

const Discussion: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);
  const router = useRouter();
  console.log(router);
  const { discussion_id } = router.query;

  // replace comments with global state.... duh
  // major to do... needed for api
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

  const [tab, setTab] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <>
      <Box sx={{ p: "1.5rem", width: "100%", display: "flex" }}>
        <Box sx={{ width: "70%" }}>
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
                    color:
                      themeContext.theme === LightTheme ? "white" : "black",
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
                <LanIcon
                  sx={{ opacity: ".8", fontSize: "1rem", mr: ".3rem" }}
                />
                ID: {discussion_id}
              </Box>
            </Box>
            <Box sx={{ ml: "auto" }}>
              <Button
                onClick={() =>
                  setValue({ ...value, followed: !value.followed })
                }
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
          <TabContext value={tab}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider.main", mt: ".5rem" }}
            >
              <TabList onChange={handleChange}>
                <Tab label="Discussion Info" value="1" />
                <Tab label="Comments | 7" value="2" />
                <Tab label="Referenced | 1" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ pl: 0, pr: 0 }}>
              <DiscussionInfo />
            </TabPanel>
            <TabPanel value="2" sx={{ pl: 0, pr: 0 }}>
              <Comments />
            </TabPanel>
            <TabPanel value="3" sx={{ pl: 0, pr: 0 }}>
              <DiscussionReferences />
            </TabPanel>
          </TabContext>
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ml: "1.5rem",
          }}
        >
          <Overview />
          <State />
        </Box>
      </Box>
    </>
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
