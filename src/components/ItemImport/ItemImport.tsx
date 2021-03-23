import React, { RefObject, Dispatch } from 'react'
import { useDispatch } from 'react-redux';
import { CSVReader } from 'react-papaparse'
import { IconButton } from '@material-ui/core';
import NoteAdd from '@material-ui/icons/NoteAdd';

import { AppActionsTypes, addBulkJiraAction } from 'state';
import { JiraItem, createFromCsvFile, CsvData } from 'models';

const buttonRef: RefObject<CSVReader> = React.createRef();

const ItemImport: React.FC = () => {
  const dispatch: Dispatch<AppActionsTypes> = useDispatch();

  function handleOpenDialog(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    if (buttonRef.current) {
      buttonRef.current.open(event)
    }
  }

  function handleOnFileLoad(csvFile: CsvData[]): void {
    const jiraItems: JiraItem[] = createFromCsvFile(csvFile);
    dispatch(addBulkJiraAction(jiraItems));
  }

  return (
    <>
      <CSVReader ref={buttonRef} onFileLoad={handleOnFileLoad}>
        {() => (
          <IconButton onClick={handleOpenDialog}>
            <NoteAdd></NoteAdd>
          </IconButton>
        )}
      </CSVReader>
    </>
  );
}

export default ItemImport;
