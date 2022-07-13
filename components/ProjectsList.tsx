import React, { FC } from "react";
import {
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  InputAdornment,
  OutlinedInput,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useTheme } from "@mui/material/styles";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DarkTheme } from "@theme/theme";
import SearchIcon from '@mui/icons-material/Search';
import FilterOptions from '@components/FilterOptions'
import { SxProps } from '@mui/material';

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

            <Box sx={{ position: 'absolute', top: '-4px', right: '-6px', fontSize: '12px' }}>
              <Chip
                icon={<StarIcon sx={{ fontSize: 16 }} />}
                label={dao.category}
                size="small"
                sx={{
                  color: "#bbb",
                  background: "#111827",
                  fontSize: "14px",
                  mb: "24px",
                  border: "1px solid #999",
                }}
              />
            </Box>
          )}

          <Avatar
            src={dao?.image}
            sx={{
              width: 80,
              height: 80,
              mx: 'auto',
              mb: '12px',
              border: '1px solid #000',
              boxShadow: '0 0 0 2px #666',
            }}
            alt={dao.name}
          />
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
              fontSize: "14px",
              mb: "24px",
            }}
          >
            {dao.description}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            endIcon={<ArrowForwardIcon />}
            href={dao.link}
            sx={{ py: "2px", ml: "-6px" }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const SortBy: FC = () => {
  const [sortOption, setSortOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="sort-select-box-input">Sort By</InputLabel>
      <Select
        labelId="sort-select-box-label"
        id="sort-select-box"
        value={sortOption}
        label="Sort By"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'oldest'}>Oldest</MenuItem>
        <MenuItem value={'newest'}>Newest</MenuItem>
        <MenuItem value={'most members'}>Most Members</MenuItem>
        <MenuItem value={'least members'}>Least Members</MenuItem>
      </Select>
    </FormControl>
  )
}

interface ISearchBar {
  sx?: SxProps;
}

const SearchBar: FC<ISearchBar> = ({ sx }) => {
  return (
    <FormControl fullWidth variant="outlined" sx={sx}>
      <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
      <OutlinedInput
        id="outlined-adornment-search"
        endAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        label="Search"
      />
    </FormControl>
  )
}

interface IDaosProps {
  name: string;
  image?: string;
  description: string;
  link: string;
  category?: string;
}

interface IProjectListProps {
  daos: IDaosProps[];
  sx?: SxProps;
}

const ProjectList: FC<IProjectListProps> = ({ daos, sx }) => {

  const theme = useTheme();

  return (
    <Grid container sx={sx}>
      <Grid item lg={3} sx={{ pr: '24px', display: { xs: 'none', lg: 'block' } }}>
        <FilterOptions />
      </Grid>
      <Grid item lg={9} xs={12}>
        {useMediaQuery(theme.breakpoints.up("lg")) ? (
          <Grid container sx={{ mb: '32px' }} spacing={3}>
            <Grid item md={7}>
              <SearchBar />
            </Grid>
            <Grid item md={5}>
              <SortBy />
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            sx={{ mb: '32px' }}
            spacing={3}
            direction="row"
          >
            <Grid item xs>
              <SearchBar />
            </Grid>
            <Grid item xs="auto">
              <Button sx={{ height: '100%' }} variant="outlined" aria-label="filter">
                <FilterAltIcon />
              </Button>
            </Grid>
          </Grid>
        )}
        <Grid container spacing={4} columns={{ xs: 1, sm: 2, sm3: 3, md: 3, md2: 4, lg: 3 }}>
          {daos.map((dao, i) => (
            <Grid key={i} item xs={1} sx={{ textAlign: 'center' }}>
              <DaoCard dao={dao} />
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Grid>
  );
};

export default ProjectList;
