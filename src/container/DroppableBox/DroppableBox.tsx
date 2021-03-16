import React from "react";
import styles from "./DroppableBox.module.css";

import { ItemTypes, JiraItem } from "models";
import DraggableJiraItem from "container/DraggableJiraItem/DraggableJiraItem";
import { useDrop } from "react-dnd";

export interface DroppableBoxProps {
  jiraItems?: JiraItem[];
  x?: number;
  y?: number;
}

const DroppableBox: React.FC<DroppableBoxProps> = ({ jiraItems, x, y, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.JIRA_ITEM,
    drop: () => console.log("HERE"),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [x, y]);

  return (
    <div ref={drop} className={styles.DroppableBox}>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
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
