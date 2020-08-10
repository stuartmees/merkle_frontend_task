import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore'
import App from './components/App.jsx';


const store = configureStore();

class ConnectedApp extends React.Component {
    constructor(){
        super()
        this.state = {
        }
      }

      render() {
          return(
              <Provider store={store}>
                  <App />
              </Provider>
          )
      }
}

ReactDOM.render(<ConnectedApp />, document.getElementById('app'));