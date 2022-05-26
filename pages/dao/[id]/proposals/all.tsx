import { Header } from "@components/creation/utilities/HeaderComponents";
import { Box, Button, Paper, InputBase } from "@mui/material";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AppsIcon from "@mui/icons-material/Apps";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ProposalCard from "@components/dao/proposals/ProposalCard";
import { proposals } from "@components/dao/dashboard/ActiveProposals";
interface IFilters {
  search: string;
  proposalStatus: string;
  sortBy: string;
  categories: string[];
}

const categories = [
  { icon: <AppsIcon sx={{ mr: ".4rem", fontSize: ".9rem" }} />, label: "All" },
  {
    icon: <AttachMoneyIcon sx={{ mr: ".4rem", fontSize: ".9rem" }} />,
    label: "Finance",
  },
  {
    icon: <StarIcon sx={{ mr: ".4rem", fontSize: ".9rem" }} />,
    label: "Category 2",
  },
  {
    icon: <StarIcon sx={{ mr: ".4rem", fontSize: ".9rem" }} />,
    label: "Category 3",
  },
  {
    icon: <StarIcon sx={{ mr: ".4rem", fontSize: ".9rem" }} />,
    label: "Category 4",
  },
];

const All: React.FC = () => {
  const [filters, setFilters] = React.useState<IFilters>({
    search: "",
    proposalStatus: "",
    sortBy: "",
    categories: ["All"],
  });

  return (
    <Box sx={{ width: "100%", p: "1.5rem" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          mb: "1rem",
        }}
      >
        <Header large title="All proposals" />
        <Button variant="contained" sx={{ ml: "auto" }}>
          Create New <AddIcon sx={{ ml: ".5rem" }} />
        </Button>
      </Box>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "backgroundColor.main",
            border: "1px solid",
            borderColor: "divider.main",
            p: ".65rem",
            borderRadius: "5rem",
            display: "flex",
            alignItems: "center",
            ":hover": {
              borderColor: "primary.main",
            },
            width: "50%",
          }}
        >
          <Box
            sx={{
              width: "5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchIcon sx={{ opacity: ".6", fontSize: "1.2rem" }} />
          </Box>
          <InputBase
            sx={{
              ml: ".5rem",
              fontSize: ".9rem",
              color: "text.main",
              width: "100%",
            }}
            placeholder="Search by proposal name, id, or user"
            value={filters.search}
            // @ts-ignore
            onChange={(event: any) =>
              setFilters({ ...filters, search: event.target.value })
            }
          />
        </Paper>
        <FormControl sx={{ width: "25%", ml: "1rem" }}>
          <InputLabel id="sort-by-select-label">Proposal status</InputLabel>
          <Select
            labelId="sort-by-select-label"
            id="sort-by-select"
            value={filters.proposalStatus}
            label="Proposal status"
            onChange={(event: SelectChangeEvent) =>
              setFilters({ ...filters, proposalStatus: event.target.value })
            }
          >
            <MenuItem value={"All"}>All</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "25%", ml: "1rem" }}>
          <InputLabel id="sort-by-select-label">Sort by</InputLabel>
          <Select
            labelId="sort-by-select-label"
            id="sort-by-select"
            value={filters.sortBy}
            label="Sort by"
            onChange={(event: SelectChangeEvent) =>
              setFilters({ ...filters, sortBy: event.target.value })
            }
          >
            <MenuItem value="Most Recent">Most recent</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: ".75rem" }}>
        {categories.map((i: any, c: number) => (
          <Button
            size="small"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: ".5rem",
              borderRadius: "5rem",
              ml: ".5rem",
              fontWeight: 500,
              pl: ".4rem",
              pr: ".4rem",
              minWidth: '1rem'
            }}
            onClick={() => {
              let temp = [...filters.categories];
              let index = temp.indexOf(i.label);
              if (index > -1) {
                temp.splice(index, 1);
              } else {
                temp.push(i.label)
              }

              setFilters({
                ...filters,
                categories: temp
              })
            }}
            key={`filter-chip-key-${c}`}
            variant={
              filters.categories.indexOf(i.label) > -1
                ? "contained"
                : "outlined"
            }
          >
            {i.icon}
            {i.label}
          </Button>
        ))}
      </Box>
      <Box sx={{width: '100%', flexWrap: 'wrap', display: 'flex', mt: '1rem'}}>
        {proposals.concat(proposals).concat(proposals).map((i: any, c: number) => (
            <ProposalCard {...i} c={c} key={"proposal-card-key-" + c} width='25%' />
          ))}
      </Box>
      
    </Box>
  );
};

export default All;
