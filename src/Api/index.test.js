import { doRequest } from '.'

describe('Api/doRequest', () => {
  beforeEach(() => {
    fetch.resetMocks()
    jest.resetAllMocks()
  })

  describe('when api returns correctly', () => {
    beforeEach(() => {
      fetch.mockResponse(JSON.stringify({ result: 'ok' }))
    })

    it('should return result ok', async () => {
      let result = await doRequest({ url: '/' })
      expect(result).toEqual({ result: 'ok' })
    })
  })

  describe('when api returns an error', () => {
    beforeEach(() => {
      fetch.mockReject(new Error('Error found'))
    })

    it('should return error found', async () => {
      try {
        await doRequest({ url: '/' })
      }
      catch (e) {
        expect(e).toEqual(new Error('Error found'))
      }
    })
  })
})
