import { CsvData } from "./CsvData";

const JIRA_KEY_MAP: { [key: string]: keyof JiraItem } = {
  Summary: 'title',
  "Issue key": 'key',
  "Issue id": 'id'
};

type KeyToIndex = {
  [key in keyof JiraItem]: number;
};

export interface JiraItem {
  title: string;
  key: string;
  id: string;
}

export function createFromCsvFile(fileData: CsvData[]): JiraItem[] {
  const keyToIndex: KeyToIndex = getKeyToIndexes(fileData[0].data);
  return fileData.slice(1)
    .map((csvData: CsvData) => createFromCsv(csvData.data, keyToIndex))
    .filter((jiraItem: JiraItem) => jiraItem.id);
}

function createFromCsv(csvData: string[], keyToIndex: KeyToIndex): JiraItem {
  return Object.keys(keyToIndex).reduce((jiraItem: JiraItem, key: string): JiraItem => {
    jiraItem[key as keyof JiraItem] = csvData[keyToIndex[key as keyof JiraItem]];
    return jiraItem;
  }, {} as JiraItem);
}

function getKeyToIndexes(headers: string[]): KeyToIndex {
  return Object.keys(JIRA_KEY_MAP).reduce((keyToIndex: KeyToIndex, key: string): KeyToIndex => {
    const jiraItemKey: keyof JiraItem = JIRA_KEY_MAP[key];
    keyToIndex[jiraItemKey] = headers.indexOf(key);
    return keyToIndex;
  }, {} as KeyToIndex);
}
