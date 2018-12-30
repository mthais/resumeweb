import initialState from './state'
import {
  IS_FETCHING_LOGGING_IN,
  IS_FETCHING_REGISTER,
  SET_LOGGED_USER,
  SET_REGISTERED_USER,
  SET_TOKEN
} from './types'

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_FETCHING_LOGGING_IN:
      return { ...state, isFetchingLoggingIn: payload }
    case IS_FETCHING_REGISTER:
      return { ...state, isFetchingRegister: payload }
    case SET_LOGGED_USER:
      return { ...state, loggedUser: payload }
    case SET_REGISTERED_USER:
      return { ...state, registeredUser: payload }
    case SET_TOKEN:
      return { ...state, token: payload }
    default:
      return state
  }
}

export default reducer
