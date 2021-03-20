import { Column, ItemToColumn } from "models";
import { JiraItem } from "models/JiraItem";

export interface JiraState {
  jiraItems: JiraItem[];
  columns: Column[];
  itemToColumn: ItemToColumn;
}

export const initialState: JiraState = {
  jiraItems: [
    {
      id: "id-1",
      title: "Foo Title 1"
    },
    {
      id: "id-2",
      title: "Foo Title 2"
    },
    {
      id: "id-3",
      title: "Foo Title 3"
    },
    {
      id: "id-4",
      title: "Foo Title 4"
    }
  ],
  columns: [
    {
      id: "FOO-ID-1"
    }
  ],
  itemToColumn: {}
};
