import Nav from '@components/layout/Nav';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

export default function Header () {
    return (
        <Grid container>
            <Grid item>
                Logo
            </Grid>
            <Grid item>
                <Nav />
            </Grid>
            <Grid item>
                <Button>
                    Connect Wallet
                </Button>
            </Grid>
        </Grid>
    )
}