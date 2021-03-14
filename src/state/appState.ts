import { JiraItem } from "models/JiraItem";

export interface JiraState {
  jiraItems: JiraItem[];
}

export const initialState: JiraState = {
  jiraItems: [
    {
      title: "Foo Title"
    }
  ]
};
