import React from "react";

import { JiraItem } from "models";
import DroppableBox from "container/DroppableBox/DroppableBox";
import styles from "./MultiDroppableBoxContainer.module.css";
import { Box } from "@material-ui/core";
import DroppableNewColumn from "container/DroppableNewColumn/DroppableNewColumn";

export interface MultiDroppableBoxContainerProps {
  jiraItems?: JiraItem[];
}

const MultiDroppableBoxContainer: React.FC<MultiDroppableBoxContainerProps> = ({ jiraItems }) => {
  return (
    <div className={styles.MultiDroppableBoxContainer}>
      <Box className={styles.newDropTarget}>
        <DroppableNewColumn></DroppableNewColumn>
      </Box>
      <Box flex={1}>
        <DroppableBox jiraItems={jiraItems} columnId={1}></DroppableBox>
      </Box>
      <Box className={styles.newDropTarget}>
        <DroppableNewColumn></DroppableNewColumn>
      </Box>
      <Box flex={1}>
        <DroppableBox jiraItems={jiraItems} columnId={1}></DroppableBox>
      </Box>
      <Box className={styles.newDropTarget}>
        <DroppableNewColumn></DroppableNewColumn>
      </Box>
    </div>
  );
};

export default MultiDroppableBoxContainer;
