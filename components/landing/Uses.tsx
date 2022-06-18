import { Grid, Container, Box, Typography, Button, Card, CardContent } from "@mui/material";
import SectionTitle from "@components/SectionTitle";
import Blockquote from "@components/Blockquote";
import CardSlider from "@components/CardSlider";
import { DarkTheme } from "@theme/theme";

export default function Uses() {
  return (
    <Container sx={{ px: "24px" }}>
      <Grid container sx={{ py: "120px" }}>
        <Grid item md={5}>
          <Grid container spacing={3}>
            <Grid item>
              <SectionTitle>
                Uses
              </SectionTitle>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: "48px",
                  fontWeight: "400",
                  lineHeight: "116.7%",
                  color: DarkTheme.palette.text.primary,
                  textTransform: "uppercase",
                  fontFamily: '"Viga", sans-serif',
                }}
              >
                What can you do?&lt;
              </Typography>
            </Grid>
            <Grid item>
              <Blockquote small>
                There are a lot of ways to use a DAO. Here are just a few examples of the types of organizations that could launch a DAO on Paideia.
              </Blockquote>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={7}></Grid>
      </Grid>
        <CardSlider>
          <Card>
            <CardContent>
            Hello
            </CardContent>
            
          </Card>
        </CardSlider>
    </Container>
  )
}