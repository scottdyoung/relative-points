import React from "react";
import ReactDOM from "react-dom";
import ItemImport from "./ItemImport";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ItemImport />, div);
  ReactDOM.unmountComponentAtNode(div);
});