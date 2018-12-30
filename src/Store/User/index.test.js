import reducer from '.'
import initialState from './state'
import {
  IS_FETCHING_LOGGING_IN,
  IS_FETCHING_REGISTER,
  SET_LOGGED_USER,
  SET_REGISTERED_USER,
  SET_TOKEN
} from './types'

describe('Store/User/reducer', () => {
  describe('when action type is IS_FETCHING_LOGGING_IN', () => {
    it('should return expected state', () => {
      const result = reducer({}, { type: IS_FETCHING_LOGGING_IN, payload: true })
      expect(result).toEqual({ isFetchingLoggingIn: true })
    })
  })

  describe('when action type is IS_FETCHING_REGISTER', () => {
    it('should return expected state', () => {
      const result = reducer({}, { type: IS_FETCHING_REGISTER, payload: true })
      expect(result).toEqual({ isFetchingRegister: true })
    })
  })

  describe('when action type is SET_LOGGED_USER', () => {
    it('should return expected state', () => {
      const payload = { id: 1, name: 'user', email: 'user@test.com' }
      const result = reducer({}, { type: SET_LOGGED_USER, payload })
      expect(result).toEqual({ loggedUser: payload })
    })
  })

  describe('when action type is SET_REGISTERED_USER', () => {
    it('should return expected state', () => {
      const payload = { id: 1, name: 'user', email: 'user@test.com', password: '123' }
      const result = reducer({}, { type: SET_REGISTERED_USER, payload })
      expect(result).toEqual({ registeredUser: payload })
    })
  })

  describe('when action type is SET_TOKEN', () => {
    it('should return expected state', () => {
      const token = 'newToken'
      const result = reducer({}, { type: SET_TOKEN, payload: token })
      expect(result).toEqual({ token })
    })
  })

  describe('when pass another action type', () => {
    describe('and pass no state', () => {
      it('should return the initial state', () => {
        const result = reducer(undefined, {})
        expect(result).toEqual(initialState)
      })
    })

    describe('and pass a state', () => {
      it('should return the same state', () => {
        const result = reducer({}, {})
        expect(result).toEqual({})
      })
    })
  })
})
