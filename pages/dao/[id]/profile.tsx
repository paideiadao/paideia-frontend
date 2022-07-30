import React, { FC } from "react";
import AbstractProfile from "@components/dao/profile/AbstractProfile";
import { paths, props } from "@lib/DaoPaths";

// export const getStaticPaths = paths;
// export const getStaticProps = props;

const Profile: FC = () => {
  return <AbstractProfile edit />;
};

export default Profile;
