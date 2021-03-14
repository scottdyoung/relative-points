import React from "react";
import styles from "./DroppableBox.module.css";

import { JiraItem } from "models/index";
import DraggableJiraItem from "container/DraggableJiraItem/DraggableJiraItem";

export interface DroppableBoxProps {
  jiraItems?: JiraItem[];
}

const DroppableBox: React.FC<DroppableBoxProps> = ({ jiraItems, children }) => (
  <div className={styles.DroppableBox}>
    <div>
      {(jiraItems || []).map((jiraItem: JiraItem) => {
        return <DraggableJiraItem jiraItem={jiraItem}></DraggableJiraItem>
      })}
    </div>
    {children}
  </div>
);

export default DroppableBox;
