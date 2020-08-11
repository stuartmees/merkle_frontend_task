import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore'
import { startSetClients } from './actions/clients.js'
import AppRouter from './components/AppRouter.jsx';

const store = configureStore();
store.dispatch(startSetClients())

class App extends React.Component {
    constructor(){
        super()
        this.state = {
        }
      }

      render() {
          return(
              <Provider store={store}>
                  <AppRouter />
              </Provider>
          )
      }
}

ReactDOM.render(<App />, document.getElementById('app'));