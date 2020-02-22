import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { ProvideServiceWorker } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<div>test</div>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
