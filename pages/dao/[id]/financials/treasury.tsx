import {
  CapsInfo,
  Header,
} from "@components/creation/utilities/HeaderComponents";
import Layout from "@components/dao/Layout";
import { Box, Button } from "@mui/material";
import * as React from "react";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useRouter } from "next/router";
import Link from "next/link";
import Funds from "@components/dao/financials/treasury/Funds";
import Chart from "@components/dao/financials/treasury/Chart";
import Transactions from "@components/dao/financials/treasury/Transactions";

const TreasuryHeader: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box sx={{ width: "100%", alignItems: "center", display: "flex" }}>
      <Header title="Treasury" large />
      <Link
        href={
          id === undefined
            ? "/dao/financials/treasury/send"
            : `/dao/${id}/financials/treasury/send`
        }
      >
        <Button variant="contained" sx={{ ml: "auto" }}>
          Send Funds
          <PaymentsIcon sx={{ ml: ".5rem" }} />
        </Button>
      </Link>
    </Box>
  );
};

const ValueLabel: React.FC<{
  label: string;
  value: string;
  small?: boolean;
}> = (props) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{ fontSize: props.small ? ".6rem" : ".8rem", color: "text.light" }}
      >
        {props.label}
      </Box>
      <Box
        sx={{ fontSize: props.small ? ".9rem" : "1.3rem", color: "text.main" }}
      >
        {props.value}
      </Box>
    </Box>
  );
};

const TreasuryInfo: React.FC = () => {
  const dao = "Paideia";
  const router = useRouter();
  const { id } = router.query;

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider.main",
        backgroundColor: "fileInput.outer",
        p: ".5rem",
        ml: "1.5rem",
        borderRadius: ".3rem",
      }}
    >
      <CapsInfo title={`${dao} Tokens`} />
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box
          sx={{
            width: "50%",
            borderRight: "1px solid",
            borderColor: "divider.main",
          }}
        >
          <ValueLabel label="Ticker" value="PTK" />
        </Box>
        <Box sx={{ width: "50%" }}>
          <ValueLabel label="Price" value="$0.1342" />
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", mt: "1rem" }}>
        <Box
          sx={{
            width: "50%",
            borderRight: "1px solid",
            borderColor: "divider.main",
          }}
        >
          <ValueLabel label="High (24hrs)" value="$0.2199" small />
        </Box>
        <Box sx={{ width: "50%" }}>
          <ValueLabel label="Low (24hrs)" value="$0.0119" small />
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", mt: "1rem" }}>
        <Box
          sx={{
            width: "50%",
            borderRight: "1px solid",
            borderColor: "divider.main",
          }}
        >
          <ValueLabel label="Market Cap" value="$10,467,400" small />
        </Box>
        <Box sx={{ width: "50%" }}>
          <ValueLabel label="Circulating Supply" value="11,759,754" small />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: "1rem",
        }}
      >
        <Link href={id === undefined ? "/dao/financials/token" : `/dao/${id}`}>
          <Button variant="text">Learn More</Button>
        </Link>
      </Box>
    </Box>
  );
};

const Treasury: React.FC = () => {
  return (
    <Layout width="96%">
      <Box sx={{ width: "100%", display: "flex", alignItems: "flex-start" }}>
        <Box sx={{ width: "72%" }}>
          <TreasuryHeader />
          <Funds />
          <Chart />
          <Transactions />
        </Box>
        <Box sx={{ width: "28%" }}>
          <TreasuryInfo />
        </Box>
      </Box>
    </Layout>
  );
};

export default Treasury;
