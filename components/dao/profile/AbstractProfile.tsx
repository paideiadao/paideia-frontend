import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import { Avatar, Box, Button, Chip, LinearProgress } from "@mui/material";
import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProfileHeader from "@components/dao/profile/Header";
import { CapsInfo } from "@components/creation/utilities/HeaderComponents";
import Proposals from "@components/dao/profile/Proposals";
import Activity from "@components/dao/profile/Activity";
import { useRouter } from "next/router";
import Layout from "../Layout";
import { deviceWrapper } from "@components/utilities/Style";
import AboutUser from "./AboutUser";
import BackLink from "@components/utilities/BackLink";

const AbstractProfile: React.FC<{ edit?: boolean; followed?: boolean }> = (
  props
) => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const router = useRouter();

  const { id } = router.query;

  return (
    <Layout width="98%">
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          flexWrap: deviceWrapper("wrap", "nowrap"),
        }}
      >
        <Box
          sx={{
            width: deviceWrapper("100%", "70%"),
            p: ".75rem",
            pt: deviceWrapper("0", ".5rem"),
          }}
        >
          <BackLink />
          <Box sx={{ mt: "1rem" }} />
          <ProfileHeader edit={props.edit} followed={props.followed} />
          <Box sx={{ width: "100%", display: deviceWrapper("block", "none") }}>
            <AboutUser />
          </Box>
          <Box>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "border.main" }}>
                <TabList onChange={handleChange}>
                  <Tab label="Proposals | 5" value="1" />
                  <Tab label="Activity" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ pl: 0, pr: 0 }}>
                <Proposals />
              </TabPanel>
              <TabPanel value="2" sx={{ pl: 0, pr: 0 }}>
                <Activity />
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
        <Box sx={{ width: "30%", display: deviceWrapper("none", "block") }}>
          <AboutUser />
        </Box>
      </Box>
    </Layout>
  );
};

export default AbstractProfile;
