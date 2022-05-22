import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import { Avatar, Box, Button, LinearProgress } from "@mui/material";
import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Header from "@components/dao/profile/Header";

const Profile: React.FC<{ params: any }> = (props) => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
      <Box sx={{ width: "70%", p: "1rem" }}>
        <Link href={`/dao/${props.params.id}`}>
          <Button variant="outlined">
            <ArrowBackIcon sx={{ ml: "-.5rem", mr: ".5rem" }} color="primary" />
            Back
          </Button>
        </Link>
        <Header />
        <Box>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider.main' }}>
          <TabList onChange={handleChange}>
            <Tab label="Proposals | 5" value="1" />
            <Tab label="Activity" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">Propsoals | 5</TabPanel>
        <TabPanel value="2">Activity</TabPanel>
      </TabContext>
        </Box>
      </Box>
      <Box sx={{ width: "30%" }}>Widgets here...</Box>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: "spreadly" } }, { params: { id: "ergopad" } }];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daoData = { params };
  return {
    props: {
      params,
    },
  };
};

export default Profile;
