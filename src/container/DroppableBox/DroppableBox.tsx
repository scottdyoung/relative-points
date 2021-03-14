import React from "react";
import styles from "./DroppableBox.module.css";

import { JiraItem } from "models/index";

export interface DroppableBoxProps {
  jiraItems?: JiraItem[];
}

const DroppableBox: React.FC<DroppableBoxProps> = ({ jiraItems, children }) => (
  <div className={styles.DroppableBox}>
    DroppableBox Component
    {children}
  </div>
);

export default DroppableBox;
