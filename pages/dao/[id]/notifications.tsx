import { Avatar, Box, Button, Chip } from "@mui/material";
import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { CapsInfo } from "@components/creation/utilities/HeaderComponents";
import ImagePlaceholder from "../../../public/images/image-placeholder.png";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircleIcon from '@mui/icons-material/Circle';

let temp = new Date(), temp1 = new Date(), temp2 = new Date(), temp3 = new Date(), temp4 = new Date();
// should display hours
temp1.setTime(temp.getTime() - (6 * 60 * 60 * 1000));
// should display days
temp2.setDate(temp.getDate() - 5);
// should display months
temp3.setDate(temp.getDate() -100);
temp4.setTime(temp.getTime() - (.5 * 60 * 60 * 1000));

const newNotifications = [
  {
    img: ImagePlaceholder.src,
    username: "<User name>",
    action: "action description for",
    proposalname: "<Proposal name>",
    date: temp4, // less than 1 hour, show minutes. less than 1 day, show hours. less than 1 month show days. less than 1 year, show years.
    isread: 1
  },
  {
    img: ImagePlaceholder.src,
    username: "<User name>",
    action: "action description for",
    proposalname: "<Proposal name>",
    date: temp1, // less than 1 hour, show minutes. less than 1 day, show hours. less than 1 month show days. less than 1 year, show years.
    isread: 0
  },
  {
    img: ImagePlaceholder.src,
    username: "<User name>",
    action: "action description for",
    proposalname: "<Proposal name>",
    date: temp2, // less than 1 hour, show minutes. less than 1 day, show hours. less than 1 month show days. less than 1 year, show years.
    isread: 0
  },
  {
    img: ImagePlaceholder.src,
    username: "<User name>",
    action: "action description for",
    proposalname: "<Proposal name>",
    date: temp3, // less than 1 hour, show minutes. less than 1 day, show hours. less than 1 month show days. less than 1 year, show years.
    isread: 1
  },
  
];

const getNotificationCountdown = (date: Date) => {
  let _temp = new Date()
  console.log(date, _temp)
  let hours = Math.abs(_temp.getTime() - date.getTime()) / 36e5;
  console.log(hours)
  if (hours < 1) {
    return (hours * 60).toFixed(0)  + ' minute' + ((hours * 60).toFixed(0) === '1' ? '' : 's')
  } else if (hours <= 24) {
    return (hours).toFixed(0)  + ' hour' + ((hours).toFixed(0) === '1' ? '' : 's')
  } else if (hours <= (24 * 30)) {
    return (hours / 24).toFixed(0)  + ' day' + ((hours / 24).toFixed(0) === '1' ? '' : 's')
  } else {
    return (hours / (24 * 30)).toFixed(0)  + ' month' + ((hours / (24 / 30)).toFixed(0) === '1' ? '' : 's')
  }
}

const Notifications: React.FC<{ params: any }> = (props) => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const [view, setView] = React.useState<string>("All");
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        pt: "1.5rem",
        pb: "1rem",
      }}
    >
      <Box sx={{ width: "65%" }}>
        <Link href={`/dao/${props.params.id}`}>
          <Button variant="outlined">
            <ArrowBackIcon sx={{ ml: "-.5rem", mr: ".5rem" }} color="primary" />
            Back
          </Button>
        </Link>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            mt: "1rem",
            fontSize: "1.6rem",
            alignItems: "center",
          }}
        >
          Notifications (4 new)
          <Button sx={{ ml: "auto" }} variant="contained">
            Notification Settings{" "}
            <SettingsIcon sx={{ ml: ".5rem", mr: "0rem" }} />
          </Button>
        </Box>
        <Box sx={{ mt: ".5rem" }}>
          <Chip
            label="All"
            icon={<AppsIcon />}
            sx={{ cursor: "pointer" }}
            color={view === "All" ? "primary" : undefined}
            onClick={() => setView("All")}
            variant={view === "All" ? "filled" : "outlined"}
          />
          <Chip
            label="Unread"
            icon={<AppsIcon sx={{ fill: "white" }} />}
            sx={{ ml: ".5rem", cursor: "pointer" }}
            color={view === "Unread" ? "primary" : undefined}
            onClick={() => setView("Unread")}
            variant={view === "Unread" ? "filled" : "outlined"}
          />
        </Box>
        <Box
          sx={{
            mt: "1rem",
            borderBottom: "1px solid",
            borderBottomColor: "divider.main",
            pb: "1rem",
          }}
        >
          <CapsInfo title="New" />
          {newNotifications.map((i: any, c: number) => {
            return (
              <Box
                sx={{
                  mt: '.75rem', mb: '.75rem',
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  p: "1rem",
                  backgroundColor: i.isread === 0 ? 'fileInput.main' : "fileInput.outer",
                  borderRadius: ".3rem",
                  border: "1px solid",
                  borderColor: "divider.main",
                  cursor: 'pointer'
                }}
              >

                <Avatar src={i.img} sx={{width: '4rem', height: '4rem'}}>
                </Avatar>
                <Box sx={{width: '70%', ml: '1rem', fontSize: '.9rem'}}>
                    <Box>
                      {i.username + ' '}
                      <Box sx={{display: 'inline', color: 'text.light'}}>
                      {i.action}
                      </Box>
                      {' ' + i.proposalname}
                    </Box>
                    <Box sx={{fontSize: '.7rem', color: 'text.light', display: 'flex', alignItems: 'center'}}>
                      <AccessTimeIcon sx={{fontSize: '1rem', mr: '.2rem'}}/> {getNotificationCountdown(i.date)} ago
                    </Box>
                </Box>
                {i.isread === 0 && <Box sx={{ml: 'auto'}}>
                    <CircleIcon color='primary' sx={{fontSize: '1rem'}}/>
                  </Box>}

              </Box>
            );
          })}
        </Box>
        <Box sx={{ mt: "1rem" }}>
          <CapsInfo title="Old" />
        </Box>
      </Box>
    </Box>
  );
};

// routing for the dao urls should be dynamic... the routing for the dao pages is contained here.

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

export default Notifications;
