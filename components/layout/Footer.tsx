import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { DarkTheme, LightTheme } from "@theme/theme";

export default function Footer () {
    return (
        <Box sx={{ background: LightTheme.palette.primary.dark }}>
        <Container>
            <Grid container>
                <Grid item>
                    Footer
                </Grid>
                <Grid item>
                    Footer
                </Grid>
                <Grid item>
                    Footer
                </Grid>
                <Grid item>
                    Footer
                </Grid>
                <Grid item>
                    Footer
                </Grid>
            </Grid>
        </Container>
        </Box>
    )
}