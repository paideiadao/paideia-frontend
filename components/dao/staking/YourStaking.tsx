import { Subheader } from '@components/creation/utilities/HeaderComponents';
import { Box } from '@mui/material';
import * as React from 'react';
import { InfoCard } from './GeneralInfo';

const YourStaking: React.FC = () => {
    const ticker = 'DTK'
    return <Box>
        <Subheader title="Your staking" />
        <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <InfoCard value='32,661' title={`${ticker} tokens staked`}/>
        <InfoCard value='2,567' title={`${ticker} tokens earned`}/>
        <InfoCard value={`≈3,661`} ticker={ `${ticker}`} title={`Tokens you will earn`} dropdown last/>
        </Box>

        

    </Box>
}

export default YourStaking;