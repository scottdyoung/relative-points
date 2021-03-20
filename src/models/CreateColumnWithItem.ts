import { JiraItem } from "./JiraItem";

export interface CreateColumnWithItem {
  createIndexBefore: number;
  jiraItem: JiraItem;
}
