import { Header } from "@components/creation/utilities/HeaderComponents";
import { Box, Button, Paper, InputBase } from "@mui/material";
import * as React from "react";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IFilters {
  search: string;
  proposalStatus: string;
  sortBy: string;
}


const All: React.FC = () => {
  const [filters, setFilters] = React.useState<IFilters>({
    search: '',
    proposalStatus: '',
    sortBy: ''
  });

  return <Box sx={{width: '100%', p: '1.5rem'}}>

    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', mb: '1rem'}}>
    <Header large title='All proposals'/>
    <Button variant='contained' sx={{ml: 'auto'}}>
      Create New <AddIcon sx={{ml: '.5rem'}}/>
    </Button>
    </Box>
    <Box sx={{width: '100%', display: 'flex', alignItems: 'center'}}>
    <Paper elevation={0} sx={{backgroundColor: 'backgroundColor.main', border: '1px solid', borderColor: 'divider.main', p: '.65rem', borderRadius: '5rem', display: 'flex', alignItems: 'center', ':hover': {
      borderColor: 'primary.main'
    }, width: '50%'}}>
      <Box sx={{width: '5%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <SearchIcon sx={{opacity: '.6', fontSize: '1.2rem'}}/>
      </Box>
      <InputBase
        sx={{ml: '.5rem', fontSize: '.9rem', color: 'text.main', width: '100%'}}
        placeholder='Search by proposal name, id, or user'
        value={filters.search}
        onChange={(event: SelectChangeEvent) => setFilters({...filters, search: event.target.value}) }
      />

    </Paper>
    <FormControl sx={{width: '25%', ml: '1rem'}}>
        <InputLabel id="sort-by-select-label">Proposal status</InputLabel>
        <Select
          labelId="sort-by-select-label"
          id="sort-by-select"
          value={filters.proposalstatus}
          label="Proposal status"
          onChange={(event: SelectChangeEvent) => setFilters({...filters, proposalStatus: event.target.value}) }
          >
          <MenuItem value={'All'}>All</MenuItem>
          
        </Select>
      </FormControl>
      <FormControl sx={{width: '25%', ml: '1rem'}}>
        <InputLabel id="sort-by-select-label">Sort by</InputLabel>
        <Select
          labelId="sort-by-select-label"
          id="sort-by-select"
          value={filters.sortBy}
          label="Sort by"
          onChange={(event: SelectChangeEvent) => setFilters({...filters, sortBy: event.target.value}) }
          >
          <MenuItem value='Most Recent'>Most recent</MenuItem>

        </Select>
      </FormControl>
    </Box>
  </Box>;
};

export default All;
