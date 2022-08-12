import { DaoSelector } from "@components/dao/nav/DaoBio";
import { InfoCard } from "@components/dao/staking/GeneralInfo";
import StakingForm from "@components/dao/staking/StakingForm";
import WithdrawForm from "@components/dao/staking/WithdrawForm";
import PageHeader from "@components/PageHeader";
import SectionHeading from "@components/SectionHeading";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab, Typography } from "@mui/material";
import * as React from "react";
import { StakingActivity } from "./dao/[id]/staking";
import GeneralInfo from "@components/dao/staking/GeneralInfo";
import YourStaking from "@components/dao/staking/YourStaking";

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
  const ticker = "DTK";

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
      <Container>
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
          <DaoSelector redirect={false} />
          <GeneralInfo/>
          <YourStaking/>
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
              <StakingForm />
            </TabPanel>
            <TabPanel value="Withdraw Tokens">
              <WithdrawForm />
            </TabPanel>
            <TabPanel value="Redeem Tokens"></TabPanel>
            <TabPanel value="Activity">
              <StakingActivity />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
