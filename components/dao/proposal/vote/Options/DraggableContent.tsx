import { CapsInfo } from "@components/creation/utilities/HeaderComponents";
import { Delete } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { IProposalOption } from "@pages/dao/[id]/proposal/create";
import * as React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {
  DraggableStateSnapshot,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import ProposalContext, {
  IProposalContext,
} from "@lib/dao/proposal/ProposalContext";

interface IDraggableHeader {
  index: number;
  snapshot: DraggableStateSnapshot;
  items: IProposalOption[];
  item: IProposalOption;
  compact: boolean;
}

export const DraggableHeader: React.FC<IDraggableHeader> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {!props.item.default && <DragIndicatorIcon sx={{ opacity: ".75" }} />}
      <Box sx={{ ml: !props.item.default ? ".5rem" : 0 }}>
        <Box sx={{ fontSize: ".9rem" }}>
          {props.item.default ? "Default Option" : props.compact ? props.item.name : "Option " + (props.index + 1)}
        </Box>
        <Box
          sx={{
            fontSize: ".8rem",
            color: props.snapshot.isDragging
              ? "background.default"
              : "text.secondary",
          }}
        >
          {props.item.default
            ? "This option covers the scenario of a user not agreeing with any of the provided options and can't be deleted or re-arranged"
            : props.compact ? props.item.description : "Drag options to change their order, this is how they will appear in the proposal."}
        </Box>
      </Box>
      {!props.compact && (
        <IconButton
          sx={{ ml: "auto", color: "error.light" }}
          disabled={props.items.length === 2 || props.item.default}
        >
          <Delete />
        </IconButton>
      )}
    </Box>
  );
};

interface IDraggableCard {
  compact: boolean;
  item: IProposalOption;
  index: number;
  items: IProposalOption[];
}

const DraggableCard: React.FC<IDraggableCard> = (props) => {
  const context = React.useContext<IProposalContext>(ProposalContext);

  return (
      <>
        <Box
          sx={{
            mt: ".25rem",
            borderTop: 1,
            borderColor: "border.main",
            width: "calc(100% + 1.5rem)",
            ml: "-.75rem",
            px: ".5rem",
            py: ".25rem",
            height: props.compact ? '0rem' : '100%',
            display: props.compact ? 'none' : 'block',
          }}
        >
          <CapsInfo title="Information" />
          <TextField
            value={props.item.name}
            label="Option name"
            sx={{ width: "100%" }}
            InputProps={{ readOnly: props.item.default }}
            onChange={(e) => {
              let tempActions = context.api.value.actions[0];
              let tempItems = [...props.items];
              tempItems[props.index].name = e.target.value;
              tempActions.options = tempItems;
              context.api.setValue({
                ...context.api.value,
                actions: [tempActions],
              });
            }}
          />
          <TextField
            value={props.item.description}
            label="Option description"
            sx={{ width: "100%", mt: ".75rem" }}
            InputProps={{ readOnly: props.item.default }}
            onChange={(e) => {
              let tempActions = context.api.value.actions[0];
              let tempItems = [...props.items];
              tempItems[props.index].description = e.target.value;
              tempActions.options = tempItems;
              context.api.setValue({
                ...context.api.value,
                actions: [tempActions],
              });
            }}
          />
        </Box>
      </>
  );
};

export default DraggableCard;
