import { Box } from "@mui/material";
import * as React from "react";
import ListIcon from "@mui/icons-material/List";
import VotingChoice from "../VotingChoice";
import { Header } from "@components/creation/utilities/HeaderComponents";
import { IProposalAction } from "@pages/dao/[id]/proposal/create";
import ProposalContext, {
  IProposalContext,
} from "@lib/dao/proposal/ProposalContext";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";

// fake data generator
const getItems = (count: any) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (
  list: Iterable<any> | ArrayLike<any>,
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle
) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: "100%",
});

const Options: React.FC = () => {
  const context = React.useContext<IProposalContext>(ProposalContext);
  const actions = context.api.value.actions;
  const [items, setItems] = React.useState<{ id: string; content: string }[]>(
    getItems(10)
  );

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const tempItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(tempItems);
  };

  return (
    <>
      <VotingChoice
        title="Provide options"
        subtitle="Provide multiple options for users to choose from. type of proposal only allows for a single action to be decided on."
        icon={<ListIcon />}
      />
      <Header
        title="What should happen in the proposal is approved?"
        small
        mb=".25rem"
        subtitle="Yes or no proposals allow you to create a chain of actions to be executed if the proposal passes. To add an action, simply click below, decide the type of action you want to create, and fill up the relevant information."
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.map((item: any, index: number) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* {actions.map((i: IProposalAction, c: number) => (
        <AddAction
          name={i.name}
          close={() => {
            let temp = [...actions];
            temp.splice(c, 1);
            context.api.setValue({
              ...context.api.value,
              actions: temp,
            });
          }}
          c={c}
          data={undefined}
        />
      ))} */}
    </>
  );
};

export default Options;
