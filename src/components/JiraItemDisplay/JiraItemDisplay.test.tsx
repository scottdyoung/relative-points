import React from 'react';
import ReactDOM from 'react-dom';
import JiraItemDisplay from './JiraItemDisplay';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JiraItemDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});