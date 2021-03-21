import React, { Dispatch } from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import styles from "./DroppableBox.module.css";

import { moveJiraItemAction, AppActionsTypes } from "state";
import { Column, ItemTypes, JiraItem } from "models";
import DraggableJiraItem from "container/DraggableJiraItem/DraggableJiraItem";
import { Box } from "@material-ui/core";

export interface DroppableBoxProps {
  column: Column | undefined;
  jiraItems?: JiraItem[];
}

const DroppableBox: React.FC<DroppableBoxProps> = ({ jiraItems, column, children }) => {
  const dispatch: Dispatch<AppActionsTypes> = useDispatch();

  function moveJiraItem(jiraItem: JiraItem): void {
    dispatch(moveJiraItemAction({
      jiraItem,
      columnId: column?.id
    }));
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.JIRA_ITEM,
    drop: (jiraItem: JiraItem) => {
      moveJiraItem(jiraItem);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={styles.DroppableBox}>
      {isOver && <div className={styles.overlay} />}
      <div>
        {(jiraItems || []).map((jiraItem: JiraItem, index: number) => {
          return (
            <Box key={index} marginLeft={2} marginRight={2} marginBottom={2}>
              <DraggableJiraItem jiraItem={jiraItem}></DraggableJiraItem>
            </Box>
          );
        })}
      </div>
      {children}
    </div>
  )
}

export default DroppableBox;
