import { Header } from '@components/creation/utilities/HeaderComponents';
import { Box, Button } from '@mui/material';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Termination: React.FC = () => {
    return <>
        <Header
            mb='.25rem'
            title='DAO termination'
            subtitle='If you wish, you can terminate the DAO. This will delete it forever and divides the treasury as decided. You can either send the treasury to whitelisted addresses, or divide equally between all the members of the DAO. Keep in mind that this process would go through a proposal.'
        />
        <Button endIcon={<DeleteIcon/>} color='error' variant='contained' size='small'>
            TERMINATE DAO 
        </Button>
    </>
}

export default Termination