import * as React from "react";
import {
  Header,
  LearnMore,
} from "@components/creation/utilities/HeaderComponents";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

const CreateHeader: React.FC<{ type?: string }> = (props) => {
  const router = useRouter();

  const { id } = router.query;
  return (
    <>
      <Box>
        <Link
          href={
            id === undefined ? "/dao/proposals/all" : `/dao/${id}/proposals/all`
          }
        >
          <Button sx={{ mb: "1rem" }}>
            <ArrowBackIcon sx={{ mr: ".3rem" }} />
            Back
          </Button>
        </Link>
        <Header
          title={
            props.type === undefined
              ? "Create a proposal or discussion"
              : "Create a " + props.type
          }
          large
          subtitle={`Follow the steps and create a proposal. Once a proposal has been created you won't be able to edit it, but you can always create as many addendums as you want to add extra information, even afterwards!`}
        />
      </Box>
      <LearnMore
        small
        title="What do you want to do?"
        tooltipText="Content Here"
        tooltipTitle="Title Here"
        tooltipLink="/here"
      />
    </>
  );
};

export default CreateHeader;
