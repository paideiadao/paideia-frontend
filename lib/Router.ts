import Edit from "@pages/dao/[id]/profile/edit";
import All from "@pages/dao/[id]/proposals/all";
import Following from "@pages/dao/[id]/proposals/following";
import Mine from "@pages/dao/[id]/proposals/mine";
import Past from "@pages/dao/[id]/proposals/past";
import EditNotifications from "@pages/dao/[id]/notifications/edit";
import Proposal from "@pages/dao/[id]/proposal/[proposal_id]";
import Discussion from "@pages/dao/[id]/discussion/[discussion_id]";
import Create from "@pages/dao/[id]/create";
import Vote from "@pages/dao/[id]/proposal/[proposal_id]/vote";
import CastVote from "@pages/dao/[id]/proposal/[proposal_id]/cast-vote";
import Member from "@pages/dao/[id]/member/[member_id]";
import CreateProposal from "@pages/dao/[id]/proposal/create";
import CreateDiscussion from "@pages/dao/[id]/discussion/create";
import Dashboard from "@components/dao/dashboard/Dashboard";
import Profile from "@pages/dao/[id]/profile";
import Notifications from "@pages/dao/[id]/notifications";
import Dao from "@pages/dao/[id]";
import Creation from "@pages/creation";
import Wallet from "@pages/dao/[id]/wallet";

export const isDao = (Component: any) => {
    return Component === Creation ||
    Component === Dao ||
    Component === Notifications ||
    Component === Profile ||
    Component === Dashboard ||
    Component === Edit ||
    Component === All ||
    Component === Following ||
    Component === Mine ||
    Component === EditNotifications ||
    Component === Proposal ||
    Component === Discussion ||
    Component === Create ||
    Component === Vote ||
    Component === CastVote ||
    Component === Member ||
    Component === CreateProposal ||
    Component === CreateDiscussion ||
    Component === Past ||
    Component === Wallet
  }