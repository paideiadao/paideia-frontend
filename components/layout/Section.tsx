import Grid from '@mui/material/Grid'

export default function Section({ children }: { children: React.ReactNode; }) {
    return (
        <Grid container>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    )
}