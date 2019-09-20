import { combineReducers } from 'redux';
import * as LoginReducers from './login';
import * as DepartmentReducers from './department';

export default combineReducers(Object.assign(
  LoginReducers,
  DepartmentReducers
));