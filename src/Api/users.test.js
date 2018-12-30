import { login, register } from './users'

describe('Api/users', () => {
  beforeEach(() => {
    fetch.resetMocks()
    jest.resetAllMocks()
  })

  describe('login', () => {
    describe('when api returns correctly', () => {
      let apiResponse = {
        user: { id: 1, name: 'user', email: 'user@test.com' },
        token: 'newToken'
      }

      beforeEach(() => {
        fetch.mockResponse(JSON.stringify(apiResponse))
      })

      it('should return user and token', async () => {
        let result = await login()
        expect(result).toEqual(apiResponse)
      })

      it('should do a get request for /login', async () => {
        await login()
        const [ enpoint, options ] = fetch.mock.calls[0]
        expect(enpoint).toEqual('/login')
        expect(options.method.toLowerCase()).toEqual('get')
      })
    })

    describe('when api returns an error', () => {
      beforeEach(() => {
        fetch.mockReject(new Error('Error found'))
      })

      it('should return error found', async () => {
        try {
          await login()
        }
        catch (e) {
          expect(e).toEqual(new Error('Error found'))
        }
      })
    })
  })

  describe('register', () => {
    describe('when api returns correctly', () => {
      let apiResponse = {
        user: { id: 1, name: 'user', email: 'user@test.com' }
      }

      beforeEach(() => {
        fetch.mockResponse(JSON.stringify(apiResponse))
      })

      it('should return user and token', async () => {
        let result = await register()
        expect(result).toEqual(apiResponse.user)
      })

      it('should do a post request for /register', async () => {
        await register()
        const [ enpoint, options ] = fetch.mock.calls[0]
        expect(enpoint).toEqual('/register')
        expect(options.method.toLowerCase()).toEqual('post')
      })
    })

    describe('when api returns an error', () => {
      beforeEach(() => {
        fetch.mockReject(new Error('Error found'))
      })

      it('should return error found', async () => {
        try {
          await register()
        }
        catch (e) {
          expect(e).toEqual(new Error('Error found'))
        }
      })
    })
  })
})
