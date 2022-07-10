import React, { FC } from "react";
import { 
  Grid, 
  Typography, 
  Box,
  List,
  ListItem,
  Divider
} from "@mui/material";

interface IFilterProps {
  
}

const FilterOptions: FC<IFilterProps> = ({

}) => {
  return (
    <Box
          sx={{
            border: '1px solid #666',
            p: '12px',
          }}
        >
          <Typography sx={{ color: '#bbb' }}>
            Filters
          </Typography>
          <Divider sx={{ background: '#999', mt: '12px' }} />
          <Typography>Categories: </Typography>
          <List>
            <ListItem>
              Hello
            </ListItem>
            <ListItem>
              Hello
            </ListItem>
            <ListItem>
              Hello
            </ListItem>
          </List>
        </Box>
  );
};

export default FilterOptions;
