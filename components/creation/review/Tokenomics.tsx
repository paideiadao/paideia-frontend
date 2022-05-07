import * as React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Accordion, Box, Button, Typography } from "@mui/material";
import {
  ActiveInactive,
  ImageWrapper,
  Value,
  WalletListing,
} from "./ReviewDrawer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import { bytesToSize, percentage } from "../../../lib/creation/Utilities";
import { ITokenHolder, ITokenomics } from "../../../lib/creation/Api";
import { data } from "jquery";

const DistributionListing: React.FC<{ data: ITokenomics }> = (props) => {
  let tokenHolderBalance = props.data.tokenHolders
    .map((i: ITokenHolder) => i.balance)
    .reduce((sum, current) => sum + current, 0);

  let tokenomics = [
    {
      title: "Token holders",
      subtitle: `${props.data.tokenHolders.length} holders`,
      balance: tokenHolderBalance,
      tokenTicker: props.data.tokenTicker,
      percentage: percentage(
        tokenHolderBalance / props.data.tokenAmount,
        2,
        false
      ),
    },
    {
      title: "Unassigned tokens",
      subtitle: `Treasury`,
      tokenTicker: props.data.tokenTicker,
      balance: props.data.tokenRemaining,
      percentage: percentage(
        props.data.tokenRemaining / props.data.tokenAmount,
        2,
        false
      ),
    },
  ];

  return (
    <Box sx={{ width: "65%" }}>
      {tokenomics.map((i: any, c: number) => {
        return (
          <Box
            key={`distribution-id-${c}`}
            sx={{
              borderRadius: ".2rem",
              border: ".1rem solid",
              borderColor: "divider.main",
              mb: ".5rem",
              p: ".5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <Box sx={{ fontSize: ".9rem", color: "primary.text" }}>
                {i.title}
              </Box>
              <Box sx={{ fontSize: ".8rem", color: "primary.lightText" }}>
                {i.subtitle}
              </Box>
            </Box>
            <Box sx={{ ml: "auto", textAlign: "right" }}>
              <Box sx={{ fontSize: ".9rem", color: "primary.text" }}>
                {i.balance + " "}
                {i.tokenTicker}
              </Box>
              <Box sx={{ fontSize: ".8rem", color: "primary.lightText" }}>
                {i.percentage}%
              </Box>
            </Box>
          </Box>
        );
      })}
      {props.data.distributions.map((i: any, c: number) => {
        return (
          <Box
            key={`distribution-id-${c + 2}`}
            sx={{
              borderRadius: ".2rem",
              border: ".1rem solid",
              borderColor: "divider.main",
              mb: ".5rem",
              p: ".5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <Box sx={{ fontSize: ".9rem", color: "primary.text" }}>
                {i.distributionName}
              </Box>
              <Box sx={{ fontSize: ".8rem", color: "primary.lightText" }}>
                {i.id}
              </Box>
            </Box>
            <Box sx={{ ml: "auto", textAlign: "right" }}>
              <Box sx={{ fontSize: ".9rem", color: "primary.text" }}>
                {i.balance + " "}
                {props.data.tokenTicker}
              </Box>
              <Box sx={{ fontSize: ".8rem", color: "primary.lightText" }}>
                {i.percentage}%
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const Tokenomics: React.FC<{
  data: any;
  expanded: string | boolean;
  handleChange: Function;
}> = (props) => {
  let data = props.data;
  return (
    <Accordion
      elevation={0}
      disableGutters
      sx={{
        backgroundColor: "fileInput.outer",
        borderBottom: "1px solid",
        borderBottomColor: "divider.main",
      }}
      expanded={props.expanded === "tokenomics"}
      onChange={props.handleChange("tokenomics")}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="tokenomics-header">
        <CheckCircleIcon color="success" sx={{ mr: "1rem" }} />
        <Typography sx={{ width: "100%", flexShrink: 0, fontSize: "1.1rem" }}>
          3. Tokenomics
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ width: "100%" }}>
          <Value
            labelWidth="35%"
            title="Token creation type"
            value={
              data.tokenomics.type === "create"
                ? "Create a new token"
                : "Us an existing one"
            }
          />
          <Value
            labelWidth="35%"
            title="Token name"
            value={data.tokenomics.tokenName}
          />
          <Value
            labelWidth="35%"
            title="Token ticker"
            value={data.tokenomics.tokenTicker}
          />
          <Value
            labelWidth="35%"
            title="Token amount"
            value={data.tokenomics.tokenAmount}
          />
          <Value
            labelWidth="35%"
            title="Token symbol"
            component={
              data.tokenomics.tokenImage.file != null && (
                <ImageWrapper
                  size={bytesToSize(data.tokenomics.tokenImage.file.size)}
                  img={data.tokenomics.tokenImage.url}
                  name={data.tokenomics.tokenImage.file.name}
                />
              )
            }
          />
          <Value
            labelWidth="35%"
            title="Token holder addresses"
            component={<WalletListing data={data.tokenomics.tokenHolders} />}
          />
          <Value
            labelWidth="35%"
            title="Tokenomics"
            component={<DistributionListing data={data.tokenomics} />}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: ".5rem",
          }}
        >
          <Button>
            Edit Section
            <EditIcon sx={{ ml: ".5rem" }} />
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Tokenomics;
