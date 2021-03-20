import { JiraItem } from "./JiraItem";

export interface MoveItemPayload {
  jiraItem: JiraItem;
  columnId: string | undefined;
}
