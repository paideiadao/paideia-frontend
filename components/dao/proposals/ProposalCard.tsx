import { Box, Badge } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";

export interface IProposalCard {
    proposalName: string
}

const ProposalCard: React.FC<IProposalCard> = (props) => {
    
  return <Badge badgeContent={1}>
    <Box sx={{backgroundColor: 'fileInput.outer', border: '1px solid', borderColor: 'divider.main', borderRadius: '.3rem', width: '14rem'}}>
        <Box sx={{borderBottom: '1px solid', borderBottomColor: 'divider.main', p: '.5rem'}}>
            <Subheader title={props.proposalName} small/>
            <Box sx={{display: 'flex', fontSize: '.8rem'}}>
                Status Here
                <Box sx={{ml: 'auto'}}>
                    Likes here...
                </Box>
            </Box>
            <Box>
                Content here
            </Box>
        </Box>
        <Box sx={{p: '.5rem'}}>
            Footer Here...
        </Box>
    </Box>
  </Badge>
;
};

export default ProposalCard;
