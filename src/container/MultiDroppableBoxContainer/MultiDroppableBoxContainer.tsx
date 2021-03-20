import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectColumns, selectItemToColumn } from "state";
import { Box } from "@material-ui/core";

import { Column, JiraItem, ItemToColumn } from "models";

import DroppableBox from "container/DroppableBox/DroppableBox";
import DroppableNewColumn from "container/DroppableNewColumn/DroppableNewColumn";
import styles from "./MultiDroppableBoxContainer.module.css";

export interface MultiDroppableBoxContainerProps {
  jiraItems?: JiraItem[];
}

const MultiDroppableBoxContainer: React.FC<MultiDroppableBoxContainerProps> = ({ jiraItems }) => {
  const columns: Column[] = useSelector(selectColumns);
  const itemToColumn: ItemToColumn = useSelector(selectItemToColumn);

  function getItemsForColumn(column: Column): JiraItem[] | undefined {
    return jiraItems?.filter((jiraItem: JiraItem) => itemToColumn[jiraItem.id] === column.id);
  }
  return (
    <div className={styles.MultiDroppableBoxContainer}>
      <Box className={styles.newDropTarget}>
        <DroppableNewColumn index={0}></DroppableNewColumn>
      </Box>
      {
        columns.map((column: Column, index: number) => (
          <Fragment key={column.id}>
            <Box flex={1}>
              <DroppableBox jiraItems={getItemsForColumn(column)} column={column}></DroppableBox>
            </Box>
            <Box className={styles.newDropTarget}>
              <DroppableNewColumn index={index + 1}></DroppableNewColumn>
            </Box>
          </Fragment>
        ))
      }
    </div>
  );
};

export default MultiDroppableBoxContainer;
