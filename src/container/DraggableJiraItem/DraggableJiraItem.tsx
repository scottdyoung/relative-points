import { ItemTypes, JiraItem } from 'models';
import React, { memo, useEffect } from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import styles from './DraggableJiraItem.module.css';
import JiraItemDisplay from 'components/JiraItemDisplay/JiraItemDisplay';

export interface DraggableJiraItemProps {
  jiraItem: JiraItem;
  id?: string;
  left?: number;
  top?: number;
}

const DraggableJiraItem: React.FC<DraggableJiraItemProps> = memo(function DraggableBox(
  props,
) {
  const { left, top, id, jiraItem } = props
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.JIRA_ITEM,
      item: jiraItem,
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [id, left, top, jiraItem],
  )

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])

  return (
    <div
      ref={drag}
      className={isDragging ? styles.itemDragging : styles.DraggableJiraItem}
    >
      <JiraItemDisplay jiraItem={jiraItem}></JiraItemDisplay>
    </div>
  )
})

export default DraggableJiraItem;
