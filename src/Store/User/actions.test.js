import {
  handleLogin,
  handleRegister,
  setLoggedUser,
  setToken,
  setRegisteredUser,
  toggleFetchingLoggingIn,
  toggleFetchingRegister
} from './actions'
import {
  IS_FETCHING_LOGGING_IN,
  IS_FETCHING_REGISTER,
  SET_LOGGED_USER,
  SET_REGISTERED_USER,
  SET_TOKEN
} from './types'

describe('Store/User/actions', () => {
  beforeEach(() => {
    fetch.resetMocks()
    localStorage.clear()
    jest.resetAllMocks()
    localStorage.setItem.mockClear()
  })

  describe('setToken', () => {
    let result

    beforeEach(() => {
      result = setToken('newToken')
    })

    it('should set a new value for token in localstorage', () => {
      expect(localStorage.setItem).toBeCalledWith('token', 'newToken')
    })

    it('should return an object which contains action type and token', () => {
      expect(result).toEqual({ type: SET_TOKEN, payload: 'newToken' })
    })
  })

  describe('setLoggedUser', () => {
    const user = { id: 123, name: 'user', email: 'user@test.com' }
    let result

    beforeEach(() => {
      result = setLoggedUser(user)
    })

    it('should set a new value for loggedUser in localstorage', () => {
      expect(localStorage.setItem).toBeCalledWith('loggedUser', JSON.stringify(user))
    })

    it('should return an object which contains action type and user', () => {
      expect(result).toEqual({ type: SET_LOGGED_USER, payload: user })
    })
  })

  describe('toggleFetchingLoggingIn', () => {
    let result

    beforeEach(() => {
      result = toggleFetchingLoggingIn(true)
    })

    it(`should return an object which
    contains action type and if is fetching`, () => {
      expect(result).toEqual({
        type: IS_FETCHING_LOGGING_IN,
        payload: true
      })
    })
  })

  describe('handleLogin', () => {
    const payload = {
      email: 'user@test.com',
      password: '123'
    }
    let dispatch

    beforeEach(() => {
      dispatch = jest.fn()
    })

    describe('when api returns correctly', () => {
      const apiReturn = {
        user: { id: 1, name: 'user', email: payload.email },
        token: 'newtoken'
      }

      beforeEach(async () => {
        fetch.mockResponse(JSON.stringify(apiReturn))

        await handleLogin(payload)(dispatch)
      })

      it('should call dispatch 4 times', () => {
        expect(dispatch).toHaveBeenCalledTimes(4)
      })

      describe('at the first call of dispatch', () => {
        it('should change isFetchingLoggingIn to true', () => {
          const call = dispatch.mock.calls[0][0]

          expect(call).toEqual({
            type: IS_FETCHING_LOGGING_IN,
            payload: true
          })
        })
      })

      describe('at the second call of dispatch', () => {
        it('should set the returned token', () => {
          const call = dispatch.mock.calls[1][0]

          expect(call).toEqual({
            type: SET_TOKEN,
            payload: apiReturn.token
          })
        })
      })

      describe('at the third call of dispatch', () => {
        it('should set the returned user as logged user', () => {
          const call = dispatch.mock.calls[2][0]

          expect(call).toEqual({
            type: SET_LOGGED_USER,
            payload: apiReturn.user
          })
        })
      })

      describe('at the fourth call of dispatch', () => {
        it('should change isFetchingLoggingIn to false', () => {
          const call = dispatch.mock.calls[3][0]

          expect(call).toEqual({
            type: IS_FETCHING_LOGGING_IN,
            payload: false
          })
        })
      })
    })

    describe('when api returns an error', () => {
      beforeEach(() => {
        fetch.mockReject(new Error('Not possible'))
      })

      it(`should to throw an Error
      which contains an expected message`, async () => {
        try {
          await handleLogin(payload)(dispatch)
        }
        catch (e) {
          expect(e).toEqual(new Error('Not possible'))
        }
      })
    })
  })

  describe('toggleFetchingRegister', () => {
    let result

    beforeEach(() => {
      result = toggleFetchingRegister(true)
    })

    it(`should return an object which
    contains action type and if is fetching`, () => {
      expect(result).toEqual({
        type: IS_FETCHING_REGISTER,
        payload: true
      })
    })
  })

  describe('setRegisteredUser', () => {
    const user = { name: 'user', email: 'user@test.com', password: '123' }
    let result

    beforeEach(() => {
      result = setRegisteredUser(user)
    })

    it('should return an object which contains action type and user', () => {
      expect(result).toEqual({ type: SET_REGISTERED_USER, payload: user })
    })
  })

  describe('handleRegister', () => {
    const payload = {
      name: 'user',
      email: 'user@test.com',
      password: '123'
    }
    let dispatch

    beforeEach(() => {
      dispatch = jest.fn()
    })

    describe('when api returns correctly', () => {
      const apiReturn = {
        id: 1, name: 'user', email: payload.email
      }

      beforeEach(async () => {
        fetch.mockResponse(JSON.stringify(apiReturn))

        await handleRegister(payload)(dispatch)
      })

      it('should call dispatch 3 times', () => {
        expect(dispatch).toHaveBeenCalledTimes(3)
      })

      describe('at the first call of dispatch', () => {
        it('should change isFetchingRegister to true', () => {
          const call = dispatch.mock.calls[0][0]

          expect(call).toEqual({
            type: IS_FETCHING_REGISTER,
            payload: true
          })
        })
      })

      describe('at the second call of dispatch', () => {
        it('should set the registeredUser', () => {
          const call = dispatch.mock.calls[1][0]

          expect(call).toEqual({
            type: SET_REGISTERED_USER,
            payload: apiReturn
          })
        })
      })

      describe('at the third call of dispatch', () => {
        it('should change isFetchingRegister to false', () => {
          const call = dispatch.mock.calls[2][0]

          expect(call).toEqual({
            type: IS_FETCHING_REGISTER,
            payload: false
          })
        })
      })
    })

    describe('when api returns an error', () => {
      beforeEach(() => {
        fetch.mockReject(new Error('Not possible'))
      })

      it(`should to throw an Error
      which contains an expected message`, async () => {
        try {
          await handleRegister(payload)(dispatch)
        }
        catch (e) {
          expect(e).toEqual(new Error('Not possible'))
        }
      })
    })
  })
})
