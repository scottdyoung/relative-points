import { Selector } from "reselect";

import { Column } from "models";
import { RootState } from "state/store";

export const selectColumns: Selector<RootState, Column[]> = (state: RootState) => {
  return state.jira.columns;
};
