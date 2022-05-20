import { Box } from '@mui/material';
import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from "next";

const Notifications: React.FC = () => {
    return <Box>
        Notifications here....
    </Box>
}

// routing for the dao urls should be dynamic... the routing for the dao pages is contained here.

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [{ params: { id: "spreadly" } }, { params: { id: "ergopad" } }];
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const daoData = {};
    console.log('aparms', params)
    return {
      props: {
        daoData,
      },
    };
  };
  

export default Notifications