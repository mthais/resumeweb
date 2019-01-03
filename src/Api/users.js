import { doRequest } from '.'

const ENDPOINTS = {
  login: '/login',
  register: '/register'
}

/**
 * @param {Object} data
 * @param {string} data.email - user email
 * @param {string} data.name - user name
 * @param {string} data.password - user password
 * @returns {Promise} user and token
 */
export const login = async (data = {}) => {
  try {
    const { user, token } = await doRequest({
      method: 'POST',
      url: ENDPOINTS.login,
      body: JSON.stringify(data)
    })

    return { user, token }
  }
  catch (e) {
    throw e
  }
}

/**
 * @param {Object} data
 * @param {string} data.email - user email
 * @param {string} data.name - user name
 * @param {string} data.password - user password
 * @returns {Promise} registered user
 */
export const register = async (data) => {
  try {
    const registeredUser = await doRequest({
      url: ENDPOINTS.register,
      method: 'POST',
      body: JSON.stringify(data)
    })

    return registeredUser
  }
  catch (e) {
    throw e
  }
}
