import { Selector } from "reselect";

import { RootState } from "state/store";
import { ItemToColumn } from "models";

export const selectItemToColumn: Selector<RootState, ItemToColumn> = (state: RootState) => {
  return state.jira.itemToColumn;
};
