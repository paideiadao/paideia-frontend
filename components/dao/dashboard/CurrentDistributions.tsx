import { Box, Button } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";
import dateFormat from "dateformat";
import CircleIcon from '@mui/icons-material/Circle';

let temp = new Date();
temp.setDate(temp.getDate() + 30);

const distributions = [
  {
    start: new Date(),
    end: temp,
    name: "Free tokens",
    type: "Airdrop",
    amount: "20,000",
    ticker: "PDA",
    status: "Active",
    id: "1",
  },
  {
    start: new Date(),
    end: temp,
    name: "Seed round 1",
    type: "Public Sale",
    amount: "800,000",
    ticker: "PDA",
    status: "Active",
    id: "2",
  },
  {
    start: new Date(),
    end: temp,
    name: "Seed round 2",
    type: "Public Sale",
    amount: "1,600,000",
    ticker: "PDA",
    status: "Soon",
    id: "3",
  }
];

const CurrentDistributions: React.FC = () => {
  return (
    <Box sx={{ width: "100%", mt: "1rem" }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Subheader title="Current Distributions" small bold />
        <Button sx={{ ml: "auto", fontSize: ".8rem" }}>View all</Button>
      </Box>
      {distributions.map((i: any) => {
        return (
          <Box
            sx={{
              width: "100%",
              backgroundColor: "fileInput.outer",
              mt: "1rem",
              mb: "1rem",
              borderRadius: ".3rem",
              border: "1px solid",
              borderColor: "divider.main",
              display: "flex",
              alignItems: "center",
              p: "1rem",
              fontSize: ".8rem",
              ':hover': {
                boxShadow: `0 0px 10px`,
                boxShadowColor: 'primary.text'

              }
            }}
          >
            <Box
              sx={{ width: "30%", display: "flex", flexDirection: "column" }}
            >
              {i.name}
              <Box sx={{ fontSize: ".7rem", color: "primary.lightText" }}>
                {dateFormat(i.start, "mmm d, yyyy")} /{" "}
                {dateFormat(i.end, "mmm d, yyyy")}
              </Box>
            </Box>
            <Box
              sx={{ width: "15%", display: "flex" }}
            >
              {
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid",
                    borderColor: "primary.main",
                    color: "primary.main",
                    p: ".3rem",
                    borderRadius: "1rem",
                    fontSize: ".7rem",
                    pt: ".1rem",
                    pb: ".1rem",
                  }}
                >
                  {i.type}
                </Box>
              }
            </Box>
            <Box
              sx={{ width: "20%", display: "flex", pl: '1rem' }}
            >
                {i.amount} {i.ticker}
            </Box>
            <Box
              sx={{ width: "20%", pl: '.5rem', display: "flex", alignItems: "center", color: i.status === 'Active' ? 'primary.lightSuccess' : 'tokenAlert.main' }}
            >
                <CircleIcon sx={{fontSize: '1rem', mr: '.3rem'}}/> {i.status}
            </Box>
            <Box
              sx={{ width: "15%", display: "flex", justifyContent: "center", borderLeft: '1px solid', borderLeftColor: 'divider.main' }}
            >
                <Button>
                    View
                </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CurrentDistributions;
