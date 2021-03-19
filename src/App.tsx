import React from "react";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { JiraItem } from "models";
import { selectSortedJiraItems, selectUnsortedJiraItems } from "state";

import "./App.css";
import DroppableBox from "./container/DroppableBox/DroppableBox";
import MultiDroppableBoxContainer from "./container/MultiDroppableBoxContainer/MultiDroppableBoxContainer";
import ItemImport from "components/ItemImport/ItemImport";
import ItemCreate from "components/ItemCreate/ItemCreate";

function App() {
  const unsortedJiraItems: JiraItem[] = useSelector(selectUnsortedJiraItems);
  const sortedJiraItems: JiraItem[] = useSelector(selectSortedJiraItems);

  return (
    <DndProvider backend={HTML5Backend}>
      <Box display="flex" flexDirection="row" p={4} flexGrow={1}>
        <Box border={1} p={2} borderRadius={4} marginRight={2}>
          <DroppableBox jiraItems={unsortedJiraItems} columnId={undefined}>
            <ItemCreate></ItemCreate>
            <ItemImport></ItemImport>
          </DroppableBox>
        </Box>
        <Box flexGrow={1} border={1} p={2} borderRadius={4}>
          <MultiDroppableBoxContainer jiraItems={sortedJiraItems}>
          </MultiDroppableBoxContainer>
        </Box>
      </Box>
    </DndProvider>
  );
}

export default App;
