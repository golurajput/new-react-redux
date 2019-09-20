import createReducer from '../helpers/createReducer'
import * as types from '../actions/types'

export const logIn = createReducer({}, {
  [types.LOGIN_SUCCESS](state, action) {
    return { ...state, user: action.payload, message: 'Successfull..' }
  },
  [types.LOGIN_ERROR](state, action) {
    return { ...state, error: action.payload, message: 'Error..' }
  },
});
