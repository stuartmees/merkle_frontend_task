import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import clientsReducer from '../reducers/clients';
import profileReducer from '../reducers/profile';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    // Store
    const store = createStore(
        combineReducers({
            clients: clientsReducer,
            profile: profileReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
        
    return store;
    }