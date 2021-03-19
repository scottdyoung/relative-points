import { JiraItem } from "models";
import { CombinedState } from "redux";
import { createSelector, Selector } from "reselect";

import { JiraState } from "state/appState";
import { selectJiraItems } from "./selectJiraItems";

export const selectSortedJiraItems: Selector<CombinedState<{ jira: JiraState }>, JiraItem[]> =
  createSelector([selectJiraItems], (jiraItems: JiraItem[]) => {
    return jiraItems.filter((jiraItem: JiraItem) => jiraItem.columnId !== undefined);
  });
