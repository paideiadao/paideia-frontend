import {
  LearnMore,
  Subtitle,
} from "@components/creation/utilities/HeaderComponents";
import LabeledSwitch from "@components/creation/utilities/LabeledSwitch";
import {
  ConfigContext,
  IConfigContext,
} from "@lib/dao/dao-config/ConfigContext";
import * as React from "react";

const QuadraticVoting: React.FC = () => {
  const context = React.useContext<IConfigContext>(ConfigContext);
  const data = context.api.data.governance;
  return (
    <>
      <LearnMore
        title="Quadratic voting"
        tooltipTitle={"Title Here"}
        tooltipText={"Content Here"}
        tooltipLink="/"
      />
      <Subtitle subtitle="If active, voting power will not be determined only by the stakeholder investment, preventing whales from having too much influence over decisions." />
      <LabeledSwitch
        small
        onChange={() =>
          context.api.setData({
            ...context.api.data,
            governance: {
              ...data,
              quadraticVoting: !data.quadraticVoting,
            },
          })
        }
        value={data.quadraticVoting}
        title="Activate quadratic voting"
      />
    </>
  );
};

export default QuadraticVoting;
