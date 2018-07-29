import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './app/reducers'
import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleWare(rootReducer);
ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
