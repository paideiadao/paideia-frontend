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
import ProposalCard, {
  IProposalCard,
} from "@components/dao/proposals/ProposalCard";
import Chip from "@components/utilities/Chip";
import Link from "next/link";
import { useRouter } from "next/router";

interface IFilters {
  search: string;
  proposalStatus: string;
  sortBy: string;
  categories: string[];
}

const categories = [
  { icon: <AppsIcon sx={{ mr: ".2rem", fontSize: ".9rem" }} />, label: "All" },
  {
    icon: <AttachMoneyIcon sx={{ mr: ".2rem", fontSize: ".9rem" }} />,
    label: "Finance",
  },
  {
    icon: <StarIcon sx={{ mr: ".2rem", fontSize: ".9rem" }} />,
    label: "Category 2",
  },
  {
    icon: <StarIcon sx={{ mr: ".2rem", fontSize: ".9rem" }} />,
    label: "Category 3",
  },
  {
    icon: <StarIcon sx={{ mr: ".2rem", fontSize: ".9rem" }} />,
    label: "Category 4",
  },
];

interface IProposalListing {
  proposals: any;
  title: string;
}

const ProposalListing: React.FC<IProposalListing> = (props) => {
  const [filters, setFilters] = React.useState<IFilters>({
    search: "",
    proposalStatus: "",
    sortBy: "",
    categories: ["All"],
  });

  const router = useRouter();
  const { id } = router.query;

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
        <Header large title={props.title} />
        <Link href={`/dao/${id}/create`}>
          <Button variant="contained" sx={{ ml: "auto" }}>
            Create New <AddIcon sx={{ ml: ".5rem" }} />
          </Button>
        </Link>
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
          <Chip
            {...i}
            set={() => {
              let temp = [...filters.categories];
              let index = temp.indexOf(i.label);
              if (index > -1) {
                temp.splice(index, 1);
              } else {
                temp.push(i.label);
              }

              setFilters({
                ...filters,
                categories: temp,
              });
            }}
            c={c}
            key={"proposal-filter-chip-key-" + c}
            variant={
              filters.categories.indexOf(i.label) > -1
                ? "contained"
                : "outlined"
            }
          />
        ))}
      </Box>
      <Box
        sx={{ width: "100%", flexWrap: "wrap", display: "flex", mt: "1rem" }}
      >
        {props.proposals
          .sort((a, b) =>
            filters.sortBy === ""
              ? true
              : filters.sortBy === "Most Recent"
              ? new Date(a.date).getTime() - new Date(b.date).getTime()
              : true
          )
          .filter((i: any) => {
            return (
              (filters.proposalStatus === "" || filters.proposalStatus === "All"
                ? true
                : i.status === filters.proposalStatus) &&
              (filters.search === ""
                ? true
                : i.proposalName
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())) &&
              (filters.categories.indexOf("All") > -1
                ? true
                : filters.categories.indexOf(i.category) > -1)
            );
          })
          .map((i: any, c: number) => (
            <ProposalCard
              {...i}
              c={c}
              key={"proposal-card-key-" + c + i.id}
              width="25%"
            />
          ))}
      </Box>
    </Box>
  );
};

export default ProposalListing;
