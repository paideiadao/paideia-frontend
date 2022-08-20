import { Box, Button, Chip, Skeleton } from "@mui/material";
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
import Layout from "@components/dao/Layout";
import { deviceWrapper } from "@components/utilities/Style";
import { getRandomImage } from "@components/utilities/images";
import useSWR from "swr";
import { attrOrUndefined, fetcher, getBaseUrl } from "@lib/utilities";

const Discussion: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);
  const router = useRouter();
  const { discussion_id, id } = router.query;

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

  const { data, error } = useSWR(
      discussion_id !== undefined ? `${getBaseUrl()}/proposals/${discussion_id}` : null,
      fetcher
  );
  if (error) {
    router.push('/404');
  }
 

  if (data !== undefined) {
    if (data.is_proposal) {
      router.push('/404');
    }
  }

  return data !== undefined && (
    <Layout width={deviceWrapper("92%", "97%")}>
      <Box sx={{ width: "100%", display: "flex", alignItems: "flex-start" }}>
        <Box sx={{ width: deviceWrapper("100%", "70%") }}>
          <Box
            sx={{
              width: deviceWrapper("calc(100% + 2rem)", "100%"),
              borderRadius: deviceWrapper("0", ".3rem"),
              position: "relative",
              backgroundImage: `url(${getRandomImage()})`,
              p: "1rem",
              maxHeight: "30rem",
              display: "flex",
              alignItems: "flex-start",
              minHeight: deviceWrapper("8rem", "12rem"),
              mt: deviceWrapper("-1rem", "0"),
              ml: deviceWrapper("-1rem", "0"),
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
              startIcon={<ArrowBackIcon />}
              onClick={router.back}
            >
              Back
            </Button>

            <Box
              sx={{
                ml: "auto",
                position: deviceWrapper("absolute", "relative"),
                bottom: deviceWrapper("1rem", "0"),
                left: deviceWrapper("1rem", "0"),
              }}
            >
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
              pb: "1rem",
              borderBottom: "1px solid",
              borderColor: "border.main",
            }}
          >
            <Box>
              <Header title={attrOrUndefined(data, 'name')} large/>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: ".8rem",
                  color: "text.secondary",
                }}
              >
                {
                  data === undefined ? <Skeleton animation='wave' height='1.2rem' width='3rem'/> : <>
                    <LanIcon
                    sx={{ opacity: ".8", fontSize: "1rem", mr: ".3rem" }}
                  />
                  ID: {data.id}
                  <Box
                    sx={{
                      alignItems: "center",
                      ml: ".5rem",
                      color: "text.secondary",
                      fontSize: ".8rem",
                      display: deviceWrapper("flex", "none"),
                    }}
                  >
                    <CalendarTodayIcon sx={{ mr: ".3rem", fontSize: "1rem" }} />
                    {dateFormat(attrOrUndefined(data, 'date'), "mmmm dS, yyyy")}
                  </Box>
                  </>
                }
                
              </Box>
            </Box>
            <Box
              sx={{
                ml: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  color: "primary.main",
                  alignItems: "center",
                  fontSize: deviceWrapper(".7rem", ""),
                  display: deviceWrapper("flex", "none"),
                }}
              >
                <CircleIcon
                  color="primary"
                  sx={{ mr: ".3rem", fontSize: ".8rem" }}
                />
                Discussion
              </Box>
              <Chip
                label={value.category}
                variant="outlined"
                icon={<LocalFireDepartmentIcon sx={{ fontSize: "1.3rem" }} />}
                sx={{
                  color: "primary.main",
                  borderColor: "primary.main",
                  fontSize: ".8rem",
                  display: deviceWrapper("flex", "none"),
                  mt: ".5rem",
                }}
              />

              <Button
                onClick={() =>
                  setValue({ ...value, followed: !value.followed })
                }
                sx={{
                  color: value.followed ? "error.light" : "text.secondary",
                  borderColor: value.followed
                    ? "error.light"
                    : "text.secondary",
                  ":hover": {
                    borderColor: "error.light",
                    color: "error.light",
                  },
                  display: deviceWrapper("none", "flex"),
                }}
                variant="outlined"
                size="small"
                startIcon={
                  value.followed ? <FavoriteIcon /> : <FavoriteBorderIcon />
                }
              >
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
            {data === undefined  ? <Skeleton animation='wave' height='1.2rem' width='100%'/> : <> 
            <Chip
              label={data.category}
              variant="outlined"
              icon={<LocalFireDepartmentIcon sx={{ fontSize: "1.4rem" }} />}
              sx={{
                color: "primary.main",
                borderColor: "primary.main",
                fontSize: "1rem",
                display: deviceWrapper("none", "flex"),
              }}
            />
            <Box
              sx={{
                color: "primary.main",
                ml: ".5rem",
                alignItems: "center",
                fontSize: ".9rem",
                display: deviceWrapper("none", "flex"),
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
                alignItems: "center",
                ml: ".5rem",
                color: "text.secondary",
                fontSize: ".9rem",
                display: deviceWrapper("none", "flex"),
              }}
            >
              <CalendarTodayIcon sx={{ mr: ".3rem", fontSize: "1.2rem" }} />
              {dateFormat(data.date, "mmmm dS, yyyy")}
            </Box>
            <Box
              sx={{
                ml: deviceWrapper("0", "auto"),
                display: "flex",
                mt: deviceWrapper(".5rem", "0"),
              }}
            >
              <Button
                onClick={() =>
                  setValue({ ...value, followed: !value.followed })
                }
                disabled={data === undefined}
                sx={{
                  color: value.followed ? "error.light" : "text.secondary",
                  borderColor: value.followed
                    ? "error.light"
                    : "text.secondary",
                  ":hover": {
                    borderColor: "error.light",
                    color: "error.light",
                  },
                  display: deviceWrapper("flex", "none"),
                  mr: "1rem",
                }}
                variant="outlined"
                size="small"
                startIcon={
                  value.followed ? <FavoriteIcon /> : <FavoriteBorderIcon />
                }
              >
                Follow{value.followed && "ed"}
              </Button>
              <LikesDislikes
                likes={data.likes.length}
                dislikes={data.dislikes.length}
                userSide={undefined}
              />
            </Box>
            
            </>}

          </Box>
          <Box
            sx={{
              width: "100%",
              mt: "1rem",
              display: deviceWrapper("block", "none"),
            }}
          >
            <Overview />
            <State />
          </Box>
          <TabContext value={tab}>
            <Box
              sx={{ borderBottom: 1, borderColor: "border.main", mt: ".5rem" }}
            >
              <TabList
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Discussion Info" value="1" />
                <Tab label="Comments | 7" value="2" />
                <Tab label="Referenced | 1" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ pl: 0, pr: 0 }}>
              <DiscussionInfo data={data}/>
            </TabPanel>
            <TabPanel value="2" sx={{ pl: 0, pr: 0 }}>
              <Comments data={attrOrUndefined(data, 'comments')}/>
            </TabPanel>
            <TabPanel value="3" sx={{ pl: 0, pr: 0 }}>
              <DiscussionReferences data={attrOrUndefined(data, 'references')}/>
            </TabPanel>
          </TabContext>
        </Box>
        <Box
          sx={{
            width: "30%",
            position: "sticky",
            top: deviceWrapper("0", "4.8rem"),
            display: deviceWrapper("none", "block"),
            ml: "1.5rem",
          }}
        >
          <Overview />
          <State />
        </Box>
      </Box>
    </Layout>
  );
};

export default Discussion;
