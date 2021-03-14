import React from "react";
import ReactDOM from "react-dom";
import ItemCreate from "./ItemCreate";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ItemCreate />, div);
  ReactDOM.unmountComponentAtNode(div);
});