console.log('Hello Stu\'s Project.');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore'
import App from './components/App.jsx';
import './styles/styles.scss'

const store = configureStore();

class WrappedApp extends React.Component {
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

ReactDOM.render(<WrappedApp />, document.getElementById('app'));