import { GlobalContext, IGlobalContext } from '@lib/AppContext';
import { Box } from '@mui/material';
import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from "next";

const Profile: React.FC<{params: any}> = (props) => {
    const globalContext = React.useContext<IGlobalContext>(GlobalContext);
    
  return <Box>Profile here.... {props.params.id}</Box>;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [{ params: { id: "spreadly" } }, { params: { id: "ergopad" } }];
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const daoData = {params};
    return {
      props: {
        params,
      },
    };
  };

export default Profile;