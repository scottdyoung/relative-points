import { MoveItemPayload, ItemToColumn, Column, createNewColumn } from "models";
import { ADD_BULK_JIRA_ITEMS, ADD_JIRA_ITEM, AppActionsTypes, MOVE_JIRA_ITEM, CREATE_COLUMN_WITH_ITEM } from "../actions/actions";
import { JiraState, initialState } from "../appState";

function updateItemToColumn(moveItemPayload: MoveItemPayload, itemToColumn: ItemToColumn): ItemToColumn {
  return {
    ...itemToColumn,
    [moveItemPayload.jiraItem.id]: moveItemPayload.columnId
  };
}

function addColumnBeforeIndex(newColumn: Column, columns: Column[], addBeforeIndex: number): Column[] {
  const newColumns: Column[] = [...columns];
  newColumns.splice(addBeforeIndex, 0, newColumn);
  return newColumns;
}

function removeEmptyColumns(columns: Column[], itemToColumn: ItemToColumn): Column[] {
  if (columns.length <= 1) {
    return columns;
  }
  const usedColumnIds: (string | undefined)[] = Object.values(itemToColumn);
  return columns.filter((column: Column) => usedColumnIds.includes(column.id));
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
      const itemToColumn: ItemToColumn = updateItemToColumn(action.payload, state.itemToColumn);
      return {
        ...state,
        itemToColumn,
        columns: removeEmptyColumns(state.columns, itemToColumn)
      }
    case CREATE_COLUMN_WITH_ITEM: {
      const newColumn: Column = createNewColumn();
      const moveItemPayload: MoveItemPayload = {
        jiraItem: action.payload.jiraItem,
        columnId: newColumn.id
      };

      return {
        ...state,
        columns: addColumnBeforeIndex(newColumn, state.columns, action.payload.createIndexBefore),
        itemToColumn: updateItemToColumn(moveItemPayload, state.itemToColumn)
      }
    }
    default:
      return state;
  }
}
