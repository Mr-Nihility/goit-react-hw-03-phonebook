import { ADD, DELETE, FILTER } from './contacts-types';
import { combineReducers } from 'redux';

export const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case DELETE:
      return state.filter(el => el.id !== payload);

    default:
      return state;
  }
};

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  item: itemReducer,
  filter: filterReducer,
});
