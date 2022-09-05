import * as React from "react";
import PropsosalListing from "@components/dao/proposals/ProposalListing";
import Layout from "@components/dao/Layout";
import useDidMountEffect from "@components/utilities/hooks";
import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher, getBaseUrl, getUserId } from "@lib/utilities";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";

const Following: React.FC = () => {
  const context = React.useContext<IGlobalContext>(GlobalContext);
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(
    `${getBaseUrl()}/proposals/by_dao_id/${id === undefined ? 1 : id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useDidMountEffect(() => {
    if (error) {
      context.api.showAlert("Error fetching proposals.", "error");
    }
  }, [error]);

  return (
    <Layout width={"96%"}>
      <PropsosalListing
        title="Following proposals"
        proposals={
          data === undefined
            ? undefined
            : data.filter((i: any) => i.followers.indexOf(getUserId()) > -1)
        }
      />
    </Layout>
  );
};

export default Following;
