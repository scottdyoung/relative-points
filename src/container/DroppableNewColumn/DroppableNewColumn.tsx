import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import styles from "./DroppableNewColumn.module.css";

import { moveJiraItemAction } from "state";
import { ItemTypes, JiraItem } from "models";

export interface DroppableNewColumnProps {
  columnId?: string | undefined;
}

const DroppableNewColumn: React.FC<DroppableNewColumnProps> = ({ columnId }) => {
  const dispatch = useDispatch();

  function moveJiraItem(jiraItem: JiraItem): void {
    dispatch(moveJiraItemAction({
      jiraItem,
      columnId
    }));
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.JIRA_ITEM,
    drop: moveJiraItem,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={styles.DroppableNewColumn}>
      {isOver && <div className={styles.overlay} />}
        Drop To Create A New Column
    </div>
  )
}

export default DroppableNewColumn;
