import React from 'react';
import ReactDOM from 'react-dom';
import DraggableJiraItem from './DraggableJiraItem';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DraggableJiraItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});