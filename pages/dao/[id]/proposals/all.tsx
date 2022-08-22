import * as React from "react";
import { proposals } from "@components/dao/dashboard/ActiveProposals";
import PropsosalListing from "@components/dao/proposals/ProposalListing";
import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher, getBaseUrl } from "@lib/utilities";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";

const All: React.FC = () => {
  const context = React.useContext<IGlobalContext>(GlobalContext)
  const router = useRouter();
  const {id} = router.query;
  const { data, error } = useSWR(
    `${getBaseUrl()}/proposals/by_dao_id/${id === undefined ? 1 : id}`,
    fetcher
  );
  if (error) {
    context.api.showAlert("Error fetching proposals.", "error");
  }
  console.log(data)
  return (
    <PropsosalListing
      title="All proposals"
      proposals={proposals.concat(proposals).concat(proposals)}
    />
  );
};

export default All;
