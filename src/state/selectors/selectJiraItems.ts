import { JiraItem } from "models";
import { Selector } from "reselect";
import { RootState } from "state/store";

export const selectJiraItems: Selector<RootState, JiraItem[]> = (state: RootState) => {
  return state.jira.jiraItems;
};
