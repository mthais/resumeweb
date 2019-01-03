import { login as fetchLogin, register as fetchRegister } from '../../Api/users'
import {
  IS_FETCHING_LOGGING_IN,
  IS_FETCHING_REGISTER,
  SET_LOGGED_USER,
  SET_REGISTERED_USER,
  SET_TOKEN
} from './types'

// LOGIN

/**
 * @summary Set token in localstorage and returns the action
 * @param {string} token - Authorization token
 * @returns {Object} action type and payload
 */
export const setToken = token => {
  localStorage.setItem('token', token)
  return {
    type: SET_TOKEN,
    payload: token
  }
}

/**
 * @summary Set loggedUser in localstorage and returns the action
 * @param {Object} user
 * @returns {Object} action type and payload
 */
export const setLoggedUser = user => {
  localStorage.setItem('loggedUser', JSON.stringify(user))
  return {
    type: SET_LOGGED_USER,
    payload: user
  }
}

/**
 * @param {boolean} isFetching - is fetching login?
 * @returns {Object} action type and payload
 */
export const toggleFetchingLoggingIn = isFetching => ({
  type: IS_FETCHING_LOGGING_IN,
  payload: isFetching
})

/**
 * @param {Object} payload
 * @param {string} payload.email - login email
 * @param {string} payload.password - login password
 * @returns {Function} redux dispatch
 */
export const handleLogin = payload => async (dispatch) => {
  try {
    dispatch(toggleFetchingLoggingIn(true))
    const { user, token } = await fetchLogin(payload)
    dispatch(setToken(token))
    dispatch(setLoggedUser(user))
  }
  catch (e) {
    throw e
  }
  finally {
    dispatch(toggleFetchingLoggingIn(false))
  }
}

// REGISTER

/**
 * @param {boolean} isFetching - is fetching register?
 * @returns {Object} action type and payload
 */
export const toggleFetchingRegister = isFetching => ({
  type: IS_FETCHING_REGISTER,
  payload: isFetching
})

/**
 * @param {Object} user
 * @param {string} user.email - user email
 * @param {string} user.name - user name
 * @returns {Object} action type and payload
 */
export const setRegisteredUser = user => ({
  type: SET_REGISTERED_USER,
  payload: user
})

/**
 * @param {Object} payload
 * @param {string} payload.email - user email
 * @param {string} payload.name - user name
 * @param {string} payload.password - user password
 * @returns {Function} redux dispatch
 */
export const handleRegister = payload => async (dispatch) => {
  try {
    dispatch(toggleFetchingRegister(true))
    const registeredUser = await fetchRegister(payload)
    dispatch(setRegisteredUser(registeredUser))
  }
  catch (e) {
    throw e
  }
  finally {
    dispatch(toggleFetchingRegister(false))
  }
}
