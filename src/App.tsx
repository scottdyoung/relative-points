import React from "react";
import { Box, Divider } from "@material-ui/core";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { JiraItem } from "models";
import { selectSortedJiraItems, selectUnsortedJiraItems } from "state";

import "./App.css";
import styles from "./App.module.css";
import DroppableBox from "./container/DroppableBox/DroppableBox";
import MultiDroppableBoxContainer from "./container/MultiDroppableBoxContainer/MultiDroppableBoxContainer";
import ItemImport from "components/ItemImport/ItemImport";
import ItemCreate from "components/ItemCreate/ItemCreate";

function App() {
  const unsortedJiraItems: JiraItem[] = useSelector(selectUnsortedJiraItems);
  const sortedJiraItems: JiraItem[] = useSelector(selectSortedJiraItems);

  return (
    <DndProvider backend={HTML5Backend}>
      <Box className={styles.RootContainer}>
        <Box className={styles.UnsortedContainer}>
          <Box className={styles.CreateNewContainer}>
            <ItemCreate></ItemCreate>
            <ItemImport></ItemImport>
          </Box>
          <Box marginBottom={2}>
            <Divider />
          </Box>
          <Box className={styles.UnsortedItemsContainer}>
            <DroppableBox jiraItems={unsortedJiraItems} column={undefined}>
            </DroppableBox>
          </Box>
        </Box>
        <Box className={styles.SortedContainer}>
          <MultiDroppableBoxContainer jiraItems={sortedJiraItems}>
          </MultiDroppableBoxContainer>
        </Box>
      </Box>
    </DndProvider>
  );
}

export default App;
