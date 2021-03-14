import { ADD_BULK_JIRA_ITEMS, ADD_JIRA_ITEM, AppActionsTypes } from "../actions/actions";
import { AppState, initialState } from "../appState";

export function jiraItemReducer(
  state: AppState = initialState,
  action: AppActionsTypes
): AppState {
  switch (action.type) {
    case ADD_JIRA_ITEM:
      return {
        jiraItems: [...state.jiraItems, action.payload]
      };
    case ADD_BULK_JIRA_ITEMS:
      return {
        jiraItems: [...state.jiraItems, ...action.payload]
      };
    default:
      return state;
  }
}

