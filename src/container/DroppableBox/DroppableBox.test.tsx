import React from 'react';
import ReactDOM from 'react-dom';
import DroppableBox from './DroppableBox';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DroppableBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});