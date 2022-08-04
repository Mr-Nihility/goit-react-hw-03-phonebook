import { ADD, DELETE, FILTER } from './contacts-types';
import { combineReducers } from 'redux';

 const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case DELETE:
      return state.filter(el => el.id !== payload);

    default:
      return state;
  }
};

 const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
