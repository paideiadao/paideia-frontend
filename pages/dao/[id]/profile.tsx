import { GlobalContext, IGlobalContext } from '@lib/AppContext';
import { Avatar, Box, Button, LinearProgress } from '@mui/material';
import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from "next";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'
import Musk from "../../../public/profile/musk-full.png";
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';

const Profile: React.FC<{params: any}> = (props) => {
    const globalContext = React.useContext<IGlobalContext>(GlobalContext);
    
  return <Box sx={{display: 'flex', alignItems: 'flex-start', width: '100%'}}>
  <Box sx={{width: '70%', p: '1rem'}}>
      <Link href={`/dao/${props.params.id}`}>
      <Button variant='outlined'>
        <ArrowBackIcon sx={{ml: '-.5rem', mr: '.5rem'}} color='primary'/>
        Back
    </Button>
      </Link>
      <Box sx={{ ml: "1rem", display: "flex", alignItems: "flex-start", mt: '.5rem', }}>
          <Avatar sx={{ mr: ".5rem", width: '4.5rem', height: '4.5rem'}}>
            <img src={Musk.src} />
          </Avatar>
          <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: '70%'
            }}
          >
            <Box sx={{ fontSize: "1.1rem" }}>Alone Musk</Box>
            <Box sx={{ color: "text.light", fontSize: ".7rem", display: 'flex', alignItems: 'center', width: '100%', mt: '-.5rem' }}>
              Lvl 7 | Philosopher
              <Box sx={{ml: 'auto', mr: '.5rem'}}>
                    <Button>
                        <InfoIcon color='primary' sx={{mr: '.5rem'}}/>
                        Learn More
                    </Button>
              </Box>
            </Box>
            <Box sx={{width: '100%', height: '.5rem'}}>
             <LinearProgress variant="determinate" value={15} />
            </Box>
            <Box sx={{width: '100%', display: 'flex'}}>
                <Box sx={{ml: 'auto', color: 'text.light', fontSize: '.7rem'}}>
                    {350 - 10} PTS till next lvl
                </Box>
            </Box>
          </Box>
          <Box sx={{display: 'flex', height: '100%', alignItems: 'center', ml: '1rem'}}>
          <Button variant='contained'>
          <EditIcon sx={{mr: '.5rem', ml: '-.25rem'}}/>
              Edit Profile
          </Button>
              </Box>
          </Box>


        </Box>
  </Box>
  <Box sx={{width: '30%'}}>
            Skeep this way
  </Box>
  </Box>;
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