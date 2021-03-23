import React, { useState, ChangeEvent, useEffect, Dispatch } from "react";
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from "@material-ui/core";
import Add from '@material-ui/icons/Add';

import { AppActionsTypes, addJiraItem } from "state";
import { JiraItem, createNewJiraItem } from "models";

const ItemCreate: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState('');
  const [summary, setSummary] = useState('');
  const [canAdd, setCanAdd] = useState(false);

  const dispatch: Dispatch<AppActionsTypes> = useDispatch();

  useEffect(() => {
    setCanAdd(!!(key && summary));
  }, [key, summary]);

  function handleClickOpen(): void {
    setOpen(true);
  }

  function handleClose(): void {
    setOpen(false);
  }

  function handleAdd(): void {
    const jiraItem: JiraItem = createNewJiraItem({
      key,
      title: summary
    });
    dispatch(addJiraItem(jiraItem));
    handleClose();
  }

  function setKeyValue(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setKey(event.target.value);
  }

  function setSummaryValue(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setSummary(event.target.value);
  }

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <Add></Add>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Issue</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            onChange={setKeyValue}
            margin="dense"
            label="Key"
            type="text"
            value={key}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            onChange={setSummaryValue}
            margin="dense"
            label="Summary"
            type="text"
            value={summary}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button disabled={!canAdd} onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ItemCreate;
