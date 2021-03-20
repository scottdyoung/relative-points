import { JiraItem } from "models/JiraItem";

export interface JiraState {
  jiraItems: JiraItem[];
}

export const initialState: JiraState = {
  jiraItems: [
    {
      title: "Foo Title 1"
    },
    {
      title: "Foo Title 2"
    },
    {
      title: "Foo Title 3"
    },
    {
      title: "Foo Title 4"
    }
  ]
};
