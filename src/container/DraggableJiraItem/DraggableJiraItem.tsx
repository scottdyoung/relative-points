import { CSSProperties } from '@material-ui/styles';
import { ItemTypes, JiraItem } from 'models';
import React, { memo, useEffect } from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import styles from './DraggableJiraItem.module.css';

export interface DraggableJiraItemProps {
  jiraItem: JiraItem;
  id?: string;
  left?: number;
  top?: number;
}


function getStyles(
  left: number,
  top: number,
  isDragging: boolean,
): CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  }
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
  }, [])

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
      role="DraggableBox"
    >
      { jiraItem?.title}
    </div>
  )
})

export default DraggableJiraItem;
