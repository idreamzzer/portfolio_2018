import React, { Component } from 'react';
import { Provider } from './context';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div className="App">
            <Layout />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
