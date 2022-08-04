import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './contacts/contacts-reducers';

const rootReducer = combineReducers({ contacts: reducer });
const store = createStore(rootReducer, composeWithDevTools());
export default store;
