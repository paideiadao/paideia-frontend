import { Box, Button, IconButton } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProposalCard from "../proposals/ProposalCard";

const ActiveProposal: React.FC = () => {
  return <>
      <Box
      sx={{ display: "flex", alignItems: "center", width: "100%", mt: "1rem" }}
    >
      <Subheader title="Active proposals" small bold />
      <Box sx={{ ml: "auto" }}>
        <Button sx={{ fontSize: ".8rem" }}>View All</Button>
        <IconButton
          size="small"
          disabled
          sx={{ backgroundColor: "fileInput.main" }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton size="small" sx={{ backgroundColor: "fileInput.main" }}>
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
    <Box sx={{display: 'flex', alignItems: 'center'}}>
        <ProposalCard proposalName='Proposal Name'/>
    </Box>
  </>

};

export default ActiveProposal;
