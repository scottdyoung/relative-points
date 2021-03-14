import React from "react";
import { Box } from "@material-ui/core";

import "./App.css";
import DroppableBox from "./container/DroppableBox/DroppableBox";
import MultiDroppableBoxContainer from "./container/MultiDroppableBoxContainer/MultiDroppableBoxContainer";
import ItemCreate from "./components/ItemCreate/ItemCreate";
import ItemImport from "./components/ItemImport/ItemImport";

function App() {
  return (
    <Box display="flex" flexDirection="row" p={4}>
      <Box border={1} p={2} borderRadius={4} marginRight={2}>
        <DroppableBox>
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
