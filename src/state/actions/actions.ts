import { JiraItem } from "models/JiraItem";
import { MoveItemPayload } from "models";

export const ADD_JIRA_ITEM = "ADD_JIRA_ITEM";
export const ADD_BULK_JIRA_ITEMS = "ADD_BULK_JIRA_ITEMS";
export const MOVE_JIRA_ITEM = "MOVE_JIRA_ITEM";

interface AddJiraItemAction {
  type: typeof ADD_JIRA_ITEM;
  payload: JiraItem;
}

interface AddBulkJiraAction {
  type: typeof ADD_BULK_JIRA_ITEMS;
  payload: JiraItem[];
}

interface MoveJiraItemAction {
  type: typeof MOVE_JIRA_ITEM;
  payload: MoveItemPayload;
}

export type AppActionsTypes = AddJiraItemAction | AddBulkJiraAction | MoveJiraItemAction;

export function addJiraItem(jiraItem: JiraItem): AppActionsTypes {
  return {
    type: ADD_JIRA_ITEM,
    payload: jiraItem
  };
}

export function addBulkJiraAction(jiraItems: JiraItem[]): AppActionsTypes {
  return {
    type: ADD_BULK_JIRA_ITEMS,
    payload: jiraItems
  };
}

export function moveJiraItemAction(payload: MoveItemPayload): AppActionsTypes {
  return {
    type: MOVE_JIRA_ITEM,
    payload
  };
}
