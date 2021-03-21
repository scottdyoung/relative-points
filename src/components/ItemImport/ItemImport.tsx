import React, { RefObject } from 'react'
import { CSVReader } from 'react-papaparse'
import { IconButton } from '@material-ui/core';
import NoteAdd from '@material-ui/icons/NoteAdd'
import { JiraItem, createFromCsvFile, CsvData } from 'models';


const buttonRef: RefObject<CSVReader> = React.createRef();

const ItemImport: React.FC = () => {

  function handleOpenDialog(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    if (buttonRef.current) {
      buttonRef.current.open(event)
    }
  }

  function handleOnFileLoad(csvFile: CsvData[]): void {
    const jiraItems: JiraItem[] = createFromCsvFile(csvFile);
    console.log(jiraItems);
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
