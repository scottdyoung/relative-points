import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectColumns } from "state";
import { Box } from "@material-ui/core";

import { Column, JiraItem } from "models";

import DroppableBox from "container/DroppableBox/DroppableBox";
import DroppableNewColumn from "container/DroppableNewColumn/DroppableNewColumn";
import styles from "./MultiDroppableBoxContainer.module.css";

export interface MultiDroppableBoxContainerProps {
  jiraItems?: JiraItem[];
}

const MultiDroppableBoxContainer: React.FC<MultiDroppableBoxContainerProps> = ({ jiraItems }) => {
  const columns: Column[] = useSelector(selectColumns);
  return (
    <div className={styles.MultiDroppableBoxContainer}>
      <Box className={styles.newDropTarget}>
        <DroppableNewColumn></DroppableNewColumn>
      </Box>
      {
        columns.map((column: Column, index: number) => (
          <Fragment key={index}>
            <Box flex={1}>
              <DroppableBox jiraItems={jiraItems} column={column}></DroppableBox>
            </Box>
            <Box className={styles.newDropTarget}>
              <DroppableNewColumn></DroppableNewColumn>
            </Box>
          </Fragment>
        ))
      }
    </div>
  );
};

export default MultiDroppableBoxContainer;
