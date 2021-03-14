import React from "react";
import { Box } from "@material-ui/core";

import "./App.css";
import DroppableBox from "./container/DroppableBox/DroppableBox";
import MultiDroppableBoxContainer from "./container/MultiDroppableBoxContainer/MultiDroppableBoxContainer";
import { JiraItem } from "models";
import { useSelector } from "react-redux";
import { selectJiraItems } from "state";
import ItemImport from "components/ItemImport/ItemImport";
import ItemCreate from "components/ItemCreate/ItemCreate";

function App() {
  const jiraItems: JiraItem[] = useSelector(selectJiraItems);

  return (
    <Box display="flex" flexDirection="row" p={4}>
      <Box border={1} p={2} borderRadius={4} marginRight={2}>
        <DroppableBox jiraItems={jiraItems}>
          <ItemCreate></ItemCreate>
          <ItemImport></ItemImport>
        </DroppableBox>
      </Box>
      <Box flexGrow={1} border={1} p={2} borderRadius={4}>
        <MultiDroppableBoxContainer>
        </MultiDroppableBoxContainer>
      </Box>
    </Box>
  );
}

export default App;
