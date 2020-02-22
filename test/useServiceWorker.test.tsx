import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useServiceWorker, ProvideServiceWorker } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ProvideServiceWorker fileName="/my-sw.js">test</ProvideServiceWorker>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
