import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './Reducer'


export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))