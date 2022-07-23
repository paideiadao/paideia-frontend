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
import ProposalContext from "@lib/dao/proposal/ProposalContext";
import ProposalApi from "@lib/dao/proposal/ProposalApi";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import ProposalInfo from "@components/dao/proposal/ProposalInfo";
import Discussion from "@components/dao/proposal/Discussion";
import Addendums from "@components/dao/proposal/Addendums";
import VoteWidget from "@components/dao/proposal/VoteWidget";
import OptionsWidget from "@components/dao/proposal/OptionsWidget";
import Link from "next/link";

const Proposal: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);
  const router = useRouter();
  const { id, proposal_id } = router.query;
  const [value, setValue] = React.useState<IProposal>({
    name: "",
    image: {
      url: "https://picsum.photos/1200/300",
      file: undefined,
    },
    status: 'active',
    category: "Finance",
    content: "",
    votingSystem: "yes/no",
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
    addendums: [
      {
        id: 1,
        name: "Addendum 1",
        date: new Date(),
        content: "Addendum 1 content here...",
      },
    ],
  });

  const [tab, setTab] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const context = React.useContext<IGlobalContext>(GlobalContext);
  const api = new ProposalApi(
    context.api === undefined ? undefined : context.api.alert,
    context.api === undefined ? undefined : context.api.setAlert,
    value,
    setValue
  );

  React.useEffect(() => {
    if (context.api !== undefined) {
      api.alert = context.api.alert;
      api.setAlert = context.api.setAlert;
    }
  }, [context.api]);

  return (
    <ProposalContext.Provider value={{ api }}>
      <Layout width={deviceWrapper("92%", "97%")}>
        <Box sx={{ width: "100%", display: "flex", alignItems: "flex-start" }}>
          <Box sx={{ width: deviceWrapper("100%", "70%") }}>
            <Box
              sx={{
                width: deviceWrapper("calc(100% + 2rem)", "100%"),
                borderRadius: deviceWrapper("0", ".3rem"),
                position: "relative",
                backgroundImage: `url(${value.image.url})`,
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
                onClick={router.back}
                startIcon={<ArrowBackIcon />}
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
                pb: "1rem",
                borderBottom: "1px solid",
                borderColor: "border.main",
                alignItems: "center",
              }}
            >
              <Box>
                <Header title="Proposal name" large />
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
                    {dateFormat(value.date, "mmmm dS, yyyy")}
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  ml: "auto",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: deviceWrapper("column", "row"),
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
                <Link
                  href={
                    id === undefined
                      ? `/dao/proposal/${proposal_id}/vote`
                      : `/dao/${id}/proposal/${proposal_id}/vote`
                  }
                >
                  <Button
                    sx={{ ml: "1rem", display: deviceWrapper("none", "flex") }}
                    variant="contained"
                    size="small"
                    startIcon={<GavelIcon />}
                  >
                    Vote Now
                  </Button>
                </Link>
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
                  display: deviceWrapper("none", "flex"),
                }}
              />
              <Box
                sx={{
                  color: "primary.main",
                  ml: ".5rem",
                  display: deviceWrapper("none", "flex"),
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
                  display: deviceWrapper("flex", "none"),
                }}
                variant="outlined"
                size="small"
                startIcon={
                  value.followed ? <FavoriteIcon /> : <FavoriteBorderIcon />
                }
              >
                Follow{value.followed && "ed"}
              </Button>
              <Button
                sx={{ ml: ".5rem", display: deviceWrapper("flex", "none") }}
                variant="contained"
                size="small"
                startIcon={<GavelIcon />}
              >
                Vote Now
              </Button>
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
            <Box
              sx={{
                width: "100%",
                mt: "1rem",
                display: deviceWrapper("block", "none"),
              }}
            >
              <Overview proposal />
              {value.votingSystem === "yes/no" ? (
                <VoteWidget />
              ) : (
                <OptionsWidget />
              )}
            </Box>
            <TabContext value={tab}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "border.main",
                  mt: ".5rem",
                }}
              >
                <TabList
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Proposal Info" value="0" />

                  <Tab label="Discussion" value="1" />
                  <Tab label="Comments | 7" value="2" />
                  <Tab label="Referenced | 1" value="3" />
                  <Tab label="Addendum" value="4" />
                </TabList>
              </Box>
              <TabPanel value="0" sx={{ pl: 0, pr: 0 }}>
                <ProposalInfo />
              </TabPanel>
              <TabPanel value="1" sx={{ pl: 0, pr: 0 }}>
                <Discussion />
              </TabPanel>
              <TabPanel value="2" sx={{ pl: 0, pr: 0 }}>
                <Comments />
              </TabPanel>
              <TabPanel value="3" sx={{ pl: 0, pr: 0 }}>
                <DiscussionReferences />
              </TabPanel>
              <TabPanel value="4" sx={{ pl: 0, pr: 0 }}>
                <Addendums />
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
            <Overview proposal />
            {value.votingSystem === "yes/no" ? (
              <VoteWidget />
            ) : (
              <OptionsWidget />
            )}
          </Box>
        </Box>
      </Layout>
    </ProposalContext.Provider>
  );
};

export default Proposal;

// export const getStaticPaths = paths;
// export const getStaticProps = props;
