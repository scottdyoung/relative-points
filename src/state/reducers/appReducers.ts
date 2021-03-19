import { JiraItem } from "models";
import { ADD_BULK_JIRA_ITEMS, ADD_JIRA_ITEM, AppActionsTypes, MOVE_JIRA_ITEM } from "../actions/actions";
import { JiraState, initialState } from "../appState";

function updateJiraItem(jiraItem: JiraItem, jiraItems: JiraItem[]): JiraItem[] {
  return jiraItems.map((item: JiraItem) => {
    if (item.title === jiraItem.title) {
      return jiraItem;
    }
    return item;
  });
}

export function jiraItemReducer(
  state: JiraState = initialState,
  action: AppActionsTypes
): JiraState {
  switch (action.type) {
    case ADD_JIRA_ITEM:
      return {
        jiraItems: [...state.jiraItems, action.payload]
      };
    case ADD_BULK_JIRA_ITEMS:
      return {
        jiraItems: [...state.jiraItems, ...action.payload]
      };
    case MOVE_JIRA_ITEM:
      return {
        jiraItems: updateJiraItem(action.payload, state.jiraItems)
      }
    default:
      return state;
  }
}
