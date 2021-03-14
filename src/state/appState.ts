import { JiraItem } from "models/JiraItem";

export interface AppState {
  jiraItems: JiraItem[];
}

export const initialState: AppState = {
  jiraItems: []
};
