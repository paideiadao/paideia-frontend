import React, { FC } from "react";
import AbstractProfile from "@components/dao/profile/AbstractProfile";
import { paths, props } from "@lib/DaoPaths";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import { fetcher } from "@lib/utilities";

// export const getStaticPaths = paths;
// export const getStaticProps = props;

const Profile: FC = () => {
  const appContext = React.useContext<IGlobalContext>(GlobalContext);
  const userData = appContext.api.daoUserData;

  return <AbstractProfile edit data={userData} proposals={[]} activity={[]} />;
};

export default Profile;
