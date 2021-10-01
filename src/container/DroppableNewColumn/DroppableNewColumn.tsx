import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import styles from "./DroppableNewColumn.module.css";

import { createColumnWithItem } from "state";
import { ItemTypes, JiraItem } from "models";

export interface DroppableNewColumnProps {
  index: number;
}

const DroppableNewColumn: React.FC<DroppableNewColumnProps> = ({ index }) => {
  const dispatch = useDispatch();

  function createAndAdd(jiraItem: JiraItem): void {
    dispatch(createColumnWithItem({
      jiraItem,
      createIndexBefore: index
    }));
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.JIRA_ITEM,
    drop: createAndAdd,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [index]);

  return (
    <div ref={drop} className={styles.DroppableNewColumn}>
      {isOver && <div className={styles.overlay} />}
        Drop To Create A New Column
    </div>
  )
}

export default DroppableNewColumn;
