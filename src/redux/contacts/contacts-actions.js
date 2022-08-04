import { ADD, DELETE, FILTER } from './contacts-types';
import { nanoid } from 'nanoid';

export const addUser = user => ({
  type: ADD,
  payload: { ...user, id: nanoid() },
});
export const deleteUser = id => ({ type: DELETE, payload: id });
export const filterUser = value => ({ type: FILTER, payload: value });
