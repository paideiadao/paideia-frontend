import { CapsInfo } from "@components/creation/utilities/HeaderComponents";
import { Avatar, Box, Button } from "@mui/material";
import * as React from "react";
import Musk from "@public/profile/musk-full.png";

export const Overview: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "fileInput.outer",
        border: "1px solid",
        borderColor: "border.main",
        borderRadius: ".3rem",
        width: "100%",
        mb: "1rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid",
          borderBottomColor: "border.main",
          p: ".5rem",
        }}
      >
        <CapsInfo title="Discussion by" />
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Avatar sx={{ width: "2.5rem", height: "2.5rem" }}>
            <img src={Musk.src} />
          </Avatar>
          <Box sx={{ ml: "1rem" }}>
            <Box sx={{ fontSize: "1rem" }}>Alone Musk</Box>
            <Box sx={{ fontSize: ".8rem", color: "text.light" }}>
              Level 7 | Philosopher
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            mt: "1rem",
            mb: "1rem",
          }}
        >
          <Box
            sx={{
              fontSize: ".8rem",
              color: "text.light",
              textAlign: "center",
              borderRight: "1px solid",
              borderRightColor: "border.main",
              pr: "1rem",
            }}
          >
            Followers
            <Box sx={{ color: "text.main", fontSize: "1.4rem" }}>107</Box>
          </Box>
          <Box
            sx={{
              fontSize: ".8rem",
              pl: "1rem",
              color: "text.light",
              textAlign: "center",
              borderRight: "1px solid",
              borderRightColor: "border.main",
              pr: "1rem",
            }}
          >
            Created
            <Box sx={{ color: "text.main", fontSize: "1.4rem" }}>13</Box>
          </Box>
          <Box
            sx={{
              fontSize: ".8rem",
              pl: "1rem",
              color: "text.light",
              textAlign: "center",
            }}
          >
            Approved
            <Box sx={{ color: "text.main", fontSize: "1.4rem" }}>7</Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: ".25rem",
          pb: ".25rem",
        }}
      >
        <Button>View Profile</Button>
      </Box>
    </Box>
  );
};

export const State: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "fileInput.outer",
        border: "1px solid",
        borderColor: "border.main",
        borderRadius: ".3rem",
        width: "100%",
        mb: "1rem",
        p: ".5rem",
      }}
    >
      <CapsInfo title="this proposal is in the discussion state" />
      <Box sx={{ mt: "-.5rem", fontSize: ".9rem", color: "text.light" }}>
        Get feedback from the other members about an idea you have before
        commiting to a full proposal. Discussions can easily be upgraded to
        proposals at any time.
      </Box>
    </Box>
  );
};
