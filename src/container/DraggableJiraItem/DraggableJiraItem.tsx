import { JiraItem } from 'models';
import React from 'react';
import styles from './DraggableJiraItem.module.css';

export interface DraggableJiraItemProps {
  jiraItem: JiraItem;
}

const DraggableJiraItem: React.FC<DraggableJiraItemProps> = ({ jiraItem }) => (
  <div className={styles.DraggableJiraItem}>
    { jiraItem?.title}
  </div>
);

export default DraggableJiraItem;
