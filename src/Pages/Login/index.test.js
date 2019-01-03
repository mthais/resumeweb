import React from 'react'
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'
import { LoginPage } from '.'

describe('LoginPage', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      isFetchingLoggingIn: false,
      handleLogin: jest.fn()
    }

    wrapper = mount(
      <MemoryRouter initialEntries={ [ '/' ] }>
        <LoginPage { ...props } />
      </MemoryRouter>
    )
  })

  it('should match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('when submit is called', () => {
    const data = { email: 'user@test.com', password: '123' }

    beforeEach(async () => {
      await wrapper.find(LoginPage).instance().submit(data)
    })

    it('should calls handleSubmit function with data', () => {
      expect(props.handleLogin).toBeCalledWith(data)
    })
  })
})
