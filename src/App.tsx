import React from "react";
import { Box, Divider } from "@material-ui/core";
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
        <Box display="flex" flexDirection="column" border={1} p={2} borderRadius={4} marginRight={2}>
          <Box display="flex" flexDirection="row" flexGrow={0}>
            <ItemCreate></ItemCreate>
            <ItemImport></ItemImport>
          </Box>
          <Box marginBottom={2}>
            <Divider />
          </Box>
          <Box display="flex" flexDirection="row" flexGrow={1}>
            <DroppableBox jiraItems={unsortedJiraItems} column={undefined}>
            </DroppableBox>
          </Box>
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
