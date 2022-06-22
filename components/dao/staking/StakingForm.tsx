import * as React from 'react';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { CapsInfo, Subtitle } from '@components/creation/utilities/HeaderComponents';
import WalletSelector from '@components/creation/governance/WalletSelector';
import { useWallet } from '@components/wallet/WalletContext';
import { IWallet } from '@lib/creation/CreationApi';

const StakingForm: React.FC = () => {
    const { wallet } = useWallet();
    const [holder, setHolder] = React.useState<IWallet>({
        alias: 'Alone Musk',
        address: wallet,
        img: '',
    })
    console.log(wallet, holder)
    const ticker = 'DTK'
    const [value, setValue] = React.useState<number>(100)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((parseFloat(event.target.value)));
      };
    return <Box>
        <CapsInfo title='Staking Form' mb='.5rem'/>
        <Subtitle subtitle='Description here.....'/>
        <Box sx={{mt: '1rem'}}/>
        <WalletSelector
            id="staking-wallet-input"
            data={{
                alias: 'Alone Musk',
                address: wallet,
                img: '',
            }}
            number={1}
            canDelete
            set={(j: any) => {
                setHolder(j)
            }}
        />
        <Box sx={{display: 'flex', alignItems: 'center', mt: '1rem'}}>
            <TextField
            label="Amount of tokens to stake"
            sx={{width: '45%' }}
            size='small'
            value={value}
            type='number'
            onChange={handleChange}
            InputProps={{
                endAdornment: <InputAdornment position="end">{ticker}</InputAdornment>,
            }}
            />
            <Button variant='text' size='small' sx={{ml: '.5rem'}} onClick={() => setValue(124421)}>
                Max
            </Button>
        </Box>
        <Box sx={{width: '100%', display: 'flex', alignItems: 'center', mt: '2rem'}}>
            <Button variant='outlined' sx={{width: '50%', mr: '1rem'}}>
                Cancel
            </Button>
            <Button variant='contained' sx={{width: '50%'}}>
                Stake
            </Button>
        </Box>
        
    </Box>
}

export default StakingForm