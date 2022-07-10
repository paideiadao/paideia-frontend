import {
  CapsInfo,
  Header,
} from "@components/creation/utilities/HeaderComponents";
import Chip from "@components/utilities/Chip";
import { Box, Button, IconButton } from "@mui/material";
import * as React from "react";
import { categories, IFilters } from "./ProposalListing";
import CloseIcon from "@mui/icons-material/Close";

interface IMobileFilters {
  filters: IFilters;
  set: (val: IFilters) => void;
  close: () => void;
}

const MobileFilters: React.FC<IMobileFilters> = (props) => {
  const [filters, setFilters] = React.useState<IFilters>(props.filters);
  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      <Box
        sx={{
          height: "5rem",
          backgroundColor: "primary.main",
          display: "flex",
          alignItems: "flex-end",
          color: "backgroundColor.main",
          pl: ".5rem",
          pb: ".5rem",
        }}
      >
        <Header title="Filters" small />
        <IconButton
          sx={{ ml: "auto", color: "black" }}
          size="small"
          onClick={props.close}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ width: "100%", mt: ".5rem", ml: ".5rem" }}>
        <CapsInfo title="Categories" />
        <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {categories.map((i: any, c: number) => (
            <Chip
              {...i}
              set={() => {
                let temp = [...filters.categories];
                let allIndex = temp.indexOf("All");
                let index = temp.indexOf(i.label);
                if (index > -1) {
                  temp.splice(index, 1);
                } else {
                  if (i.label === "All") {
                    temp = ["All"];
                  } else {
                    if (i.label === "All") {
                      temp = ["All"];
                    } else if (i.label !== "All" && allIndex > -1) {
                      temp.splice(allIndex, 1);
                      temp.push(i.label);
                    } else {
                      temp.push(i.label);
                    }
                  }
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
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          display: "flex",
          alignItems: "center",
          p: ".5rem",
        }}
      >
        <Button
          sx={{ width: "50%", mr: "1rem" }}
          size="small"
          variant="outlined"
          onClick={props.close}
        >
          Cancel
        </Button>
        <Button sx={{ width: "50%" }} size="small" variant="contained">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default MobileFilters;
