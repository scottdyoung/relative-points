import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";

import { jiraItemReducer } from "./reducers/appReducers";

export const store = configureStore({
  reducer: combineReducers({
    jiraItem: jiraItemReducer
  })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
