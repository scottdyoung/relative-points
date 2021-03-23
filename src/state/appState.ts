import { Column, JiraItem, ItemToColumn, createNewColumn } from "models";

export interface JiraState {
  jiraItems: JiraItem[];
  columns: Column[];
  itemToColumn: ItemToColumn;
}

export const initialState: JiraState = {
  jiraItems: [],
  columns: [
    createNewColumn()
  ],
  itemToColumn: {}
};
