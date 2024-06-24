import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Card = styled.div<{isDragging:boolean}>`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.isDragging? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) => props.isDragging? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none"}
`;

interface IDraggableCard {
  toDo: string;
  index: number;
}
function DraggableCard({toDo, index}: IDraggableCard) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(provided, snapshot) => (
        <Card
            isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);