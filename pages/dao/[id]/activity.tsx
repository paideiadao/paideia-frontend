import { Header } from "@components/creation/utilities/HeaderComponents";
import Layout from "@components/dao/Layout";
import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@components/utilities/Chip";
import AppsIcon from "@mui/icons-material/Apps";
import StarIcon from "@mui/icons-material/Star";
import Activity, { IActivity } from "@components/dao/activity/Activity";

const categories = [
  { icon: <AppsIcon sx={{ mr: ".2rem", fontSize: ".9rem" }} />, label: "All" },
  {
    icon: <StarIcon sx={{ mr: ".2rem", fontSize: ".9rem" }} />,
    label: "Comments",
  },
  {
    icon: <StarIcon sx={{ mr: ".2rem", fontSize: ".9rem" }} />,
    label: "Proposals",
  },
  {
    icon: <StarIcon sx={{ mr: ".2rem", fontSize: ".9rem" }} />,
    label: "Transactions",
  },
  {
    icon: <StarIcon sx={{ mr: ".2rem", fontSize: ".9rem" }} />,
    label: "Staking",
  },
];

const activities: IActivity[] = [
  { img: "", name: "", action: "", value: "", date: new Date() },
];

const Activities: React.FC = () => {
  const [filters, setFilters] = React.useState<{
    sortBy: string;
    search: string;
    categories: string[];
  }>({
    search: "",
    sortBy: "",
    categories: ["All"],
  });
  return (
    <Layout width="95%">
      <Header title="Activity log" large />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          mt: "1rem",
        }}
      >
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
            width: "75%",
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
            placeholder="Search by keyword or user"
            value={filters.search}
            // @ts-ignore
            onChange={(event: any) =>
              setFilters({ ...filters, search: event.target.value })
            }
          />
        </Paper>
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
            <MenuItem value={"Most Recent"}>Most Recent</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", mt: ".5rem" }}>
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
            key={"activity-filter-chip-key-" + c}
            variant={
              filters.categories.indexOf(i.label) > -1
                ? "contained"
                : "outlined"
            }
          />
        ))}
      </Box>
      {activities.map((i: any, c: number) => {
        return <Activity i={i} c={c} />;
      })}
    </Layout>
  );
};

export default Activities;
