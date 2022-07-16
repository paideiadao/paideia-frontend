import { Header } from "@components/creation/utilities/HeaderComponents";
import BasicInformation from "@components/dao/dao-config/BasicInformation";
import Governance from "@components/dao/dao-config/Governance";
import Layout from "@components/dao/Layout";
import Divider from "@components/utilities/Divider";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import ConfigApi, { IConfigData } from "@lib/dao/dao-config/ConfigApi";
import { ConfigContext } from "@lib/dao/dao-config/ConfigContext";
import { Box } from "@mui/material";
import * as React from "react";

const DaoConfig: React.FC = () => {
  const [data, setData] = React.useState<IConfigData>({
    basicInformation: {
      daoName: "Paideia",
      daoUrl: "paideia.im/dao",
      shortDescription:
        "This is an example description for my example DAO called 'Paideia DAO Test'. Can you guess how many times I said example, without counting the last example?",
    },
    governance: {
      optimisticGovernance: false,
      quadraticVoting: false,
      timeToChallenge: 0,
      timeToChallengeUnits: "days",
      quorum: 4,
      voteDuration: 0,
      voteDurationUnits: "days",
      whitelist: [
        {
          alias: "",
          address: "",
          img: "",
        },
      ],
      amount: "",
      currency: "",
      supportNeeded: 50,
    },
  });

  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const api = new ConfigApi(
    globalContext.api === undefined ? undefined : globalContext.api.alert,
    globalContext.api === undefined ? undefined : globalContext.api.setAlert,
    data,
    setData
  );
  React.useEffect(() => {
    if (globalContext.api !== undefined) {
      api.alert = globalContext.api.alert;
      api.setAlert = globalContext.api.setAlert;
    }
  }, [globalContext.api]);
  return (
    <ConfigContext.Provider
      value={{
        api,
      }}
    >
      <Layout>
        <Header title="DAO Config" large />
        <BasicInformation />
        <Divider />
        <Governance />
      </Layout>
    </ConfigContext.Provider>
  );
};

export default DaoConfig;
