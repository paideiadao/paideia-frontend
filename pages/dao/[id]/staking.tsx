import {
  CapsInfo,
  Header,
  Subheader,
} from "@components/creation/utilities/HeaderComponents";
import Layout from "@components/dao/Layout";
import GeneralInfo from "@components/dao/staking/GeneralInfo";
import YourStaking from "@components/dao/staking/YourStaking";
import { Avatar, Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import Coin from "../../../public/icons/coin.png";
import dateFormat from "dateformat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Musk from "../../../public/profile/musk-full.png";
import { activities } from "./activity";
import Activity, { IActivity } from "@components/dao/activity/Activity";
import { ThemeContext } from "@lib/ThemeContext";
import { LightTheme } from "@theme/theme";

const StakingActivity: React.FC = () => {
  const stakingActivities = activities.filter(
    (i: IActivity) => i.category === "Staking"
  );
  return (
    <Box>
      <Subheader title="Activity" />
      {stakingActivities
        .concat(stakingActivities)
        .concat(stakingActivities)
        .map((i: any, c: number) => {
          return <Activity i={i} c={c} />;
        })}
    </Box>
  );
};

const Staking: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout width="92%">
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Header title="Staking" large />
        <Box sx={{ ml: "auto" }}>
          <Link href={`/dao/${id}/staking/manage`}>
            <Button variant="contained" size="small">
              Manage Stake{" "}
              <img
                src={Coin.src}
                style={{
                  marginLeft: ".5rem",
                  filter:
                    themeContext.theme === LightTheme ? "invert(100%)" : "",
                }}
              />
            </Button>
          </Link>
        </Box>
      </Box>
      <GeneralInfo />
      <YourStaking />
      <StakingActivity />
    </Layout>
  );
};

export default Staking;
