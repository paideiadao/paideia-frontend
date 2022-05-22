import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import { Avatar, Box, Button, Chip, LinearProgress } from "@mui/material";
import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Header from "@components/dao/profile/Header";
import { CapsInfo } from "@components/creation/utilities/HeaderComponents";
import PaideiaTokenSymbol from "../../../public/images/paideia-token-symbol.png";
import StarIcon from '@mui/icons-material/Star';

const Profile: React.FC<{ params: any }> = (props) => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
      <Box sx={{ width: "70%", p: "1rem" }}>
        <Link href={`/dao/${props.params.id}`}>
          <Button variant="outlined">
            <ArrowBackIcon sx={{ ml: "-.5rem", mr: ".5rem" }} color="primary" />
            Back
          </Button>
        </Link>
        <Header />
        <Box>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider.main' }}>
          <TabList onChange={handleChange}>
            <Tab label="Proposals | 5" value="1" />
            <Tab label="Activity" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{pl: 0, pr: 0}}>Propsoals | 5</TabPanel>
        <TabPanel value="2"sx={{pl: 0, pr: 0}}>Activity</TabPanel>
      </TabContext>
        </Box>
      </Box>
      <Box sx={{ width: "30%" }}>
        <Box sx={{backgroundColor: 'fileInput.outer', m:'1rem', borderRadius: '.3rem', border: '1px solid', borderColor: 'divider.main'}}>
            <Box sx={{p: '.5rem', width: '100%'}}>
              <CapsInfo title="About User" small />
              <Box sx={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                  <Box sx={{fontSize: '.8rem', color: 'text.light', textAlign: 'center', borderRight: '1px solid', borderRightColor: 'divider.main', pr: '1rem'}}>
                    Followers
                    <Box sx={{color: 'text.main', fontSize: '1.4rem'}}>
                      107
                    </Box>
                  </Box>
                  <Box sx={{fontSize: '.8rem', pl: '1rem', color: 'text.light', textAlign: 'center', borderRight: '1px solid', borderRightColor: 'divider.main', pr: '1rem'}}>
                    Created
                    <Box sx={{color: 'text.main', fontSize: '1.4rem'}}>
                      13
                    </Box>
                  </Box>
                  <Box sx={{fontSize: '.8rem', pl: '1rem', color: 'text.light', textAlign: 'center'}}>
                    Approved
                    <Box sx={{color: 'text.main', fontSize: '1.4rem'}}>
                      7
                    </Box>
                  </Box>
              </Box>
              <Box>
                Short description here...
              </Box>
              <Box sx={{display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', width: '100%', mt: '.5rem'}}>
                  <Chip
                    label='Proposal maker'
                    color='primary'
                    variant='outlined'
                    sx={{m: '.2rem'}}
                  />
                  <Chip
                    label='Voter'
                    color='primary'
                    sx={{m: '.2rem'}}
                    variant='outlined'
                  />
                  <Chip
                    label='V.I.P.'
                    sx={{m: '.2rem'}}
                    color='primary'
                    variant='outlined'
                  />
                  <Chip
                    sx={{m: '.2rem'}}
                    label='Yes person'
                    color='primary'
                    variant='outlined'
                  />
              </Box>
            </Box>
            <Box sx={{borderTop: '1px solid', borderTopColor: 'divider.main', pt: '.5rem', pl: '.5rem', pb: '.5rem', pr: '.5rem'}}>
              <CapsInfo title="Wallet Information" small />
                <Chip
                  icon={<AccountBalanceWalletIcon/>}
                  label='9ff37p9rmnKHSj99nRcEvvEoHcY15vNyHUELoNedU4yEPyujVSn'
                  color='primary'
                />
                <Chip
                  avatar={<Avatar alt="PTK" src={PaideiaTokenSymbol.src} />}
                  label='56,759 DTK'
                  sx={{mt: '.5rem'}}
                />
            </Box>
        </Box>

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

export default Profile;
