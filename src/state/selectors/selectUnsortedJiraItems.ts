import { JiraItem, ItemToColumn } from "models";
import { CombinedState } from "redux";
import { createSelector, Selector } from "reselect";

import { JiraState } from "state/appState";
import { selectJiraItems } from "./selectJiraItems";
import { selectItemToColumn } from "./selectItemToColumn";

export const selectUnsortedJiraItems: Selector<CombinedState<{ jira: JiraState }>, JiraItem[]> =
  createSelector([selectJiraItems, selectItemToColumn], (jiraItems: JiraItem[], itemToColumn: ItemToColumn) => {
    const sortedIds: string[] = Object.keys(itemToColumn).filter((key: string) => itemToColumn[key]);
    return jiraItems.filter((jiraItem: JiraItem) => !sortedIds.includes(jiraItem.id));
  });
