import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import styles from "./DroppableBox.module.css";

import { moveJiraItemAction } from "state";
import { Column, ItemTypes, JiraItem } from "models";
import DraggableJiraItem from "container/DraggableJiraItem/DraggableJiraItem";

export interface DroppableBoxProps {
  column: Column | undefined;
  jiraItems?: JiraItem[];
}

const DroppableBox: React.FC<DroppableBoxProps> = ({ jiraItems, column, children }) => {
  const dispatch = useDispatch();

  function moveJiraItem(jiraItem: JiraItem): void {
    dispatch(moveJiraItemAction({
      ...jiraItem,
      columnId: column ? column.id : undefined
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
    <div ref={drop} className={styles.DroppableBox}>
      {isOver && <div className={styles.overlay} />}
      <div>
        {(jiraItems || []).map((jiraItem: JiraItem, index: number) => {
          return <DraggableJiraItem key={index} jiraItem={jiraItem}></DraggableJiraItem>
        })}
      </div>
      {children}
    </div>
  )
}

export default DroppableBox;
