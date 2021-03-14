import React from "react";
import styles from "./DroppableBox.module.css";

import { JiraItem } from "models";
import DraggableJiraItem from "container/DraggableJiraItem/DraggableJiraItem";

export interface DroppableBoxProps {
  jiraItems?: JiraItem[];
}

const DroppableBox: React.FC<DroppableBoxProps> = ({ jiraItems, children }) => (
  <div className={styles.DroppableBox}>
    <div>
      {(jiraItems || []).map((jiraItem: JiraItem, index: number) => {
        return <DraggableJiraItem key={index} jiraItem={jiraItem}></DraggableJiraItem>
      })}
    </div>
    {children}
  </div>
);

export default DroppableBox;
