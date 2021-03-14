import { JiraItem } from "models/JiraItem";

export const ADD_JIRA_ITEM = "ADD_JIRA_ITEM";
export const ADD_BULK_JIRA_ITEMS = "ADD_BULK_JIRA_ITEMS";

interface AddJiraItemAction {
  type: typeof ADD_JIRA_ITEM;
  payload: JiraItem;
}

interface AddBulkJiraAction {
  type: typeof ADD_BULK_JIRA_ITEMS;
  payload: JiraItem[];
}

export type AppActionsTypes = AddJiraItemAction | AddBulkJiraAction;

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
