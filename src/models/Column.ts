import { v4 as uuidv4 } from 'uuid';

export interface Column {
  id: string | undefined;
}

export function createNewColumn(): Column {
  return {
    id: uuidv4()
  };
}
