import { Header } from "@components/creation/utilities/HeaderComponents";
import { Avatar, Badge, Box, Button, IconButton } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next/types";
import * as React from "react";
import Musk from "../../../../public/profile/musk-full.png";
import DeleteIcon from "@mui/icons-material/Delete";

import SwapVertIcon from '@mui/icons-material/SwapVert';

const ProfileEditImage: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        pt: "1rem",
        pb: ".5rem",
      }}
    >
      <Badge
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <IconButton
            sx={{
              ml: "-2rem",
              mt: "-2rem",
              p: ".1rem",
              backgroundColor: "favoriteBackground.main",
              ":hover": {
                backgroundColor: "favoriteBackground.main",
              },
            }}
          >
            <DeleteIcon color="error" sx={{ fontSize: "1.2rem" }} />
          </IconButton>
        }
      >
        <Avatar sx={{ height: "7rem", width: "7rem" }} src={Musk.src}></Avatar>
        
      </Badge>
      <Box sx={{ml:'1.5rem', width: '65%'}}>
      <Button variant='outlined'>
        Replace Image
        <SwapVertIcon sx={{ml: '.3rem'}}/>
    </Button>
    <Box sx={{fontSize: '.9rem', color: 'text.light'}}>
        Image needs to be at least 256px x 256px. JPEG and PNG files supported, less than 3mb.
    </Box>
      </Box>

      
    </Box>
  );
};

const Edit: React.FC<{ params: any }> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        pb: "1rem",
        pt: "1rem",
      }}
    >
      <Box sx={{ width: "70%" }}>
        <Header title="Edit profile" />
        <ProfileEditImage />
      </Box>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: "spreadly" } }, { params: { id: "ergopad" } }];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daoData = { params };
  return {
    props: {
      params,
    },
  };
};

export default Edit;
