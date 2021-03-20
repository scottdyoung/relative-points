import { MoveItemPayload, ItemToColumn } from "models";
import { ADD_BULK_JIRA_ITEMS, ADD_JIRA_ITEM, AppActionsTypes, MOVE_JIRA_ITEM } from "../actions/actions";
import { JiraState, initialState } from "../appState";

function updateItemToColumn(moveItemPayload: MoveItemPayload, itemToColumn: ItemToColumn): ItemToColumn {
  return {
    ...itemToColumn,
    [moveItemPayload.jiraItem.id]: moveItemPayload.columnId
  };
}

export function jiraItemReducer(
  state: JiraState = initialState,
  action: AppActionsTypes
): JiraState {
  switch (action.type) {
    case ADD_JIRA_ITEM:
      return {
        ...state,
        jiraItems: [...state.jiraItems, action.payload]
      };
    case ADD_BULK_JIRA_ITEMS:
      return {
        ...state,
        jiraItems: [...state.jiraItems, ...action.payload]
      };
    case MOVE_JIRA_ITEM:
      return {
        ...state,
        itemToColumn: updateItemToColumn(action.payload, state.itemToColumn)
      }
    default:
      return state;
  }
}
