import React, { FC } from "react";
import {
  Grid,
  Typography,
  Box,
  Icon,
  Button,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DarkTheme, LightTheme } from "@theme/theme";


const secondaryTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: DarkTheme.palette.text.primary,
  textTransform: "uppercase",
  fontFamily: '"Space Grotesk", sans-serif',
};

interface IDaosProps {
  name: string;
  image?: string;
  description: string;
  link: string;
  category?: string;
}

interface IProjectListProps {
  daos: IDaosProps[];
  sx?: object;
}

const DaoCard = ({ dao }) => {
  return (
    <Box
      sx={{
        height: "100%",
      }}
      className="border-grad"
    >
      <Grid
        container
        sx={{ height: "100%", p: "24px" }}
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          {dao?.category && (
            <Box sx={{ position: 'absolute', top: '-12px', right: '-12px', fontSize: '12px' }}>
              <Chip
                icon={<StarIcon sx={{ fontSize: 16 }} />}
                label={dao.category}
                size="small"
                sx={{
                  color: '#bbb',
                  background: "#111827",
                  fontSize: "14px",
                  mb: "24px",
                  border: '1px solid #999',
                }}
              />
            </Box>
          )}

          <Typography sx={{
            fontWeight: "700",
            lineHeight: "42px",
            mb: "24px",
            color: "#fff",
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: "34px",
            letterSpacing: '0.225543px'
          }}
          >
            {dao.name}
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              mb: '24px',
            }}
          >
            {dao.description}
          </Typography>
        </Grid>
        <Grid item>
          <Button endIcon={<ArrowForwardIcon />} href={dao.link} sx={{ py: '2px', ml: '-6px' }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const ProjectList: FC<IProjectListProps> = ({ daos, sx }) => {
  return (
    <Grid container sx={sx}>
      <Grid item md={3}>

      </Grid>
      <Grid item md={9}>
        {daos.map((dao, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <DaoCard dao={dao} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectList;
