import { Column, JiraItem, ItemToColumn, createNewColumn } from "models";

export interface JiraState {
  jiraItems: JiraItem[];
  columns: Column[];
  itemToColumn: ItemToColumn;
}

export const initialState: JiraState = {
  jiraItems: [
    {
      id: "id-1",
      key: '1',
      title: "Foo Title 1"
    },
    {
      id: "id-2",
      key: '2',
      title: "Foo Title 2"
    },
    {
      id: "id-3",
      key: '3',
      title: "Foo Title 3"
    },
    {
      id: "id-4",
      key: '4',
      title: "Foo Title 4"
    }
  ],
  columns: [
    createNewColumn()
  ],
  itemToColumn: {}
};
