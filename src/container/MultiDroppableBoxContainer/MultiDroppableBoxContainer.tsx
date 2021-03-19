import React from "react";

import { JiraItem } from "models";
import DroppableBox from "container/DroppableBox/DroppableBox";
import styles from "./MultiDroppableBoxContainer.module.css";

export interface MultiDroppableBoxContainerProps {
  jiraItems?: JiraItem[];
}

const MultiDroppableBoxContainer: React.FC<MultiDroppableBoxContainerProps> = ({ jiraItems }) => {
  return <div className={styles.MultiDroppableBoxContainer}>
    <DroppableBox jiraItems={jiraItems} columnId={1}></DroppableBox>
  </div>
};

export default MultiDroppableBoxContainer;
