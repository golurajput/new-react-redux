import createReducer from '../helpers/createReducer'
import * as types from '../actions/types'

export const department = createReducer({}, {
  [types.GETS_DEPARTMENTS_SUCCESS](state, action) {
    return { ...state,data: action.payload.data, message: 'Successfull..' }
  },
  [types.GETS_DEPARTMENTS_ERROR](state, action) {
    return { ...state, error: action.payload, message: 'Error..' }
  },
  [types.CREATE_DEPARTMENT_SUCCESS](state, action) {
    return { ...state,create_data: action.payload.department, message: 'Successfull..' }
  },
  [types.CREATE_DEPARTMENT_ERROR](state, action) {
    return { ...state, create_error: action.payload, message: 'Error..' }
  },
  [types.GET_DEPARTMENT_SUCCESS](state, action) {
    return { ...state,department_data: action.payload, message: 'Successfull..' }
  },
  [types.GET_DEPARTMENT_ERROR](state, action) {
    return { ...state, error: action.payload, message: 'Error..' }
  },
  [types.UPDATE_DEPARTMENT_SUCCESS](state, action) {
    return { ...state,update_data: action.payload, message: 'Successfull..' }
  },
  [types.UPDATE_DEPARTMENT_ERROR](state, action) {
    debugger
    return { ...state,update_error: action.payload, message: 'Error..' }
  },
  [types.DELETE_DEPARTMENT_SUCCESS](state, action) {
    return { ...state,deletedData: action.payload, message: 'Successfull..' }
  },
  [types.DELETE_DEPARTMENT_ERROR](state, action) {
    return { ...state, error: action.payload, message: 'Error..' }
  },
});
