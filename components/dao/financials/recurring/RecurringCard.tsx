import { Box, Button } from "@mui/material";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import dateFormat from "dateformat";

export interface IRecurringCard {
  username: string;
  address: string;
  proposalName: string;
  proposalUsername: string;
  paymentSig: number;
  paymentErg: number;
  id: number;
  frequency: string;
  startDate: Date;
}

const RecurringCard: React.FC<IRecurringCard> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: 1,
        borderColor: "divider.main",
        mb: "1rem",
        borderRadius: ".4rem",
        pt: '.5rem',
        pb: '.5rem',
        fontSize: {xs: '.8rem', sm: '.8rem', md: '.9rem', lg: '.9rem', xl: '1.1rem'},
        ':hover': {
          borderColor: 'primary.main'
        }
      }}
    >
      <Box sx={{ width: "35%", pl: '.5rem' }}>
        Paid to: {props.username}
        <Box sx={{ fontSize: ".8rem", color: "text.light" }}>
            {props.address.slice(0, 13) + "....." + props.address.slice(-13)}
        </Box>
      </Box>
      <Box sx={{ width: "18%" }}>
        {props.proposalName}
        <Box sx={{ fontSize: ".8rem", color: "text.light" }}>
          By: {props.proposalUsername}
        </Box>
      </Box>
      <Box sx={{ width: "20%" }}>
        {props.frequency}
        <Box sx={{ fontSize: ".8rem", color: "text.light" }}>
            {dateFormat(props.startDate, "mm/dd/yyyy HH:MM")}
        </Box>
      </Box>
      <Box sx={{ width: "12%" }}>
        ${props.paymentSig}
        <Box sx={{ fontSize: ".8rem", color: "text.light" }}>
          {props.paymentErg}
        </Box>
      </Box>
      <Button endIcon={<DeleteIcon />} variant="text" color="error" sx={{ml: 'auto', mr: '1rem'}} size='small'>
        Cancel
      </Button>
    </Box>
  );
};

export default RecurringCard;
