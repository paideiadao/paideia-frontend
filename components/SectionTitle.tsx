import { Grid, Typography } from '@mui/material'
import SquareIcon from '@mui/icons-material/Square'

export default function SectionTitle({title, marginBottom }) {
  return (
    <Grid container spacing={1} direction="row" alignItems="flex-start" sx={{ mb: marginBottom }}>
      <Grid item sx={{ fontSize: '13px' }}>
        <SquareIcon fontSize="inherit" />
      </Grid>
      <Grid item>
        <Typography sx={{ textTransform: 'uppercase', fontSize: '12px' }}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  )
}