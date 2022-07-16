import Layout from "@components/dao/Layout";
import { Box, Button } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CapsInfo,
  Header,
} from "@components/creation/utilities/HeaderComponents";
import { ITokenHolder } from "@lib/creation/CreationApi";
import LabeledSwitch from "@components/creation/utilities/LabeledSwitch";
import { deviceWrapper } from "@components/utilities/Style";
import MultiTokenHolders from "@components/utilities/MultiTokenHolders";

const Send: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = React.useState<ITokenHolder[]>([
    {
      alias: "",
      address: "",
      img: "",
      balance: 0,
      percentage: 0,
    },
  ]);
  const [recurring, setRecurring] = React.useState<boolean>(false);
  const treasuryAmount = 50000;
  return (
    <Layout width={deviceWrapper("92%", "60%")}>
      <Link
        href={
          id === undefined
            ? "/dao/financials/treasury"
            : `/dao/${id}/financials/treasury`
        }
      >
        <Button variant="outlined" size="small" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Link>
      <Box sx={{ mt: "1rem" }} />
      <Header title="Send funds from treasury" large />
      <Box sx={{ mt: "1.5rem" }} />
      <CapsInfo title="Sign-up form" mb="0.25rem" />
      <Box sx={{ color: "text.secondary", fontSize: ".9rem", mb: ".5rem" }}>
        In order to participate on this airdrop, please complete the form below.
      </Box>
      <MultiTokenHolders
        tokenHolders={data}
        treasuryAmount={treasuryAmount}
        set={(newTokenHolders: ITokenHolder[]) => setData(newTokenHolders)}
      />

      <LabeledSwitch
        title="Set as recurring"
        subtitle="Set and schedule this payment to be done for a determined amount of time, in any frequency you wish."
        value={recurring}
        onChange={() => setRecurring(!recurring)}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          variant="outlined"
          sx={{ width: "50%", mr: "1rem" }}
          size="small"
        >
          Cancel
        </Button>
        <Button variant="contained" sx={{ width: "50%" }} size="small">
          Send
        </Button>
      </Box>
    </Layout>
  );
};

export default Send;
