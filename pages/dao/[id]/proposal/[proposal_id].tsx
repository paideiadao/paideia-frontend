import { Box, Button, Chip, Tab } from "@mui/material";
import * as React from "react";
import { paths, props } from "@lib/ProposalPaths";
import Layout from "@components/dao/Layout";
import { deviceWrapper } from "@components/utilities/Style";
import Comments from "@components/dao/discussion/Comments";
import DiscussionInfo from "@components/dao/discussion/DiscussionInfo";
import DiscussionReferences from "@components/dao/discussion/DiscussionReferences";
import { Overview, State } from "@components/dao/discussion/Widgets";
import { LikesDislikes } from "@components/dao/proposals/ProposalCard";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { LightTheme } from "@theme/theme";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DiscussionPlaceholder from "@public/dao/discussion-banner-placeholder.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ThemeContext } from "@lib/ThemeContext";
import { IProposal } from "./create";
import ProposalPlaceholder from "@public/dao/discussion-banner-placeholder.png";
import { Header } from "@components/creation/utilities/HeaderComponents";
import LanIcon from "@mui/icons-material/Lan";
import { useRouter } from "next/router";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircleIcon from "@mui/icons-material/Circle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import dateFormat from "dateformat";
import GavelIcon from "@mui/icons-material/Gavel";

const Proposal: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);
  const router = useRouter();
  const { proposal_id } = router.query;
  const [value, setValue] = React.useState<IProposal>({
    name: "",
    image: {
      url: ProposalPlaceholder.src,
      file: undefined,
    },
    category: "",
    content: "",
    votingSystem: "unselected",
    references: [],
    actions: [
      {
        name: undefined,
        data: undefined,
      },
    ],
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
    <Layout width={deviceWrapper("92%", "97%")}>
      <Box sx={{ width: "100%", display: "flex" }}>
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
              startIcon={<ArrowBackIcon />}
            >
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
                  color: "text.secondary",
                }}
              >
                <LanIcon
                  sx={{ opacity: ".8", fontSize: "1rem", mr: ".3rem" }}
                />
                ID: {proposal_id}
              </Box>
            </Box>
            <Box sx={{ ml: "auto" }}>
              <Button
                onClick={() =>
                  setValue({ ...value, followed: !value.followed })
                }
                sx={{
                  color: value.followed ? "red" : "text.secondary",
                  borderColor: value.followed ? "red" : "text.secondary",
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
              <Button
                sx={{ ml: "1rem" }}
                variant="contained"
                startIcon={<GavelIcon />}
              >
                Vote Now
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
                color: "text.secondary",
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
              sx={{ borderBottom: 1, borderColor: "border.main", mt: ".5rem" }}
            >
              <TabList onChange={handleChange}>
                <Tab label="Proposal Info" value="0" />

                <Tab label="Discussion" value="1" />
                <Tab label="Comments | 7" value="2" />
                <Tab label="Referenced | 1" value="3" />
                <Tab label="Addendum" value="4" />
              </TabList>
            </Box>
            <TabPanel value="0" sx={{ pl: 0, pr: 0 }}>
              Proposal info here...
            </TabPanel>
            <TabPanel value="1" sx={{ pl: 0, pr: 0 }}>
              <DiscussionInfo />
            </TabPanel>
            <TabPanel value="2" sx={{ pl: 0, pr: 0 }}>
              <Comments />
            </TabPanel>
            <TabPanel value="3" sx={{ pl: 0, pr: 0 }}>
              <DiscussionReferences />
            </TabPanel>
            <TabPanel value="4" sx={{ pl: 0, pr: 0 }}>
              Addendum here...
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
    </Layout>
  );
};

export default Proposal;

// export const getStaticPaths = paths;
// export const getStaticProps = props;
