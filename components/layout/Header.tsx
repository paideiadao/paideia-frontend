import Nav from '@components/layout/Nav';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

export default function Header () {
    return (
        <Container>
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
        </Container>
    )
}