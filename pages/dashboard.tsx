import PageHeader from "@components/PageHeader";
import SectionHeading from "@components/SectionHeading";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab, Typography } from "@mui/material";
import * as React from "react";

type DashboardTabs =
  | "Stake Tokens"
  | "Withdraw Tokens"
  | "Redeem Tokens"
  | "Activity";

const Dashboard: React.FC = () => {
  const [value, setValue] = React.useState<DashboardTabs>("Stake Tokens");
  const handleChange = (
    event: React.SyntheticEvent,
    newValue: DashboardTabs
  ) => {
    setValue(newValue);
  };
  return (
    <>
      <PageHeader
        bgUrl="/backgrounds/education-bg.png"
        mobileBgUrl="/backgrounds/education-small.png"
        sectionTitle="Dashboard"
        titleLineOne="My"
        titleLineTwo="Dashboard"
        subTitleOne="A Web 3 DAO Management"
        subTitleTwo="Software Suite "
        imgPositionSx={{
          width: "2340px",
          height: "2134px",
          left: "calc(50% + 600px)",
        }}
        mobileSx={{
          width: "600px",
          height: "1574px",
        }}
      />
      <Container sx={{ pb: "30rem" }}>
        <Box sx={{ maxWidth: { sm: "90%", md: "760px" }, mx: "auto" }}>
          <SectionHeading
            category="Manage"
            title="Manage Dao Participation"
            sx={{ mb: "32px" }}
          />
          <Typography variant="p">
            Use this section to explore all the different DAOs that your
            connected wallet is a member of. Manage your stake and redeem tokens
            all in one place.
          </Typography>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="Stake Tokens" value="Stake Tokens" />
                <Tab label="Withdraw Tokens" value="Withdraw Tokens" />
                <Tab label="Redeem Tokens" value="Redeem Tokens" />
                <Tab label="Activity" value="Activity" />
              </TabList>
            </Box>
            <TabPanel value="Stake Tokens">

            </TabPanel>
            <TabPanel value="Withdraw Tokens">

            </TabPanel>
            <TabPanel value="Redeem Tokens">

            </TabPanel>
            <TabPanel value="Activity">
                
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
