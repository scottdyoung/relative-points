import React from 'react';
import ReactDOM from 'react-dom';
import DroppableNewColumn from './DroppableNewColumn';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DroppableNewColumn />, div);
  ReactDOM.unmountComponentAtNode(div);
});