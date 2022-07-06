import { Button, Link } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackLink: React.FC = () => {
  const router = useRouter();
  return (
    <Button variant="outlined" onClick={() => router.back()}>
      <ArrowBackIcon sx={{ mr: ".5rem", fontSize: "1rem" }} />
      Back
    </Button>
  );
};

export default BackLink;
