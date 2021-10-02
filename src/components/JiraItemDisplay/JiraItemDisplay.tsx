import React from 'react';
import styles from './JiraItemDisplay.module.css';
import { JiraItem } from 'models';
import { Card, CardContent, Typography, Tooltip } from '@material-ui/core';

interface JiraItemDisplayProps {
  jiraItem: JiraItem;
}

const MAX_LENGTH = 75;

const JiraItemDisplay: React.FC<JiraItemDisplayProps> = ({ jiraItem }) => (
  <Card className={styles.JiraItemDisplay}>
    <CardContent>
      <Typography variant="caption" component="h6">
        {jiraItem?.key}
      </Typography>
      <Tooltip title={jiraItem.title || ''}>
        <Typography variant="body2" component="p">
          {jiraItem?.title.length > MAX_LENGTH
            ? jiraItem?.title.substring(0, MAX_LENGTH) + '...'
            : jiraItem?.title}
        </Typography>
      </Tooltip>
    </CardContent>
  </Card>
);

export default JiraItemDisplay;
