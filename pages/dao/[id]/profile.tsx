import AbstractProfile from "@components/dao/profile/AbstractProfile";
import * as React from "react";
import { paths, props } from "@lib/DaoPaths";

export const getStaticPaths = paths;
export const getStaticProps = props;

const Profile: React.FC = () => {
  return <AbstractProfile edit />;
};

export default Profile;
