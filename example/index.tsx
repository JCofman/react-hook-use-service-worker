import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useServiceWorker, ProvideServiceWorker } from '../.';

const MyComponent = () => {
  const mySW = useServiceWorker();

  return <div>current service worker status: {mySW.serviceWorkerStatus}</div>;
};

const App = () => {
  return (
    <div>
      <ProvideServiceWorker fileName={'/my-sw.js'}>
        <MyComponent></MyComponent>
      </ProvideServiceWorker>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
