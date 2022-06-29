import Activity, { IActivity } from "@components/dao/activity/Activity";
import { Box, Button } from "@mui/material";
import { activities } from "@pages/dao/[id]/activity";
import * as React from "react";
import { Subheader } from "@components/creation/utilities/HeaderComponents";

const Transactions: React.FC = () => {
  const transactionActivities = activities.filter(
    (i: IActivity) => i.category === "Transactions"
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Subheader title="Latest Transactions" />
        <Button variant="text" sx={{ ml: "auto" }}>
          View all transactions
        </Button>
      </Box>
      {transactionActivities
        .concat(transactionActivities)
        .concat(transactionActivities)
        .map((i: any, c: number) => {
          return <Activity i={i} c={c} />;
        })}
    </Box>
  );
};

export default Transactions;
