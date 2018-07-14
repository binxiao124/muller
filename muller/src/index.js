import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

class Home extends Component {
  render () {
    return (
      <App/>
    )
  }
}

render(<App />, document.getElementById('container'));
registerServiceWorker();
