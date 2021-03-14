import React from "react";
import ReactDOM from "react-dom";
import MultiDroppableBoxContainer from "./MultiDroppableBoxContainer";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MultiDroppableBoxContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});