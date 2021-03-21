export interface CsvMeta {
  delimiter: string;
  linebreak: string;
  aborted: boolean;
  truncated: boolean;
  cursor: number;
}

export interface CsvData {
  data: string[];
  errors: string[];
  meta: CsvMeta;
}
