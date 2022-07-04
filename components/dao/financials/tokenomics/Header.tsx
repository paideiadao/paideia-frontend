import { Header } from '@components/creation/utilities/HeaderComponents';
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';

const TokenomicsHeader: React.FC = () => {
    return <Box sx={{display: 'flex', width: '100%', alignItems: 'center'}}>
    <Header title='Tokenomics' large/>
    <Button endIcon={<EditIcon/>} sx={{ml: 'auto'}} variant='contained'>
      Edit Distribution
    </Button>
  </Box>
}

export default TokenomicsHeader;